import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function Field({
  label,
  htmlFor,
  error,
  required,
  children,
  className,
  hint,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
  hint?: string;
}) {
  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={htmlFor}>
        {label}
        {required ? (
          <span className="text-destructive" aria-hidden>
            {" "}
            *
          </span>
        ) : null}
      </Label>
      {children}
      {hint && !error ? (
        <p className="text-xs text-muted-foreground">{hint}</p>
      ) : null}
      {error ? (
        <p id={`${htmlFor}-error`} className="text-xs text-destructive" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function FormStatus({
  status,
  message,
}: {
  status: "idle" | "success" | "error";
  message?: string;
}) {
  if (status === "idle" || !message) return null;
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "rounded-lg border px-4 py-3 text-sm",
        status === "success" &&
          "border-success/40 bg-success/10 text-foreground",
        status === "error" &&
          "border-destructive/40 bg-destructive/10 text-destructive",
      )}
    >
      {message}
    </div>
  );
}

/** Honeypot — visually hidden, should stay empty. */
export function Honeypot({
  register,
}: {
  register: (name: "website") => Record<string, unknown>;
}) {
  return (
    <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
      <label htmlFor="website">Website</label>
      <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
    </div>
  );
}
