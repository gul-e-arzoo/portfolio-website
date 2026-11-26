import BrandHashScroll from "@/components/layout/BrandHashScroll";
import {
  Hero,
  PortfolioGallery,
  Review,
  Steps,
  Designs,
  Mastermind,
} from "@/components/sections";

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
