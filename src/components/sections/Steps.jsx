"use client";

import React from "react";
import Image from "next/image";
import { CiCircleCheck } from "react-icons/ci";
import AnimatedContainer from "@/components/ui/AnimatedContainer";

const services = [
  {
    id: 1,
    title: "LinkedIn Branding",
    description: "For people whose profile reads like an old CV.",
    icon: "/what_i_do_section/what_i_do_1.png",
    points: [
      "A headline that says what you do in one line",
      "A banner made for your niche, not a stock photo",
      "An About section that sounds like you, not a résumé",
      "Featured section set up to show proof first",
      "Colours and photo that match your real brand",
      "A profile a stranger understands in 10 seconds",
    ],
  },
  {
    id: 2,
    title: "Content Design",
    description: "For people whose good ideas get scrolled past.",
    icon: "/what_i_do_section/what_i_do_2.png",
    points: [
      "Carousels people finish instead of skip",
      "One clear look across every post, so you get known",
      "Your raw notes turned into clean slides",
      "Text sized to read on a phone",
      "Editable Figma files that stay yours",
      "Templates your team can refill each week",
    ],
  },
  {
    id: 3,
    title: "Website and Landing Pages",
    description: "For people sending warm leads to a weak page.",
    icon: "/what_i_do_section/what_i_do_3.png",
    points: [
      "One page built to turn visitors into booked calls",
      "Clear offer, clear proof, clear next step",
      "Loads fast and works on a phone",
      "Results placed where people actually look",
      "Booking form wired to your calendar",
      "Built in Figma, then handed to you or your dev",
    ],
  },
  {
    id: 4,
    title: "LinkedIn Management",
    description:
      "For those who know they should post, but never find the time.",
    icon: "/what_i_do_section/what_i_do_4.png",
    points: [
      "Posts written and designed for you every week",
      "A plan built from what your buyers already ask",
      "Comments and DMs answered in your voice",
      "Profile kept current as your offer grows",
      "A short monthly report on what worked",
      "You stay visible without doing the work",
    ],
  },
];

const Steps = () => {
  return (
    <section
      id="services"
      className="relative w-full overflow-hidden bg-[#1B0002] py-20 md:py-24 lg:py-28"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1040px] px-4 sm:px-6">
        {/* Header */}
        <AnimatedContainer animationType="fade-up">
          <div className="mx-auto text-center">
            {/* WHAT I DO */}
            <div className="mb-5 flex justify-center">
              <span className="inline-flex h-[34px] min-w-[106px] items-center justify-center rounded-full border border-[#FF7782] px-5 text-[10px] font-medium uppercase text-white">
                What I Do
              </span>
            </div>

            {/* Heading */}
            <h2 className="mx-auto text-[32px] font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-[38px] md:text-[43px] lg:text-[46px]">
              Four ways to make your
              <br />
              <span className="text-[#FF7782]">LinkedIn brand</span>{" "}
              impossible to miss
            </h2>

            {/* Subtitle */}
            <p className="mx-auto mt-5 max-w-[700px] text-[12px] leading-[1.6] text-white/80 md:text-[13px]">
              Take one. Or run all four as one system. Either way, you end up
              easy to find, easy to trust, and easy to hire.
            </p>
          </div>
        </AnimatedContainer>

        {/* Service Cards */}
        <div className="mt-10 grid grid-cols-1 gap-[14px] md:grid-cols-2">
          {services.map((service, index) => (
            <AnimatedContainer
              key={service.id}
              animationType="fade-up"
              delay={index * 0.08}
              className="h-full"
            >
              <div className="relative h-full min-h-[286px] overflow-hidden rounded-[7px] border border-[#FF7782] bg-[#431216] px-[18px] py-[19px] sm:px-[20px] sm:py-[20px]">
                {/* Very subtle Figma-style glow */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,119,130,0.06),transparent_55%)]" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-[12px] flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#FF7782]">
                    <Image
                      src={service.icon}
                      alt=""
                      width={28}
                      height={28}
                      className="h-[28px] w-[28px] object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-[19px] font-bold leading-[1.2] tracking-[-0.02em] text-white sm:text-[20px]">
                    {service.title}
                  </h3>

                  {/* Pink description */}
                  <p className="mt-[5px] text-[12px] leading-[1.4] text-[#FF7782] sm:text-[12.5px]">
                    {service.description}
                  </p>

                  {/* Points */}
                  <ul className="mt-[12px] space-y-[8px]">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-[7px] text-[12px] leading-[1.35] text-white/90 sm:text-[12.5px]"
                      >
                        <CiCircleCheck className="mt-[1px] h-[15px] w-[15px] shrink-0 text-[#FF7782]" />

                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;