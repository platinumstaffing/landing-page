import { describe, expect, it } from "vitest";

import {
  buildSheetRow,
  getSheetHeaders,
  getSheetTabName,
} from "@/lib/google-sheets";
import type { SubmissionPayload } from "@/lib/submissions";

describe("google sheets column mapping", () => {
  it("maps each submission kind to the planned tab name", () => {
    expect(getSheetTabName("request-talent")).toBe("Request Talent");
    expect(getSheetTabName("submit-resume")).toBe("Talent Network");
    expect(getSheetTabName("general-contact")).toBe("General Contact");
    expect(getSheetTabName("consultation")).toBe("Consultation");
  });

  it("builds a Request Talent row in header order with ISO submittedAt", () => {
    const payload: SubmissionPayload = {
      kind: "request-talent",
      subject: "[Request Talent] Temporary Staffing — Acme",
      fields: {
        companyName: "Acme",
        contactName: "Jordan Lee",
        jobTitle: "Ops Manager",
        businessEmail: "jordan@example.com",
        phone: "2155550100",
        companyAddress: "1 Main St",
        industry: "Manufacturing",
        employeesNeeded: "5",
        positions: "Operators",
        employmentType: "Temporary Staffing",
        preferredStartDate: "2026-10-01",
        staffingNeeds: "Five second-shift operators.",
        howHeard: "Referral",
        additionalComments: "Urgent",
      },
    };

    const submittedAt = "2026-09-28T18:00:00.000Z";
    const row = buildSheetRow(payload, submittedAt);

    expect(getSheetHeaders("request-talent")).toEqual([
      "submittedAt",
      "companyName",
      "contactName",
      "jobTitle",
      "businessEmail",
      "phone",
      "companyAddress",
      "industry",
      "employeesNeeded",
      "positions",
      "employmentType",
      "preferredStartDate",
      "staffingNeeds",
      "howHeard",
      "additionalComments",
    ]);
    expect(row).toEqual([
      submittedAt,
      "Acme",
      "Jordan Lee",
      "Ops Manager",
      "jordan@example.com",
      "2155550100",
      "1 Main St",
      "Manufacturing",
      "5",
      "Operators",
      "Temporary Staffing",
      "2026-10-01",
      "Five second-shift operators.",
      "Referral",
      "Urgent",
    ]);
  });

  it("places resumeUrl from the payload top-level field", () => {
    const payload: SubmissionPayload = {
      kind: "submit-resume",
      subject: "Talent Network — Taylor Reed",
      fields: {
        firstName: "Taylor",
        lastName: "Reed",
        email: "taylor@example.com",
        phone: "2155550101",
        city: "Philadelphia",
        state: "PA",
        preferredIndustry: "Logistics",
        desiredPosition: "Dispatcher",
        employmentType: "Direct Hire",
        preferredShift: "Days",
        yearsExperience: "3",
        education: "High school",
        certifications: "Forklift",
        additionalComments: "Available immediately",
      },
      resumeUrl: "https://blob.example/resumes/taylor.pdf",
    };

    const row = buildSheetRow(payload, "2026-09-28T18:00:00.000Z");
    const headers = getSheetHeaders("submit-resume");
    const resumeIndex = headers.indexOf("resumeUrl");

    expect(resumeIndex).toBeGreaterThan(-1);
    expect(row[resumeIndex]).toBe("https://blob.example/resumes/taylor.pdf");
    expect(row).toHaveLength(headers.length);
  });

  it("writes empty strings for missing optional fields", () => {
    const payload: SubmissionPayload = {
      kind: "general-contact",
      subject: "Website Contact — Avery Morgan",
      fields: {
        firstName: "Avery",
        lastName: "Morgan",
        email: "avery@example.com",
        reason: "General Question",
        message: "Please contact me about staffing.",
      },
    };

    const row = buildSheetRow(payload, "2026-09-28T18:00:00.000Z");

    expect(row).toEqual([
      "2026-09-28T18:00:00.000Z",
      "Avery",
      "Morgan",
      "avery@example.com",
      "",
      "",
      "General Question",
      "Please contact me about staffing.",
    ]);
  });
});
