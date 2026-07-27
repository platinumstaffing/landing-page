import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main
      id="main"
      className="mx-auto flex min-h-[70vh] max-w-2xl flex-col justify-center px-5 py-20"
    >
      <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
        404
      </p>
      <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-foreground">
        Page not found
      </h1>
      <p className="mt-4 text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has moved. Try
        returning home, searching jobs, or contacting our team.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/jobs">Search Jobs</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/contact">Contact</Link>
        </Button>
      </div>
    </main>
  );
}
