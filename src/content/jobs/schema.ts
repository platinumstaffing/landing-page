import { z } from "zod";

export const employmentTypes = [
  "Temporary",
  "Temp-to-Hire",
  "Direct Hire",
  "Seasonal",
  "Full-Time",
  "Part-Time",
] as const;

export const shifts = [
  "First Shift",
  "Second Shift",
  "Third Shift",
  "Weekend Shift",
  "Flexible Schedule",
] as const;

export const workArrangements = ["On-Site", "Hybrid", "Remote"] as const;

export const industrySlugs = [
  "manufacturing",
  "warehouse-distribution",
  "logistics",
  "administrative-support",
  "customer-service",
  "light-industrial",
] as const;

export const jobSchema = z.object({
  slug: z.string().min(1),
  referenceNumber: z.string().min(1),
  title: z.string().min(1),
  industry: z.enum(industrySlugs),
  location: z.object({
    city: z.string().min(1),
    state: z.string().min(1),
    zip: z.string().optional(),
  }),
  employmentType: z.enum(employmentTypes),
  shift: z.enum(shifts),
  workArrangement: z.enum(workArrangements).default("On-Site"),
  payRange: z.string().optional(),
  schedule: z.string().optional(),
  datePosted: z.string(), // ISO date
  summary: z.string().min(1),
  responsibilities: z.array(z.string()).default([]),
  qualifications: z.array(z.string()).default([]),
  status: z.enum(["open", "closed"]).default("open"),
});

export type Job = z.infer<typeof jobSchema>;

export function parseJobs(data: unknown[]): Job[] {
  return data.map((item, index) => {
    const result = jobSchema.safeParse(item);
    if (!result.success) {
      throw new Error(
        `Invalid job at index ${index}: ${result.error.message}`,
      );
    }
    return result.data;
  });
}
