"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { submitGeneralContact } from "@/app/actions/forms";
import { Field, FormStatus, Honeypot } from "@/components/forms/field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  generalContactSchema,
  type GeneralContactInput,
} from "@/lib/forms/schemas";

const reasons = [
  "General Question",
  "Employer Services",
  "Partnership Opportunity",
  "Website Feedback",
  "Other",
];

export function GeneralContactForm() {
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
  } = useForm<GeneralContactInput>({
    resolver: zodResolver(generalContactSchema) as never,
    defaultValues: { website: "" },
  });

  const onSubmit = handleSubmit((values) => {
    setResult({ status: "idle" });
    startTransition(async () => {
      const response = await submitGeneralContact({
        ...values,
      });
      if (response.status === "error") {
        if (response.fieldErrors) {
          for (const [key, messages] of Object.entries(response.fieldErrors)) {
            setError(key as keyof GeneralContactInput, {
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
        <Field label="First Name" htmlFor="gc-firstName" required error={errors.firstName?.message}>
          <Input id="gc-firstName" className="h-11" {...register("firstName")} />
        </Field>
        <Field label="Last Name" htmlFor="gc-lastName" required error={errors.lastName?.message}>
          <Input id="gc-lastName" className="h-11" {...register("lastName")} />
        </Field>
        <Field label="Email Address" htmlFor="gc-email" required error={errors.email?.message}>
          <Input id="gc-email" type="email" className="h-11" {...register("email")} />
        </Field>
        <Field label="Phone Number" htmlFor="gc-phone">
          <Input id="gc-phone" type="tel" className="h-11" {...register("phone")} />
        </Field>
        <Field label="Company Name (Optional)" htmlFor="gc-company" className="sm:col-span-2">
          <Input id="gc-company" className="h-11" {...register("companyName")} />
        </Field>
        <Field
          label="Reason for Inquiry"
          htmlFor="gc-reason"
          required
          error={errors.reason?.message}
          className="sm:col-span-2"
        >
          <select
            id="gc-reason"
            className="h-11 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40"
            {...register("reason")}
            defaultValue=""
          >
            <option value="" disabled>
              Select a reason
            </option>
            {reasons.map((reason) => (
              <option key={reason} value={reason}>
                {reason}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Message" htmlFor="gc-message" required error={errors.message?.message}>
        <Textarea id="gc-message" rows={5} className="min-h-32" {...register("message")} />
      </Field>

      <FormStatus status={result.status} message={result.message} />

      <Button type="submit" size="lg" disabled={pending}>
        {pending ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
