import { describe, expect, it } from "vitest";

import {
  generalContactSchema,
  requestTalentSchema,
  submitResumeSchema,
} from "@/lib/forms/schemas";

describe("form schemas", () => {
  it("accepts a valid general contact submission", () => {
    const result = generalContactSchema.safeParse({
      firstName: "Avery",
      lastName: "Morgan",
      email: "avery@example.com",
      reason: "General Question",
      message: "Please contact me about your staffing services.",
      website: "",
    });

    expect(result.success).toBe(true);
  });

  it("rejects malformed contact data", () => {
    const result = generalContactSchema.safeParse({
      firstName: "",
      lastName: "",
      email: "not-an-email",
      reason: "",
      message: "short",
    });

    expect(result.success).toBe(false);
  });

  it("requires complete employer staffing details", () => {
    const result = requestTalentSchema.safeParse({
      companyName: "Platinum Partner",
      contactName: "Jordan Lee",
      businessEmail: "jordan@example.com",
      phone: "2155550100",
      industry: "Manufacturing",
      employeesNeeded: "5",
      positions: "Machine operators",
      employmentType: "Temp-to-Hire",
      staffingNeeds: "Five experienced operators for the second shift.",
      website: "",
    });

    expect(result.success).toBe(true);
  });

  it("requires candidate consent", () => {
    const result = submitResumeSchema.safeParse({
      firstName: "Taylor",
      lastName: "Reed",
      email: "taylor@example.com",
      phone: "2155550101",
      city: "Philadelphia",
      state: "PA",
      preferredIndustry: "Logistics",
      desiredPosition: "Dispatcher",
      employmentType: "Direct Hire",
      consent: false,
      website: "",
    });

    expect(result.success).toBe(false);
  });
});
