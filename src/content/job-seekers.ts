import type { ImageAsset } from "@/content/image-asset";
import { pageImages } from "@/content/page-images";

export type JobSeekerPage = {
  slug: "submit-resume" | "application-process" | "career-resources" | "faq";
  href: string;
  label: string;
  index: string;
  headline: string;
  summary: string;
  description: string;
  image?: ImageAsset;
};

export const jobSeekerPages: JobSeekerPage[] = [
  {
    slug: "submit-resume",
    href: "/job-seekers/submit-resume",
    label: "Submit Your Résumé",
    index: "04.1",
    headline: "Join Our Talent Network",
    summary:
      "Share your experience so recruiters can consider you for current and future roles.",
    description:
      "Don't see the right opportunity today? Submit your résumé and a recruiter will reach out when a role aligns with your experience and career goals.",
    image: pageImages.resumeSupport,
  },
  {
    slug: "application-process",
    href: "/job-seekers/application-process",
    label: "Application Process",
    index: "04.2",
    headline: "What to Expect",
    summary:
      "Five clear steps from search or résumé submission through placement support.",
    description:
      "Knowing what happens next makes the process easier. Here is how we review, screen, match, and support candidates.",
    image: pageImages.applicationProcess,
  },
  {
    slug: "career-resources",
    href: "/job-seekers/career-resources",
    label: "Career Resources",
    index: "04.3",
    headline: "Resources to Help You Succeed",
    summary:
      "Practical guidance for résumés, interviews, workplace success, and career planning.",
    description:
      "The Career Center is built to help you do more than land a single assignment — it is a place to prepare, apply, and grow.",
    image: pageImages.careerCenter,
  },
  {
    slug: "faq",
    href: "/job-seekers/faq",
    label: "Frequently Asked Questions",
    index: "04.4",
    headline: "Common questions from job seekers",
    summary:
      "How to apply, what to bring, timelines, experience, and applying to more than one role.",
    description:
      "Straightforward answers to the questions candidates ask most often. If yours is not listed, contact our team.",
    image: pageImages.recruiterSupport,
  },
];

export const careerResourceTopics = [
  {
    name: "Résumé Writing Tips",
    description:
      "How to present experience clearly so recruiters and hiring managers can see the match.",
  },
  {
    name: "Interview Preparation",
    description:
      "What to expect, what to bring, and how to talk about your work with confidence.",
  },
  {
    name: "Professional Development",
    description:
      "Skills, certifications, and habits that help you grow inside a role — and into the next one.",
  },
  {
    name: "Workplace Success",
    description:
      "Attendance, safety, communication, and the day-to-day practices that keep assignments going well.",
  },
  {
    name: "Career Planning",
    description:
      "How temporary, temp-to-hire, and direct-hire paths can support longer-term goals.",
  },
  {
    name: "Job Search Strategies",
    description:
      "Searching openings, joining the talent network, and staying ready when the right role appears.",
  },
  {
    name: "Employment Trends",
    description:
      "A practical view of how hiring demand moves across the industries we serve.",
  },
] as const;

export const jobSeekerBenefits = [
  "Access to diverse job opportunities",
  "Professional career guidance",
  "Personalized career support",
  "Temporary and permanent opportunities",
  "Career growth opportunities",
  "A trusted workforce partner",
] as const;

export function getJobSeekerPage(slug: string): JobSeekerPage | undefined {
  return jobSeekerPages.find((page) => page.slug === slug);
}
