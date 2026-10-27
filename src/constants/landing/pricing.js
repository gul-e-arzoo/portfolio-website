export const pricingIntro = {
  badge: "Pricing",
  titleBefore: "Pick the level of",
  titleHighlight: "help you need",
  subtitle:
    "Start with templates and a plan. Move up when you want me in the room with you.",
};

export const pricingTiers = [
  {
    id: "foundation",
    name: "Foundation",
    description:
      "Templates, checklists, and a clear plan so you can fix the leaks yourself — without guessing what to do next.",
    price: "$49",
    period: "/month",
    featured: false,
    cta: "Start with Foundation",
    features: [
      "Profile audit checklist",
      "Headline & about swipe file",
      "Content pillar worksheet",
      "2 carousel templates (Figma)",
      "Monthly office-hours Q&A",
    ],
  },
  {
    id: "growth-plan",
    name: "Growth Plan",
    description:
      "The full blueprint plus feedback on your profile and first posts — so you launch with momentum, not a blank page.",
    price: "$149",
    period: "",
    featured: true,
    popularLabel: "Popular",
    cta: "Get Started",
    features: [
      "Everything in Foundation",
      "1:1 profile review call (60 min)",
      "Custom banner direction for your niche",
      "15-day content calendar",
      "DM scripts for warm leads",
      "Private Notion hub with SOPs",
    ],
  },
  {
    id: "growth-blueprint",
    name: "Growth Blueprint",
    description:
      "For Coaches, Founders and Functional Execs who want the system built and run with them — or fully done for you.",
    price: "Custom",
    period: "",
    featured: false,
    cta: "Book a Call",
    features: [
      "Custom LinkedIn banner designed for your niche",
      "Full profile copy & featured section",
      "60-day content (written & designed)",
      "Comment & DM support in your voice",
      "Landing page wireframe in Figma",
      "90-day visibility roadmap",
    ],
  },
];
