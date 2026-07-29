"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { submitResumeAction } from "@/app/actions/forms";
import { uploadResumeAction } from "@/app/actions/upload-resume";
import { Field, FormStatus, Honeypot } from "@/components/forms/field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { industries } from "@/content/industries";
import {
  submitResumeSchema,
  type SubmitResumeInput,
} from "@/lib/forms/schemas";

const employmentTypes = [
  "Temporary",
  "Temp-to-Hire",
  "Direct Hire",
  "Seasonal",
];
const shifts = ["First", "Second", "Third", "Flexible"];

export function SubmitResumeForm() {
  const [pending, startTransition] = useTransition();
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<{
    status: "idle" | "success" | "error";
    message?: string;
  }>({ status: "idle" });

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<SubmitResumeInput>({
    resolver: zodResolver(submitResumeSchema) as never,
    defaultValues: {
      website: "",
      consent: false,
      state: "PA",
    },
  });

  const onSubmit = handleSubmit((values) => {
    setResult({ status: "idle" });
    startTransition(async () => {
      let resumeUrl: string | undefined;
      if (file) {
        const data = new FormData();
        data.set("file", file);
        const uploaded = await uploadResumeAction(data);
        if (!uploaded.ok) {
          setResult({ status: "error", message: uploaded.error });
          return;
        }
        resumeUrl = uploaded.url;
      }

      const response = await submitResumeAction({
        ...values,
        resumeUrl,
      });

      if (response.status === "error") {
        if (response.fieldErrors) {
          for (const [key, messages] of Object.entries(response.fieldErrors)) {
            setError(key as keyof SubmitResumeInput, {
              message: messages[0],
            });
          }
        }
        setResult({ status: "error", message: response.message });
        return;
      }
      reset({ website: "", consent: false, state: "PA" });
      setFile(null);
      setResult({ status: "success", message: response.message });
    });
  });

  return (
    <form onSubmit={onSubmit} className="relative space-y-5" noValidate>
      <Honeypot register={register} />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="First Name"
          htmlFor="firstName"
          required
          error={errors.firstName?.message}
        >
          <Input id="firstName" className="h-11" {...register("firstName")} />
        </Field>
        <Field
          label="Last Name"
          htmlFor="lastName"
          required
          error={errors.lastName?.message}
        >
          <Input id="lastName" className="h-11" {...register("lastName")} />
        </Field>
        <Field
          label="Email Address"
          htmlFor="email"
          required
          error={errors.email?.message}
        >
          <Input
            id="email"
            type="email"
            className="h-11"
            {...register("email")}
          />
        </Field>
        <Field
          label="Phone Number"
          htmlFor="phone"
          required
          error={errors.phone?.message}
        >
          <Input
            id="phone"
            type="tel"
            className="h-11"
            {...register("phone")}
          />
        </Field>
        <Field
          label="City"
          htmlFor="city"
          required
          error={errors.city?.message}
        >
          <Input id="city" className="h-11" {...register("city")} />
        </Field>
        <Field
          label="State"
          htmlFor="state"
          required
          error={errors.state?.message}
        >
          <Input id="state" className="h-11" {...register("state")} />
        </Field>
        <Field
          label="Preferred Industry"
          htmlFor="preferredIndustry"
          required
          error={errors.preferredIndustry?.message}
        >
          <select
            id="preferredIndustry"
            className="border-input focus-visible:border-ring focus-visible:ring-ring/40 h-11 w-full rounded-lg border bg-transparent px-2.5 text-sm outline-none focus-visible:ring-3"
            {...register("preferredIndustry")}
            defaultValue=""
          >
            <option value="" disabled>
              Select an industry
            </option>
            {industries.map((industry) => (
              <option key={industry.slug} value={industry.name}>
                {industry.name}
              </option>
            ))}
          </select>
        </Field>
        <Field
          label="Desired Position"
          htmlFor="desiredPosition"
          required
          error={errors.desiredPosition?.message}
        >
          <Input
            id="desiredPosition"
            className="h-11"
            {...register("desiredPosition")}
          />
        </Field>
        <Field
          label="Employment Type"
          htmlFor="employmentType"
          required
          error={errors.employmentType?.message}
        >
          <select
            id="employmentType"
            className="border-input focus-visible:border-ring focus-visible:ring-ring/40 h-11 w-full rounded-lg border bg-transparent px-2.5 text-sm outline-none focus-visible:ring-3"
            {...register("employmentType")}
            defaultValue=""
          >
            <option value="" disabled>
              Select type
            </option>
            {employmentTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Preferred Shift" htmlFor="preferredShift">
          <select
            id="preferredShift"
            className="border-input focus-visible:border-ring focus-visible:ring-ring/40 h-11 w-full rounded-lg border bg-transparent px-2.5 text-sm outline-none focus-visible:ring-3"
            {...register("preferredShift")}
            defaultValue=""
          >
            <option value="">No preference</option>
            {shifts.map((shift) => (
              <option key={shift} value={shift}>
                {shift}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Years of Experience" htmlFor="yearsExperience">
          <Input
            id="yearsExperience"
            className="h-11"
            {...register("yearsExperience")}
          />
        </Field>
        <Field label="Highest Level of Education" htmlFor="education">
          <Input id="education" className="h-11" {...register("education")} />
        </Field>
      </div>

      <Field label="Certifications or Licenses" htmlFor="certifications">
        <Input
          id="certifications"
          className="h-11"
          {...register("certifications")}
        />
      </Field>

      <Field
        label="Upload Résumé"
        htmlFor="resume"
        hint="PDF or Word, up to 5 MB. Optional if Blob storage is not yet configured."
      >
        <Input
          id="resume"
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          className="h-11 cursor-pointer py-2"
          onChange={(event) => setFile(event.target.files?.[0] ?? null)}
        />
      </Field>

      <Field label="Additional Comments" htmlFor="additionalComments">
        <Textarea
          id="additionalComments"
          rows={3}
          {...register("additionalComments")}
        />
      </Field>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          className="border-input accent-primary mt-1 size-4 rounded border"
          {...register("consent")}
          aria-invalid={!!errors.consent}
        />
        <label htmlFor="consent" className="text-sm leading-snug">
          I confirm this information is accurate and grant Platinum Staffing
          permission to contact me about this and other relevant opportunities.
        </label>
      </div>
      {errors.consent ? (
        <p className="text-destructive text-xs" role="alert">
          {errors.consent.message}
        </p>
      ) : null}

      <FormStatus status={result.status} message={result.message} />

      <Button
        type="submit"
        size="lg"
        disabled={pending}
        className="w-full sm:w-auto"
      >
        {pending ? "Submitting…" : "Join Our Talent Network"}
      </Button>
    </form>
  );
}
