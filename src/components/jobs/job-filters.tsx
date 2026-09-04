import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  employmentTypes,
  industrySlugs,
  shifts,
  workArrangements,
} from "@/content/jobs/schema";
import { industryLabel, type JobFilters } from "@/content/jobs";

const industryOptions = industrySlugs.map((slug) => ({
  value: slug,
  label: industryLabel(slug),
}));

type JobFiltersFormProps = {
  filters: JobFilters;
};

export function JobFiltersForm({ filters }: JobFiltersFormProps) {
  return (
    <form
      method="get"
      className="border-border bg-surface space-y-5 rounded-xl border p-5"
    >
      <div>
        <h2 className="font-heading text-foreground text-base font-bold">
          Search Current Opportunities
        </h2>
        <p className="text-muted-foreground mt-1 text-sm">
          Filter by keyword, location, industry, employment type, and shift.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="q">Keyword or Job Title</Label>
        <Input
          id="q"
          name="q"
          defaultValue={filters.q ?? ""}
          className="h-11"
          placeholder="e.g. Warehouse Associate"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">City, State, or ZIP</Label>
        <Input
          id="location"
          name="location"
          defaultValue={filters.location ?? ""}
          className="h-11"
          placeholder="City, state, or ZIP"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="industry">Industry</Label>
        <select
          id="industry"
          name="industry"
          defaultValue={filters.industry ?? ""}
          className="border-input focus-visible:border-ring focus-visible:ring-ring/40 h-11 w-full rounded-lg border bg-transparent px-2.5 text-sm outline-none focus-visible:ring-3"
        >
          <option value="">All industries</option>
          {industryOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="employmentType">Employment Type</Label>
        <select
          id="employmentType"
          name="employmentType"
          defaultValue={filters.employmentType ?? ""}
          className="border-input focus-visible:border-ring focus-visible:ring-ring/40 h-11 w-full rounded-lg border bg-transparent px-2.5 text-sm outline-none focus-visible:ring-3"
        >
          <option value="">All types</option>
          {employmentTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="shift">Shift</Label>
        <select
          id="shift"
          name="shift"
          defaultValue={filters.shift ?? ""}
          className="border-input focus-visible:border-ring focus-visible:ring-ring/40 h-11 w-full rounded-lg border bg-transparent px-2.5 text-sm outline-none focus-visible:ring-3"
        >
          <option value="">All shifts</option>
          {shifts.map((shift) => (
            <option key={shift} value={shift}>
              {shift}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="workArrangement">Work Arrangement</Label>
        <select
          id="workArrangement"
          name="workArrangement"
          defaultValue={filters.workArrangement ?? ""}
          className="border-input focus-visible:border-ring focus-visible:ring-ring/40 h-11 w-full rounded-lg border bg-transparent px-2.5 text-sm outline-none focus-visible:ring-3"
        >
          <option value="">All arrangements</option>
          {workArrangements.map((arrangement) => (
            <option key={arrangement} value={arrangement}>
              {arrangement}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2 pt-1">
        <Button type="submit" className="w-full">
          Search Jobs
        </Button>
        <Button asChild variant="ghost" className="w-full">
          <Link href="/jobs">Clear Filters</Link>
        </Button>
      </div>
    </form>
  );
}
