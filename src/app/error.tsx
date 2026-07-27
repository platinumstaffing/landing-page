"use client";

import Link from "next/link";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main
      id="main"
      className="mx-auto flex min-h-[70vh] max-w-2xl flex-col justify-center px-5 py-20"
    >
      <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
        Something went wrong
      </p>
      <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-foreground">
        We hit an unexpected error
      </h1>
      <p className="mt-4 text-muted-foreground">
        Please try again. If the problem continues, contact Platinum Staffing
        and we&apos;ll help you from there.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button type="button" onClick={reset}>
          Try again
        </Button>
        <Button asChild variant="outline">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </main>
  );
}
