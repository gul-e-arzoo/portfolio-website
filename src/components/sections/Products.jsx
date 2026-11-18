"use client";

import React from "react";
import Image from "next/image";
import { GoArrowUpRight, GoCheckCircle } from "react-icons/go";
import { products, scheduleCallHref } from "@/constants";
import AnimatedContainer from "@/components/ui/AnimatedContainer";

const updatedContent = [
  {
    title: "CheatSheet Powerhouse",
    price: "$9",
    desc: "Stop rebuilding cheatsheets from scratch. Open Figma, copy a frame, make it yours.",
    features: [
      "21 ready-to-use templates, growing to 100+",
      "9 layout styles: leadership, AI frameworks, strategy grids, KPI dashboards, brand identity, and more",
      "Swap your colours and fonts once, every template updates",
      "Built for LinkedIn, so text stays sharp on mobile and desktop",
      "Fully editable in Figma, no design skills needed",
      "Buy once, every new template is yours free, forever",
    ],
    btnText: "Get the Templates",
  },
  {
    title: "Carousel Goldmine",
    price: "$19",
    desc: "30 carousel templates built to stop the scroll and keep people reading to the last slide.",
    features: [
      "30 ready-to-use carousel templates",
      "Hooks, story slides, list slides, and CTA slides covered",
      "Swap your colours and fonts once, every template updates",
      "Fully editable in Figma, no design skills needed",
      "Built for LinkedIn sizes, so nothing gets cropped on mobile or desktop",
      "Buy once, every new template is yours free, forever",
    ],
    btnText: "Get the Templates",
  },
];

const Products = () => {
  return (
    <section
      id="pricing"
      className="relative w-full overflow-x-clip bg-[#1B0002] py-14 min-[375px]:py-20 md:py-24 lg:py-28"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1120px] px-3 min-[375px]:px-4 sm:px-6 lg:px-8">
        {/* ================================
            HEADER
        ================================= */}
        <AnimatedContainer animationType="fade-up">
          <div className="mx-auto max-w-[720px] text-center">
            <div className="mb-4 flex justify-center">
              <span className="inline-flex h-[34px] items-center justify-center rounded-full border border-[#FF7782] px-5 text-[10px] font-medium uppercase tracking-[0.02em] text-white">
                Plug and Play
              </span>
            </div>

            <h2 className="text-[26px] font-bold leading-[1.08] tracking-[-0.045em] text-white min-[375px]:text-[30px] min-[425px]:text-[34px] sm:text-[40px] md:text-[46px] lg:text-[48px]">
              Design like you have a
              <br />
              <span className="text-[#FF7782]">designer</span>
            </h2>

            <p className="mx-auto mt-5 max-w-[560px] text-[12px] leading-[1.45] text-white/85 sm:text-[13px]">
              The same Figma templates I use with clients. Open, swap
              <br className="hidden sm:block" />
              your words, post today. No design skills needed.
            </p>
          </div>
        </AnimatedContainer>

        {/* ================================
            PRODUCT CARDS
        ================================= */}
        <div className="mx-auto mt-11 grid w-full max-w-[1040px] grid-cols-1 gap-4 md:grid-cols-2">
          {products.slice(0, 2).map((product, index) => {
            const content = updatedContent[index] || product;

            return (
              <AnimatedContainer
                key={product.id}
                animationType="fade-up"
                delay={index * 0.08}
                className="h-full"
              >
                <article className="flex h-full flex-col overflow-hidden rounded-[25px] border border-[#FF7782] bg-[#461317] p-[18px] sm:p-[20px]">
                  {/* ================================
                      ORIGINAL PRODUCT IMAGE
                  ================================= */}
                  <div className="relative aspect-[1.72/1] w-full overflow-hidden rounded-[10px] bg-[#F5DADD]">
                    {product.img && (
                      <Image
                        src={product.img}
                        alt={content.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 520px"
                        className="object-cover"
                      />
                    )}
                  </div>

                  {/* ================================
                      TITLE + PRICE
                  ================================= */}
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <h3 className="min-w-0 text-[23px] font-bold leading-[1.1] tracking-[-0.04em] text-white sm:text-[25px]">
                      {content.title}
                    </h3>

                    <span className="shrink-0 text-[24px] font-bold leading-none text-[#FF7782] sm:text-[27px]">
                      {content.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-[12px] leading-[1.4] text-white/90 sm:text-[13px]">
                    {content.desc}
                  </p>

                  {/* ================================
                      FEATURES
                  ================================= */}
                  <ul className="mt-4 flex grow flex-col gap-[11px]">
                    {content.features.map((feature, featureIndex) => (
                      <li
                        key={`${product.id}-${featureIndex}`}
                        className="flex items-start gap-[8px] text-[12px] leading-[1.35] text-white/90 sm:text-[13px]"
                      >
                        <GoCheckCircle className="mt-[1px] h-[16px] w-[16px] shrink-0 text-[#FF7782]" />

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* ================================
                      CTA
                  ================================= */}
                  <a
                    href={product.link || scheduleCallHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-7 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-[8px] bg-[#FF7782] px-5 py-3 text-[12px] font-semibold text-white transition-colors duration-200 hover:bg-[#ff6875] sm:text-[13px]"
                  >
                    {content.btnText}

                    <GoArrowUpRight className="h-[16px] w-[16px] rounded-full bg-white p-[2px] text-[#FF7782] transition-transform duration-200 group-hover:-translate-y-[1px] group-hover:translate-x-[1px]" />
                  </a>
                </article>
              </AnimatedContainer>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;