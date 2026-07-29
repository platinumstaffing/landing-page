import { z } from "zod";

const spamFields = {
  /** Honeypot — must stay empty. */
  website: z.string().optional(),
};

export const requestTalentSchema = z.object({
  companyName: z.string().min(2, "Company name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  jobTitle: z.string().optional(),
  businessEmail: z.email("Enter a valid work email"),
  phone: z.string().min(7, "Enter a valid phone number"),
  companyAddress: z.string().optional(),
  industry: z.string().min(1, "Select an industry"),
  employeesNeeded: z.string().min(1, "Tell us how many people you need"),
  positions: z.string().min(2, "Describe the position(s)"),
  employmentType: z.string().min(1, "Select an employment type"),
  preferredStartDate: z.string().optional(),
  staffingNeeds: z.string().min(10, "Please describe your staffing needs"),
  howHeard: z.string().optional(),
  additionalComments: z.string().optional(),
  ...spamFields,
});

export const submitResumeSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone number"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(2, "State is required"),
  preferredIndustry: z.string().min(1, "Select a preferred industry"),
  desiredPosition: z.string().min(1, "Desired position is required"),
  employmentType: z.string().min(1, "Select an employment type"),
  preferredShift: z.string().optional(),
  yearsExperience: z.string().optional(),
  education: z.string().optional(),
  certifications: z.string().optional(),
  resumeUrl: z.string().optional(),
  additionalComments: z.string().optional(),
  consent: z
    .boolean()
    .refine((value) => value, "Please confirm we may contact you"),
  ...spamFields,
});

export const generalContactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.email("Enter a valid email"),
  phone: z.string().optional(),
  companyName: z.string().optional(),
  reason: z.string().min(1, "Select a reason for contact"),
  message: z.string().min(10, "Please include a short message"),
  ...spamFields,
});

export const consultationSchema = z.object({
  companyName: z.string().min(2, "Company name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  email: z.email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone number"),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  meetingPreference: z.string().min(1, "Select a meeting preference"),
  workforceNeeds: z.string().min(10, "Please describe your workforce needs"),
  ...spamFields,
});

export type RequestTalentInput = z.infer<typeof requestTalentSchema>;
export type SubmitResumeInput = z.infer<typeof submitResumeSchema>;
export type GeneralContactInput = z.infer<typeof generalContactSchema>;
export type ConsultationInput = z.infer<typeof consultationSchema>;

export type ActionResult =
  | { status: "success"; message: string }
  | {
      status: "error";
      message: string;
      fieldErrors?: Record<string, string[]>;
    };
