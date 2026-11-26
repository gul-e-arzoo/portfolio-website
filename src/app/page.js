import BrandHashScroll from "@/components/layout/BrandHashScroll";
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
      <BrandHashScroll />
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
