"use server";

import {
  consultationSchema,
  generalContactSchema,
  requestTalentSchema,
  submitResumeSchema,
  type ActionResult,
} from "@/lib/forms/schemas";
import { deliverSubmission, passesSpamGate } from "@/lib/submissions";

function fieldErrorsFromZod(
  error: { flatten: () => { fieldErrors: Record<string, string[] | undefined> } },
): Record<string, string[]> {
  const flat = error.flatten().fieldErrors;
  const out: Record<string, string[]> = {};
  for (const [key, value] of Object.entries(flat)) {
    if (value?.length) out[key] = value;
  }
  return out;
}

function withoutSpamFields<T extends { website?: string }>(
  data: T,
): Omit<T, "website"> {
  const { website: _website, ...rest } = data;
  void _website;
  return rest;
}

export async function submitRequestTalent(
  input: unknown,
): Promise<ActionResult> {
  const parsed = requestTalentSchema.safeParse(input);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Please correct the highlighted fields.",
      fieldErrors: fieldErrorsFromZod(parsed.error),
    };
  }

  if (!passesSpamGate({ website: parsed.data.website })) {
    return { status: "success", message: "Thank you. Your request has been received." };
  }

  const fields = withoutSpamFields(parsed.data);
  const result = await deliverSubmission({
    kind: "request-talent",
    subject: `Request Talent — ${fields.companyName}`,
    fields,
  });

  if (!result.ok) {
    return { status: "error", message: result.error };
  }

  return {
    status: "success",
    message:
      "Thank you. Your talent request has been received. A Platinum Staffing representative will follow up shortly.",
  };
}

export async function submitResumeAction(
  input: unknown,
): Promise<ActionResult> {
  const parsed = submitResumeSchema.safeParse(input);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Please correct the highlighted fields.",
      fieldErrors: fieldErrorsFromZod(parsed.error),
    };
  }

  if (!passesSpamGate({ website: parsed.data.website })) {
    return {
      status: "success",
      message: "Thank you. Your résumé has been received.",
    };
  }

  const { consent: _consent, resumeUrl, ...rest } = withoutSpamFields(parsed.data);
  void _consent;
  const result = await deliverSubmission({
    kind: "submit-resume",
    subject: `Talent Network — ${rest.firstName} ${rest.lastName}`,
    fields: rest,
    resumeUrl,
  });

  if (!result.ok) {
    return { status: "error", message: result.error };
  }

  return {
    status: "success",
    message:
      "Thank you for joining our talent network. A recruiter will review your information and contact you when a matching opportunity becomes available.",
  };
}

export async function submitGeneralContact(
  input: unknown,
): Promise<ActionResult> {
  const parsed = generalContactSchema.safeParse(input);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Please correct the highlighted fields.",
      fieldErrors: fieldErrorsFromZod(parsed.error),
    };
  }

  if (!passesSpamGate({ website: parsed.data.website })) {
    return { status: "success", message: "Thank you. Your message has been sent." };
  }

  const fields = withoutSpamFields(parsed.data);
  const result = await deliverSubmission({
    kind: "general-contact",
    subject: `Website Contact — ${fields.firstName} ${fields.lastName}`,
    fields,
  });

  if (!result.ok) {
    return { status: "error", message: result.error };
  }

  return {
    status: "success",
    message: "Thank you. Your message has been sent. We’ll respond shortly.",
  };
}

export async function submitConsultation(
  input: unknown,
): Promise<ActionResult> {
  const parsed = consultationSchema.safeParse(input);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Please correct the highlighted fields.",
      fieldErrors: fieldErrorsFromZod(parsed.error),
    };
  }

  if (!passesSpamGate({ website: parsed.data.website })) {
    return {
      status: "success",
      message: "Thank you. Your consultation request has been received.",
    };
  }

  const fields = withoutSpamFields(parsed.data);
  const result = await deliverSubmission({
    kind: "consultation",
    subject: `Consultation Request — ${fields.companyName}`,
    fields,
  });

  if (!result.ok) {
    return { status: "error", message: result.error };
  }

  return {
    status: "success",
    message:
      "Thank you. Your consultation request has been received. We’ll confirm a time shortly.",
  };
}
