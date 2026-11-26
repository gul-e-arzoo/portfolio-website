import BrandHashScroll from "@/components/layout/BrandHashScroll";
import {
  Hero,
  PortfolioGallery,
  Review,
  Steps,
  Designs,
  Mastermind,
} from "@/components/sections";

export const metadata = {
  title: "Portfolio: LinkedIn Banners, Profiles and Content",
  description:
    "LinkedIn banners, full profile redesigns, carousels and case studies by Gul e Arzoo for fractional executives, founders and leaders.",
  alternates: { canonical: "/brand/" },
  openGraph: {
    url: "/brand/",
    title: "Portfolio: LinkedIn Banners, Profiles and Content | Gul e Arzoo",
  },
};

export default function BrandPage() {
  return (
    <>
      <BrandHashScroll />
      <Hero />
      <PortfolioGallery />
      <Review />
      <Steps />
      <Designs />
      <Mastermind />
    </>
  );
}
