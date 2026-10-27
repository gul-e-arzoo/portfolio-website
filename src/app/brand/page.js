import BrandHashScroll from "@/components/layout/BrandHashScroll";
import {
  Hero,
  CollegeGrid,
  Review,
  Steps,
  Designs,
  Products,
  Mastermind,
} from "@/components/sections";

export default function BrandPage() {
  return (
    <>
      <BrandHashScroll />
      <Hero />
      <CollegeGrid />
      <Review />
      <Steps />
      <Designs />
      <Products />
      <Mastermind />
    </>
  );
}
