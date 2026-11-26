"use client";

import React from "react";
import Image from "next/image";
import { scheduleCallHref } from "@/constants";
import { FaChevronDown } from "react-icons/fa";

const Hero = () => {
  const scrollToWork = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full overflow-x-clip bg-[#1B0002] pb-14 pt-24 min-[375px]:pt-28 md:pb-20 md:pt-32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_35%,rgba(255,119,130,0.18),transparent_70%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[920px] px-3 min-[375px]:px-4 sm:px-6">
        <div className="mb-3 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
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

        <div className="text-center">
          <h1 className="font-bricolage text-[26px] font-bold leading-[1.12] text-[#fff1f3] min-[375px]:text-3xl sm:text-5xl lg:text-[64px]">
            The{" "}
            <span className="text-[#FF7782]">Home of Premium</span>
          </h1>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-2 md:gap-3">
            <span className="font-bricolage text-[26px] font-bold text-[#fff1f3] min-[375px]:text-3xl sm:text-5xl lg:text-[64px]">
              LinkedIn
            </span>
            <Image
              src="/Linkedin.svg"
              alt=""
              width={72}
              height={72}
              className="-rotate-6 h-10 w-10 shrink-0 min-[375px]:h-12 min-[375px]:w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-[72px] lg:w-[72px]"
              style={{ width: "auto", height: "auto" }}
              priority
            />
            <span className="font-bricolage text-[26px] font-bold text-[#fff1f3] min-[375px]:text-3xl sm:text-5xl lg:text-[64px]">
              Brand Design
            </span>
          </div>

          <p className="mx-auto mt-6 max-w-[640px] text-base leading-relaxed text-[#fff1f3]/90 md:mt-8 md:text-lg">
            I build the profile and the content that make fractional CMOs,
            CFOs, CTOs and COOs easy to find, easy to trust and easy to hire.
          </p>
        </div>

        <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 min-[425px]:flex-row min-[425px]:flex-wrap min-[425px]:items-center sm:mt-10 sm:gap-4 md:mt-12">
          <a
            href={scheduleCallHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full bg-[#FF7782] px-5 py-3 text-sm font-semibold text-[#1B0002] shadow-[0_8px_28px_rgba(255,119,130,0.35)] transition-colors hover:bg-[#ff6875] sm:px-7 sm:py-3.5 sm:text-base"
          >
            <Image
              src="/Schedule.svg"
              alt=""
              width={24}
              height={24}
              className="h-6 w-6 shrink-0"
              style={{ width: "auto", height: "auto" }}
            />
            Book my free call
          </a>

          <button
            type="button"
            onClick={scrollToWork}
            className="inline-flex shrink-0 cursor-pointer items-center justify-center gap-3 rounded-full border border-[#FF7782]/80 bg-[#1B0002] px-5 py-3 text-sm font-medium text-white transition-colors hover:border-[#FF7782] sm:px-7 sm:py-3.5 sm:text-base"
          >
            See my Work
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FF7782] text-[#1B0002]">
              <FaChevronDown className="text-sm" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
