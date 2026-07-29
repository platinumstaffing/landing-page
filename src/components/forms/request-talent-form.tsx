"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { submitRequestTalent } from "@/app/actions/forms";
import { Field, FormStatus, Honeypot } from "@/components/forms/field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { industries } from "@/content/industries";
import {
  requestTalentSchema,
  type RequestTalentInput,
} from "@/lib/forms/schemas";

const employmentTypes = [
  "Temporary",
  "Temp-to-Hire",
  "Direct Hire",
  "Seasonal",
  "High-Volume",
  "Workforce Planning",
  "Not sure yet",
];

export function RequestTalentForm() {
  const [pending, startTransition] = useTransition();
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
  } = useForm<RequestTalentInput>({
    resolver: zodResolver(requestTalentSchema) as never,
    defaultValues: {
      website: "",
    },
  });

  const onSubmit = handleSubmit((values) => {
    setResult({ status: "idle" });
    startTransition(async () => {
      const response = await submitRequestTalent({
        ...values,
      });
      if (response.status === "error") {
        if (response.fieldErrors) {
          for (const [key, messages] of Object.entries(response.fieldErrors)) {
            setError(key as keyof RequestTalentInput, {
              message: messages[0],
            });
          }
        }
        setResult({ status: "error", message: response.message });
        return;
      }
      reset({ website: "" });
      setResult({ status: "success", message: response.message });
    });
  });

  return (
    <form onSubmit={onSubmit} className="relative space-y-5" noValidate>
      <Honeypot register={register} />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Company Name"
          htmlFor="companyName"
          required
          error={errors.companyName?.message}
        >
          <Input
            id="companyName"
            className="h-11"
            {...register("companyName")}
            aria-invalid={!!errors.companyName}
          />
        </Field>
        <Field
          label="Contact Name"
          htmlFor="contactName"
          required
          error={errors.contactName?.message}
        >
          <Input
            id="contactName"
            className="h-11"
            {...register("contactName")}
            aria-invalid={!!errors.contactName}
          />
        </Field>
        <Field
          label="Job Title"
          htmlFor="jobTitle"
          error={errors.jobTitle?.message}
        >
          <Input id="jobTitle" className="h-11" {...register("jobTitle")} />
        </Field>
        <Field
          label="Business Email"
          htmlFor="businessEmail"
          required
          error={errors.businessEmail?.message}
        >
          <Input
            id="businessEmail"
            type="email"
            className="h-11"
            autoComplete="email"
            {...register("businessEmail")}
            aria-invalid={!!errors.businessEmail}
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
            aria-invalid={!!errors.phone}
          />
        </Field>
        <Field label="Company Address" htmlFor="companyAddress">
          <Input
            id="companyAddress"
            className="h-11"
            {...register("companyAddress")}
          />
        </Field>
        <Field
          label="Industry"
          htmlFor="industry"
          required
          error={errors.industry?.message}
        >
          <select
            id="industry"
            className="border-input focus-visible:border-ring focus-visible:ring-ring/40 h-11 w-full rounded-lg border bg-transparent px-2.5 text-sm outline-none focus-visible:ring-3"
            {...register("industry")}
            aria-invalid={!!errors.industry}
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
            <option value="Other">Other</option>
          </select>
        </Field>
        <Field
          label="Number of Employees Needed"
          htmlFor="employeesNeeded"
          required
          error={errors.employeesNeeded?.message}
        >
          <Input
            id="employeesNeeded"
            className="h-11"
            {...register("employeesNeeded")}
          />
        </Field>
        <Field
          label="Position(s) Hiring For"
          htmlFor="positions"
          required
          error={errors.positions?.message}
        >
          <Input id="positions" className="h-11" {...register("positions")} />
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
        <Field label="Preferred Start Date" htmlFor="preferredStartDate">
          <Input
            id="preferredStartDate"
            type="date"
            className="h-11"
            {...register("preferredStartDate")}
          />
        </Field>
        <Field label="How Did You Hear About Us?" htmlFor="howHeard">
          <Input id="howHeard" className="h-11" {...register("howHeard")} />
        </Field>
      </div>

      <Field
        label="Brief Description of Your Staffing Needs"
        htmlFor="staffingNeeds"
        required
        error={errors.staffingNeeds?.message}
      >
        <Textarea
          id="staffingNeeds"
          rows={4}
          className="min-h-28"
          {...register("staffingNeeds")}
          aria-invalid={!!errors.staffingNeeds}
        />
      </Field>

      <Field label="Additional Comments" htmlFor="additionalComments">
        <Textarea
          id="additionalComments"
          rows={3}
          {...register("additionalComments")}
        />
      </Field>

      <FormStatus status={result.status} message={result.message} />

      <Button
        type="submit"
        size="lg"
        disabled={pending}
        className="w-full sm:w-auto"
      >
        {pending ? "Submitting…" : "Submit Employer Inquiry"}
      </Button>
    </form>
  );
}
