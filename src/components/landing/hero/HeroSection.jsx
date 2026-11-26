"use client";

import React from "react";
import Image from "next/image";
import { FaChevronDown, FaRegCalendarCheck } from "react-icons/fa";
import {
  landingHeroAssets,
  landingHeroStats,
} from "@/constants/landing";
import { scheduleCallHref } from "@/constants";

const HeroSection = () => {
  const scrollToPlan = () => {
    document.getElementById("process")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="hero"
      className="relative w-full overflow-x-clip pt-24 min-[375px]:pt-28 md:pt-32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_20%_30%,rgba(255,119,130,0.12),transparent_65%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-3 min-[375px]:px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,42%)] lg:gap-6 xl:grid-cols-[minmax(0,1fr)_460px]">
          <div className="pb-8 text-center lg:pb-14 lg:text-left">
            <div className="mb-3 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Image
                src="/home_page/trust_bar.png"
                alt="Trusted by 25+ coaches, founders and fractional execs"
                width={711}
                height={86}
                className="h-auto w-full max-w-[440px] object-contain md:max-w-[480px]"
                style={{ height: "auto" }}
                priority
              />
            </div>

            <h1 className="mx-auto max-w-[640px] font-bricolage lg:mx-0 text-[26px] font-bold leading-[1.1] tracking-[-0.03em] text-[#fff1f3] min-[375px]:text-[30px] min-[425px]:text-[32px] sm:text-[40px] md:text-[48px] lg:text-[52px]">
              Fractional execs: turn your LinkedIn into a{" "}
              <span className="text-[#FF7782]">client pipeline in 90 days.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-[560px] text-[15px] lg:mx-0 leading-relaxed text-white/80 md:text-base">
              Founders check your profile before they sign. I rebuild it and
              write your content, so they see a senior operator worth the fee.
              Not a CV. Built for fractional CMOs, CFOs, CTOs and COOs.
            </p>

            <div className="mt-8 flex flex-nowrap items-center justify-center gap-2 sm:mt-10 sm:gap-4 lg:justify-start">
              <a
                href={scheduleCallHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-[#FF7782] px-3.5 py-2.5 text-[13px] font-semibold min-[400px]:gap-2.5 min-[400px]:px-5 min-[400px]:py-3 min-[400px]:text-sm text-[#1B0002] shadow-[0_8px_28px_rgba(255,119,130,0.35)] transition-colors hover:bg-[#ff6875] sm:px-7 sm:py-3.5 sm:text-base"
              >
                <FaRegCalendarCheck
                  aria-hidden
                  className="h-[18px] w-[18px] shrink-0 text-[#1B0002]"
                />
                Book my free call
              </a>

              <button
                type="button"
                onClick={scrollToPlan}
                className="inline-flex shrink-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-[#FF7782]/80 bg-[#1B0002] py-1.5 pl-3.5 pr-1.5 text-[13px] font-medium min-[400px]:gap-3 min-[400px]:py-2 min-[400px]:pl-5 min-[400px]:pr-2 min-[400px]:text-sm text-white transition-colors hover:border-[#FF7782] sm:px-7 sm:py-3.5 sm:text-base"
              >
                See the 90-day plan
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FF7782] text-[#1B0002] min-[400px]:h-8 min-[400px]:w-8">
                  <FaChevronDown className="text-sm" />
                </span>
              </button>
            </div>

            <p className="mt-4 text-[13px] text-white/60">
              20 minutes. No pitch. You leave knowing what to fix first.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[380px] lg:mx-0 lg:max-w-none lg:justify-self-end">
            <div className="relative aspect-[4/5] w-full min-h-[320px] sm:min-h-[400px] lg:min-h-[520px]">
              <Image
                src={landingHeroAssets.portrait}
                alt="Gul e Arzoo"
                fill
                className="object-contain object-bottom"
                priority
                sizes="(max-width: 1024px) 380px, 460px"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-[#FF7782]/15 bg-[#29070A]">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 divide-y divide-white/10 min-[400px]:grid-cols-2 min-[400px]:divide-x min-[400px]:divide-y-0 md:grid-cols-4">
          {landingHeroStats.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center px-2 py-6 text-center min-[375px]:px-4 min-[375px]:py-8 sm:py-10"
            >
              <span className="font-bricolage text-xl font-bold text-[#FF7782] min-[375px]:text-2xl sm:text-[28px] md:text-[32px]">
                {item.value}
              </span>
              <span className="mt-1.5 text-xs text-white/70 sm:text-sm">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
