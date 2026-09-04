"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { submitConsultation } from "@/app/actions/forms";
import { Field, FormStatus, Honeypot } from "@/components/forms/field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  consultationSchema,
  type ConsultationInput,
} from "@/lib/forms/schemas";

const meetingPreferences = [
  "Phone Call",
  "Virtual Meeting",
  "In-Person Meeting",
] as const;

export function ConsultationForm() {
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
  } = useForm<ConsultationInput>({
    resolver: zodResolver(consultationSchema) as never,
    defaultValues: { website: "" },
  });

  const onSubmit = handleSubmit((values) => {
    setResult({ status: "idle" });
    startTransition(async () => {
      const response = await submitConsultation(values);
      if (response.status === "error") {
        if (response.fieldErrors) {
          for (const [key, messages] of Object.entries(response.fieldErrors)) {
            setError(key as keyof ConsultationInput, {
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
          htmlFor="consult-company"
          required
          error={errors.companyName?.message}
        >
          <Input
            id="consult-company"
            className="h-11"
            {...register("companyName")}
          />
        </Field>
        <Field
          label="Contact Name"
          htmlFor="consult-contact"
          required
          error={errors.contactName?.message}
        >
          <Input
            id="consult-contact"
            className="h-11"
            {...register("contactName")}
          />
        </Field>
        <Field
          label="Email Address"
          htmlFor="consult-email"
          required
          error={errors.email?.message}
        >
          <Input
            id="consult-email"
            type="email"
            className="h-11"
            {...register("email")}
          />
        </Field>
        <Field
          label="Phone Number"
          htmlFor="consult-phone"
          required
          error={errors.phone?.message}
        >
          <Input
            id="consult-phone"
            type="tel"
            className="h-11"
            {...register("phone")}
          />
        </Field>
        <Field
          label="Preferred Consultation Date"
          htmlFor="consult-date"
          error={errors.preferredDate?.message}
        >
          <Input
            id="consult-date"
            type="date"
            className="h-11"
            {...register("preferredDate")}
          />
        </Field>
        <Field
          label="Preferred Consultation Time"
          htmlFor="consult-time"
          error={errors.preferredTime?.message}
        >
          <Input
            id="consult-time"
            type="time"
            className="h-11"
            {...register("preferredTime")}
          />
        </Field>
        <Field
          label="Meeting Preference"
          htmlFor="consult-meeting"
          required
          error={errors.meetingPreference?.message}
          className="sm:col-span-2"
        >
          <select
            id="consult-meeting"
            className="border-input focus-visible:border-ring focus-visible:ring-ring/40 h-11 w-full rounded-lg border bg-transparent px-2.5 text-sm outline-none focus-visible:ring-3"
            {...register("meetingPreference")}
            defaultValue=""
          >
            <option value="" disabled>
              Select a meeting preference
            </option>
            {meetingPreferences.map((preference) => (
              <option key={preference} value={preference}>
                {preference}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field
        label="Brief Description of Workforce Needs"
        htmlFor="consult-needs"
        required
        error={errors.workforceNeeds?.message}
      >
        <Textarea
          id="consult-needs"
          rows={5}
          className="min-h-32"
          {...register("workforceNeeds")}
        />
      </Field>

      <FormStatus status={result.status} message={result.message} />

      <Button type="submit" size="lg" disabled={pending}>
        {pending ? "Sending…" : "Request Consultation"}
      </Button>
    </form>
  );
}
