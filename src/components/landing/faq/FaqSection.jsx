"use client";

import React, { useState } from "react";
import { faqIntro, landingFaqs } from "@/constants/landing";

const inactiveCardGlow = `radial-gradient(ellipse 90% 75% at 0% 0%, rgba(255,119,130,0.2), transparent 58%),
  radial-gradient(ellipse 80% 70% at 100% 0%, rgba(255,119,130,0.14), transparent 52%),
  radial-gradient(ellipse 70% 60% at 100% 100%, rgba(255,119,130,0.1), transparent 48%),
  radial-gradient(ellipse 65% 55% at 0% 100%, rgba(255,119,130,0.08), transparent 45%)`;

function PlusIcon({ open = false }) {
  return (
    <span
      aria-hidden
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-lg font-light leading-none transition-[transform,border-color,color] duration-300 ${
        open
          ? "rotate-45 border-[#1B0002]/70 text-[#1B0002]"
          : "border-[#FF7782]/70 text-white"
      }`}
    >
      +
    </span>
  );
}

const FaqSection = () => {
  const [openId, setOpenId] = useState(landingFaqs[0]?.id ?? null);

  return (
    <section id="faq" className="relative w-full overflow-x-clip py-14 min-[375px]:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[720px] px-3 min-[375px]:px-4 sm:px-6">
        <div className="text-center">
          <div className="mb-5 flex justify-center">
            <span className="inline-flex h-[34px] min-w-[80px] items-center justify-center rounded-full border border-[#FF7782] px-5 text-[10px] font-medium uppercase tracking-wide text-white">
              {faqIntro.badge}
            </span>
          </div>

          <h2 className="font-bricolage text-[24px] font-extrabold leading-tight text-white min-[375px]:text-[26px] min-[425px]:text-[28px] sm:text-[32px] md:text-[36px]">
            {faqIntro.title}
          </h2>

          <p className="mx-auto mt-5 max-w-[560px] text-[13px] font-medium text-white/75 md:text-sm">
            {faqIntro.subtitle}
          </p>
        </div>

        <div
          className="mt-10 rounded-[18px] border border-[#FF7782]/50 p-3 md:mt-12 md:p-4"
          style={{
            backgroundColor: "#431216",
            backgroundImage: inactiveCardGlow,
          }}
        >
          <ul className="flex flex-col gap-2.5 md:gap-3">
            {landingFaqs.map((item) => {
              const isOpen = openId === item.id;

              return (
                <li key={item.id}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className={`w-full cursor-pointer rounded-[14px] border px-4 py-4 text-left transition-colors duration-300 md:px-5 md:py-[18px] ${
                      isOpen
                        ? "border-[#FF7782] bg-[#FF7782]"
                        : "border-[#FF7782]/30 bg-[#2A0A0D] hover:border-[#FF7782]/60"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span
                        className={`text-[15px] font-bold leading-snug md:text-base ${
                          isOpen ? "text-[#1B0002]" : "text-white"
                        }`}
                      >
                        {item.question}
                      </span>
                      <PlusIcon open={isOpen} />
                    </div>

                    {isOpen && (
                      <p className="mt-3 pr-12 text-[13px] font-medium leading-relaxed text-[#1B0002]/85 md:text-sm">
                        {item.answer}
                      </p>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
