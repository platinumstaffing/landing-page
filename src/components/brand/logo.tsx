import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "lockup" | "mark" | "wordmark-dark";
  className?: string;
  priority?: boolean;
  href?: string | null;
};

export function Logo({
  variant = "lockup",
  className,
  priority = false,
  href = "/",
}: LogoProps) {
  const content =
    variant === "mark" ? (
      <Image
        src="/logos/platinum-mark.png"
        alt="Platinum Staffing & Recruitment"
        width={40}
        height={58}
        className={cn("h-9 w-auto", className)}
        priority={priority}
      />
    ) : variant === "wordmark-dark" ? (
      <span className={cn("inline-flex items-center gap-3", className)}>
        <Image
          src="/logos/platinum-mark.png"
          alt=""
          width={36}
          height={52}
          className="h-9 w-auto brightness-0 invert"
          aria-hidden
        />
        <span className="flex flex-col leading-none">
          <span className="font-heading text-sm font-bold tracking-[0.08em] text-white uppercase">
            Platinum
          </span>
          <span className="mt-1 font-heading text-[0.62rem] font-medium tracking-[0.16em] text-silver uppercase">
            Staffing & Recruitment
          </span>
        </span>
        <span className="sr-only">Platinum Staffing & Recruitment</span>
      </span>
    ) : (
      <Image
        src="/logos/platinum-lockup.png"
        alt="Platinum Staffing & Recruitment"
        width={200}
        height={60}
        className={cn("h-10 w-auto sm:h-11", className)}
        priority={priority}
      />
    );

  if (href === null) return content;

  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-md focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
      aria-label="Platinum Staffing & Recruitment home"
    >
      {content}
    </Link>
  );
}
