/**
 * Appends validated form submissions to a private Google Sheet.
 * One workbook, one tab per form kind. Staff export CSV/Excel from Sheets.
 */

import { google } from "googleapis";

import type { SubmissionKind, SubmissionPayload } from "@/lib/submissions";

export type SheetWriteResult = { ok: true } | { ok: false; error: string };

const SHEET_TABS: Record<SubmissionKind, string> = {
  "request-talent": "Request Talent",
  "submit-resume": "Talent Network",
  "general-contact": "General Contact",
  consultation: "Consultation",
};

const SHEET_COLUMNS: Record<SubmissionKind, readonly string[]> = {
  "request-talent": [
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
  ],
  "submit-resume": [
    "submittedAt",
    "firstName",
    "lastName",
    "email",
    "phone",
    "city",
    "state",
    "preferredIndustry",
    "desiredPosition",
    "employmentType",
    "preferredShift",
    "yearsExperience",
    "education",
    "certifications",
    "resumeUrl",
    "additionalComments",
  ],
  "general-contact": [
    "submittedAt",
    "firstName",
    "lastName",
    "email",
    "phone",
    "companyName",
    "reason",
    "message",
  ],
  consultation: [
    "submittedAt",
    "companyName",
    "contactName",
    "email",
    "phone",
    "preferredDate",
    "preferredTime",
    "meetingPreference",
    "workforceNeeds",
  ],
};

export function getSheetTabName(kind: SubmissionKind): string {
  return SHEET_TABS[kind];
}

export function getSheetHeaders(kind: SubmissionKind): readonly string[] {
  return SHEET_COLUMNS[kind];
}

function cellValue(
  value: string | number | boolean | undefined | null,
): string {
  if (value === undefined || value === null) return "";
  return String(value);
}

/**
 * Builds one data row in header order. `submittedAt` is ISO-8601 UTC.
 * Resume URL comes from the payload top-level field when present.
 */
export function buildSheetRow(
  payload: SubmissionPayload,
  submittedAt: string = new Date().toISOString(),
): string[] {
  const headers = getSheetHeaders(payload.kind);
  return headers.map((header) => {
    if (header === "submittedAt") return submittedAt;
    if (header === "resumeUrl") return cellValue(payload.resumeUrl);
    return cellValue(payload.fields[header]);
  });
}

function quotedRange(tabName: string, a1: string): string {
  const escaped = tabName.replaceAll("'", "''");
  return `'${escaped}'!${a1}`;
}

type ServiceAccountCredentials = {
  client_email: string;
  private_key: string;
};

function parseServiceAccountCredentials(
  encoded: string,
): ServiceAccountCredentials | null {
  try {
    const json = Buffer.from(encoded, "base64").toString("utf8");
    const parsed = JSON.parse(json) as Partial<ServiceAccountCredentials>;
    if (
      typeof parsed.client_email !== "string" ||
      typeof parsed.private_key !== "string" ||
      !parsed.client_email ||
      !parsed.private_key
    ) {
      return null;
    }
    return {
      client_email: parsed.client_email,
      private_key: parsed.private_key,
    };
  } catch {
    return null;
  }
}

export async function appendSubmissionToSheet(
  payload: SubmissionPayload,
): Promise<SheetWriteResult> {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID?.trim();
  const encodedCredentials =
    process.env.GOOGLE_SERVICE_ACCOUNT_JSON_BASE64?.trim();

  if (!spreadsheetId || !encodedCredentials) {
    console.error(
      "[google-sheets] Missing GOOGLE_SHEETS_SPREADSHEET_ID or GOOGLE_SERVICE_ACCOUNT_JSON_BASE64",
    );
    return {
      ok: false,
      error:
        "Form delivery is not configured. Please try again later or contact us by phone.",
    };
  }

  const credentials = parseServiceAccountCredentials(encodedCredentials);
  if (!credentials) {
    console.error("[google-sheets] Invalid GOOGLE_SERVICE_ACCOUNT_JSON_BASE64");
    return {
      ok: false,
      error:
        "Form delivery is not configured. Please try again later or contact us by phone.",
    };
  }

  const tabName = getSheetTabName(payload.kind);
  const headers = [...getSheetHeaders(payload.kind)];
  const row = buildSheetRow(payload);

  try {
    const auth = new google.auth.JWT({
      email: credentials.client_email,
      key: credentials.private_key,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const sheets = google.sheets({ version: "v4", auth });

    const headerResponse = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: quotedRange(tabName, "1:1"),
    });
    const existingHeader = headerResponse.data.values?.[0];
    const needsHeader =
      !existingHeader ||
      existingHeader.length === 0 ||
      existingHeader.every((cell) => String(cell).trim() === "");

    if (needsHeader) {
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: quotedRange(tabName, "A1"),
        valueInputOption: "RAW",
        requestBody: { values: [headers] },
      });
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: quotedRange(tabName, "A:A"),
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: { values: [row] },
    });

    return { ok: true };
  } catch (error) {
    console.error("[google-sheets] Append failed", error);
    return {
      ok: false,
      error: "We could not send your message. Please try again.",
    };
  }
}
