export type PartnershipJourneyImage = {
  step: number;
  src: string;
  width: number;
  height: number;
  alt: string;
};

export const partnershipJourneyImages = [
  {
    step: 1,
    src: "/brand/home/partnership-01-discovery.webp",
    width: 2400,
    height: 1792,
    alt: "An employer and staffing partner gathering operational needs around a shared plan.",
  },
  {
    step: 2,
    src: "/brand/home/partnership-02-strategy.webp",
    width: 2400,
    height: 1792,
    alt: "A selected workforce route organizing roles and shifts into a staffing plan.",
  },
  {
    step: 3,
    src: "/brand/home/partnership-03-recruitment-screening.webp",
    width: 2400,
    height: 1792,
    alt: "Candidate records moving through review, conversation, and qualification checks.",
  },
  {
    step: 4,
    src: "/brand/home/partnership-04-placement.webp",
    width: 2400,
    height: 1792,
    alt: "A qualified candidate moving through a supported handoff into a workplace team.",
  },
  {
    step: 5,
    src: "/brand/home/partnership-05-ongoing.webp",
    width: 2400,
    height: 1792,
    alt: "An established team connected to check-ins, planning, and future hiring support.",
  },
] as const satisfies readonly PartnershipJourneyImage[];
