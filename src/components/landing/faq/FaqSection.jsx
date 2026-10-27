"use client";

import React, { useState } from "react";
import { faqIntro, landingFaqs } from "@/constants/landing";

const inactiveCardGlow = `radial-gradient(ellipse 90% 75% at 0% 0%, rgba(255,119,130,0.2), transparent 58%),
  radial-gradient(ellipse 80% 70% at 100% 0%, rgba(255,119,130,0.14), transparent 52%),
  radial-gradient(ellipse 70% 60% at 100% 100%, rgba(255,119,130,0.1), transparent 48%),
  radial-gradient(ellipse 65% 55% at 0% 100%, rgba(255,119,130,0.08), transparent 45%)`;

function PlusIcon({ onPink = false }) {
  return (
    <span
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-lg font-light leading-none ${
        onPink
          ? "border-white/95 text-white"
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
    <section id="faq" className="relative w-full bg-[#1B0002] py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[720px] px-4 sm:px-6">
        <div className="text-center">
          <div className="mb-5 flex justify-center">
            <span className="inline-flex h-[34px] min-w-[80px] items-center justify-center rounded-full border border-[#FF7782] px-5 text-[10px] font-medium uppercase tracking-wide text-white">
              {faqIntro.badge}
            </span>
          </div>

          <h2 className="font-bricolage text-[28px] font-extrabold leading-tight text-white sm:text-[32px] md:text-[36px]">
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
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className={`relative w-full overflow-hidden rounded-[14px] text-left transition-colors ${
                      isOpen
                        ? "bg-[#FF7782] px-4 py-4 shadow-[0_0_24px_rgba(255,119,130,0.25)] md:px-5 md:py-[18px]"
                        : "border border-[#FF7782]/45 px-4 py-4 md:px-5 md:py-[18px] hover:border-[#FF7782]/60"
                    }`}
                    style={
                      isOpen
                        ? undefined
                        : {
                            backgroundColor: "#5a252a",
                            backgroundImage: inactiveCardGlow,
                          }
                    }
                  >
                    {!isOpen && (
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 rounded-[14px] shadow-[inset_0_0_28px_rgba(255,119,130,0.08)]"
                      />
                    )}

                    <div className="relative z-10 flex items-center justify-between gap-4">
                      <span className="text-[15px] font-bold leading-snug text-white md:text-base">
                        {item.question}
                      </span>
                      <PlusIcon onPink={isOpen} />
                    </div>

                    {!isOpen && (
                      <p className="relative z-10 mt-3 pr-12 text-[13px] font-normal leading-relaxed text-white/80 md:text-sm">
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
