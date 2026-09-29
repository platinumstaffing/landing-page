/**
 * Integration boundary for form submissions.
 *
 * Flow: validate → spam gate → Google Sheet row → Resend notification
 * (and optional Blob URL for resumes). Form components and Server Action
 * signatures stay stable when the store or notifier changes.
 */

import { Resend } from "resend";

import { appendSubmissionToSheet } from "@/lib/google-sheets";

export type SubmissionKind =
  "request-talent" | "submit-resume" | "general-contact" | "consultation";

export type SubmissionPayload = {
  kind: SubmissionKind;
  subject: string;
  fields: Record<string, string | number | boolean | undefined | null>;
  resumeUrl?: string;
};

export type DeliveryResult =
  { ok: true; id?: string } | { ok: false; error: string };

function formatFields(fields: SubmissionPayload["fields"]): string {
  return Object.entries(fields)
    .filter(
      ([, value]) => value !== undefined && value !== null && value !== "",
    )
    .map(([key, value]) => `${key}: ${String(value)}`)
    .join("\n");
}

async function sendSubmissionEmail(
  payload: SubmissionPayload,
): Promise<DeliveryResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    console.error(
      "[submissions] Missing RESEND_API_KEY, CONTACT_FROM_EMAIL, or CONTACT_TO_EMAIL",
    );
    return {
      ok: false,
      error:
        "Form delivery is not configured. Please try again later or contact us by phone.",
    };
  }

  const resend = new Resend(apiKey);
  const body = [
    `Submission type: ${payload.kind}`,
    "",
    formatFields(payload.fields),
    payload.resumeUrl ? `\nResume URL: ${payload.resumeUrl}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      subject: payload.subject,
      text: body,
      replyTo:
        typeof payload.fields.email === "string"
          ? payload.fields.email
          : typeof payload.fields.businessEmail === "string"
            ? payload.fields.businessEmail
            : undefined,
    });

    if (error) {
      console.error("[submissions] Resend error", error);
      return {
        ok: false,
        error: "We could not send your message. Please try again.",
      };
    }

    return { ok: true, id: data?.id };
  } catch (error) {
    console.error("[submissions] Unexpected error", error);
    return {
      ok: false,
      error: "We could not send your message. Please try again.",
    };
  }
}

export async function deliverSubmission(
  payload: SubmissionPayload,
): Promise<DeliveryResult> {
  const sheetResult = await appendSubmissionToSheet(payload);
  if (!sheetResult.ok) {
    return { ok: false, error: sheetResult.error };
  }

  const emailResult = await sendSubmissionEmail(payload);
  if (!emailResult.ok) {
    // Row is already persisted; do not fail the visitor or invite a duplicate row.
    console.error(
      "[submissions] Email notification failed after sheet write",
      emailResult.error,
    );
  }

  return { ok: true, id: emailResult.ok ? emailResult.id : undefined };
}

/** Honeypot spam gate. Turnstile can be layered on when env keys are present. */
export function passesSpamGate(input: { website?: string }): boolean {
  if (input.website && input.website.trim().length > 0) return false;
  return true;
}
