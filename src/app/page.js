import {
  LandingHero,
  LeadLeaksSection,
  PlugLeaksSection,
  ProcessSection,
  VisibilitySection,
  ResultsSection,
  PricingSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/landing";

export default function Home() {
  return (
    <>
      <LandingHero />
      <LeadLeaksSection />
      <PlugLeaksSection />
      <ProcessSection />
      <VisibilitySection />
      <ResultsSection />
      <PricingSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
