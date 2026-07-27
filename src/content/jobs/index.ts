import { parseJobs, type Job } from "@/content/jobs/schema";

export type { Job } from "@/content/jobs/schema";

/**
 * Local job listings. Seeded with illustrative Pennsylvania roles matching the
 * content doc's example shape. Replace/extend with real openings from the client.
 * When empty (or all closed), the jobs page shows the designed empty state.
 */
const rawJobs = [
  {
    slug: "warehouse-associate-allentown",
    referenceNumber: "PSR-WH-1001",
    title: "Warehouse Associate",
    industry: "warehouse-distribution",
    location: { city: "Allentown", state: "Pennsylvania" },
    employmentType: "Temp-to-Hire",
    shift: "First Shift",
    workArrangement: "On-Site",
    payRange: undefined,
    schedule: "First and second shifts available",
    datePosted: "2026-07-15",
    summary:
      "Support receiving, picking, packing, and shipping operations in a fast-paced distribution environment. Reliable attendance and a safety-first mindset are essential.",
    responsibilities: [
      "Pick, pack, and stage orders accurately",
      "Assist with shipping and receiving",
      "Maintain a clean, organized work area",
      "Follow safety procedures at all times",
    ],
    qualifications: [
      "Prior warehouse experience preferred",
      "Ability to lift up to 50 lbs",
      "Reliable transportation",
      "Willingness to work overtime when needed",
    ],
    status: "open",
  },
  {
    slug: "production-associate-lancaster",
    referenceNumber: "PSR-MFG-1002",
    title: "Production Associate",
    industry: "manufacturing",
    location: { city: "Lancaster", state: "Pennsylvania" },
    employmentType: "Temporary",
    shift: "Second Shift",
    workArrangement: "On-Site",
    schedule: "Monday–Friday, second shift",
    datePosted: "2026-07-18",
    summary:
      "Join a manufacturing team supporting assembly and production goals. Ideal for dependable professionals who take pride in quality and teamwork.",
    responsibilities: [
      "Perform assembly and production tasks to specification",
      "Inspect work for quality standards",
      "Collaborate with supervisors and team members",
      "Follow all safety and quality protocols",
    ],
    qualifications: [
      "Manufacturing or assembly experience a plus",
      "Comfortable standing for extended periods",
      "Attention to detail",
      "Ability to follow written and verbal instructions",
    ],
    status: "open",
  },
  {
    slug: "administrative-assistant-harrisburg",
    referenceNumber: "PSR-ADM-1003",
    title: "Administrative Assistant",
    industry: "administrative-support",
    location: { city: "Harrisburg", state: "Pennsylvania" },
    employmentType: "Direct Hire",
    shift: "First Shift",
    workArrangement: "On-Site",
    schedule: "Full-time, weekday business hours",
    datePosted: "2026-07-20",
    summary:
      "Provide day-to-day administrative support that keeps office operations organized and responsive. Strong communication and organizational skills required.",
    responsibilities: [
      "Manage phones, email, and visitor reception",
      "Maintain filing systems and office supplies",
      "Support scheduling and document preparation",
      "Coordinate with internal teams and vendors",
    ],
    qualifications: [
      "Prior administrative experience preferred",
      "Proficiency with Microsoft Office or Google Workspace",
      "Strong written and verbal communication",
      "Professional, dependable presence",
    ],
    status: "open",
  },
  {
    slug: "customer-service-representative-reading",
    referenceNumber: "PSR-CS-1004",
    title: "Customer Service Representative",
    industry: "customer-service",
    location: { city: "Reading", state: "Pennsylvania" },
    employmentType: "Full-Time",
    shift: "Flexible Schedule",
    workArrangement: "On-Site",
    datePosted: "2026-07-22",
    summary:
      "Represent client brands with professionalism while resolving customer questions and concerns across phone and digital channels.",
    responsibilities: [
      "Respond to customer inquiries promptly and courteously",
      "Document interactions accurately",
      "Escalate complex issues appropriately",
      "Meet quality and service standards",
    ],
    qualifications: [
      "Customer service experience preferred",
      "Clear communication skills",
      "Comfortable with multi-channel support tools",
      "Problem-solving mindset",
    ],
    status: "open",
  },
] as const;

export const jobs: Job[] = parseJobs([...rawJobs]);

export function getOpenJobs(): Job[] {
  return jobs.filter((job) => job.status === "open");
}

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((job) => job.slug === slug);
}

export type JobFilters = {
  q?: string;
  location?: string;
  industry?: string;
  employmentType?: string;
  shift?: string;
  workArrangement?: string;
};

export function filterJobs(filters: JobFilters): Job[] {
  const q = filters.q?.trim().toLowerCase();
  const location = filters.location?.trim().toLowerCase();

  return getOpenJobs().filter((job) => {
    if (q) {
      const haystack = `${job.title} ${job.summary} ${job.referenceNumber}`.toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    if (location) {
      const loc =
        `${job.location.city} ${job.location.state} ${job.location.zip ?? ""}`.toLowerCase();
      if (!loc.includes(location)) return false;
    }
    if (filters.industry && job.industry !== filters.industry) return false;
    if (
      filters.employmentType &&
      job.employmentType !== filters.employmentType
    )
      return false;
    if (filters.shift && job.shift !== filters.shift) return false;
    if (
      filters.workArrangement &&
      job.workArrangement !== filters.workArrangement
    )
      return false;
    return true;
  });
}

export function industryLabel(slug: Job["industry"]): string {
  const labels: Record<Job["industry"], string> = {
    manufacturing: "Manufacturing",
    "warehouse-distribution": "Warehouse & Distribution",
    logistics: "Logistics",
    "administrative-support": "Administrative Support",
    "customer-service": "Customer Service",
    "light-industrial": "Light Industrial",
  };
  return labels[slug];
}
