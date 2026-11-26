"use client";

import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full overflow-x-clip pb-8 pt-24 min-[375px]:pt-28 md:pb-10 md:pt-32"
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
          <h1 className="font-bricolage text-[26px] font-bold leading-[1.12] text-[#fff1f3] min-[375px]:text-[28px] sm:text-5xl lg:text-[64px]">
            The{" "}
            <span className="text-[#FF7782]">Home of Premium</span>
          </h1>

          <div className="mt-1 flex flex-nowrap items-center justify-center gap-1.5 sm:mt-2 sm:gap-2 md:gap-3">
            <span className="whitespace-nowrap font-bricolage text-[26px] font-bold text-[#fff1f3] min-[375px]:text-[28px] sm:text-5xl lg:text-[64px]">
              LinkedIn
            </span>
            <Image
              src="/Linkedin.svg"
              alt=""
              width={72}
              height={72}
              className="-rotate-6 h-8 w-8 shrink-0 min-[375px]:h-9 min-[375px]:w-9 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-[72px] lg:w-[72px]"
              priority
            />
            <span className="whitespace-nowrap font-bricolage text-[26px] font-bold text-[#fff1f3] min-[375px]:text-[28px] sm:text-5xl lg:text-[64px]">
              Brand Design
            </span>
          </div>

          <p className="mx-auto mt-6 max-w-[640px] text-base leading-relaxed text-[#fff1f3]/90 md:mt-8 md:text-lg">
            I build the profile and the content that make fractional CMOs,
            CFOs, CTOs and COOs easy to find, easy to trust and easy to hire.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;
