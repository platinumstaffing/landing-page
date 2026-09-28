import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const { appendSubmissionToSheet, resendSend } = vi.hoisted(() => ({
  appendSubmissionToSheet: vi.fn(),
  resendSend: vi.fn(),
}));

vi.mock("@/lib/google-sheets", () => ({
  appendSubmissionToSheet,
}));

vi.mock("resend", () => ({
  Resend: class {
    emails = { send: resendSend };
  },
}));

import { deliverSubmission } from "@/lib/submissions";

const basePayload = {
  kind: "general-contact" as const,
  subject: "Website Contact — Avery Morgan",
  fields: {
    firstName: "Avery",
    lastName: "Morgan",
    email: "avery@example.com",
    reason: "General Question",
    message: "Please contact me about staffing.",
  },
};

describe("deliverSubmission failure order", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    process.env.RESEND_API_KEY = "re_test";
    process.env.CONTACT_FROM_EMAIL = "from@example.com";
    process.env.CONTACT_TO_EMAIL = "to@example.com";
  });

  afterEach(() => {
    delete process.env.RESEND_API_KEY;
    delete process.env.CONTACT_FROM_EMAIL;
    delete process.env.CONTACT_TO_EMAIL;
  });

  it("blocks success when the sheet write fails and does not send email", async () => {
    appendSubmissionToSheet.mockResolvedValueOnce({
      ok: false,
      error: "Sheet unavailable",
    });

    const result = await deliverSubmission(basePayload);

    expect(result).toEqual({ ok: false, error: "Sheet unavailable" });
    expect(appendSubmissionToSheet).toHaveBeenCalledOnce();
    expect(resendSend).not.toHaveBeenCalled();
  });

  it("returns success when the sheet write succeeds even if email fails", async () => {
    appendSubmissionToSheet.mockResolvedValueOnce({ ok: true });
    resendSend.mockResolvedValueOnce({
      data: null,
      error: { message: "Resend down" },
    });

    const result = await deliverSubmission(basePayload);

    expect(result).toEqual({ ok: true, id: undefined });
    expect(appendSubmissionToSheet).toHaveBeenCalledOnce();
    expect(resendSend).toHaveBeenCalledOnce();
  });

  it("returns the Resend id when both sheet and email succeed", async () => {
    appendSubmissionToSheet.mockResolvedValueOnce({ ok: true });
    resendSend.mockResolvedValueOnce({
      data: { id: "email_123" },
      error: null,
    });

    const result = await deliverSubmission(basePayload);

    expect(result).toEqual({ ok: true, id: "email_123" });
  });
});
