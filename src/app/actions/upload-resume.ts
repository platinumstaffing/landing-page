"use server";

import { put } from "@vercel/blob";

const ALLOWED_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const MAX_BYTES = 5 * 1024 * 1024;

export async function uploadResumeAction(
  formData: FormData,
): Promise<{ ok: true; url: string } | { ok: false; error: string }> {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) {
    return {
      ok: false,
      error:
        "Resume upload is not configured yet. You can still submit without a file, or email your résumé after submitting.",
    };
  }

  const file = formData.get("file");
  if (!(file instanceof File) || file.size === 0) {
    return { ok: false, error: "Please choose a résumé file to upload." };
  }

  if (!ALLOWED_TYPES.has(file.type)) {
    return {
      ok: false,
      error: "Please upload a PDF or Word document (.pdf, .doc, .docx).",
    };
  }

  if (file.size > MAX_BYTES) {
    return { ok: false, error: "Resume must be 5 MB or smaller." };
  }

  try {
    const blob = await put(`resumes/${Date.now()}-${file.name}`, file, {
      access: "private",
      token,
      addRandomSuffix: true,
    });
    return { ok: true, url: blob.url };
  } catch (error) {
    console.error("[blob] upload failed", error);
    return {
      ok: false,
      error: "We could not upload your résumé. Please try again.",
    };
  }
}
