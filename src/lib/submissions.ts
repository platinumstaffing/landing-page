/**
 * Integration boundary for form submissions.
 *
 * Today: validate → spam gate → Resend email (and optional Blob URL for resumes).
 * Later: swap the body of `deliverSubmission` to persist to a DB/ATS without
 * changing form components or Server Action signatures.
 */

import { Resend } from "resend";

export type SubmissionKind =
  | "request-talent"
  | "submit-resume"
  | "general-contact"
  | "consultation";

export type SubmissionPayload = {
  kind: SubmissionKind;
  subject: string;
  fields: Record<string, string | number | boolean | undefined | null>;
  resumeUrl?: string;
};

export type DeliveryResult =
  | { ok: true; id?: string }
  | { ok: false; error: string };

function formatFields(fields: SubmissionPayload["fields"]): string {
  return Object.entries(fields)
    .filter(([, value]) => value !== undefined && value !== null && value !== "")
    .map(([key, value]) => `${key}: ${String(value)}`)
    .join("\n");
}

export async function deliverSubmission(
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
      return { ok: false, error: "We could not send your message. Please try again." };
    }

    return { ok: true, id: data?.id };
  } catch (error) {
    console.error("[submissions] Unexpected error", error);
    return { ok: false, error: "We could not send your message. Please try again." };
  }
}

/** Honeypot spam gate. Turnstile can be layered on when env keys are present. */
export function passesSpamGate(input: { website?: string }): boolean {
  if (input.website && input.website.trim().length > 0) return false;
  return true;
}
