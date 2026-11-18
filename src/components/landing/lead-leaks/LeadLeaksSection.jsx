import React from "react";
import { leadLeakCards } from "@/constants/landing";

function LeadLeakCard({ card }) {
  return (
    <article
      className="w-[min(88vw,280px)] shrink-0 rounded-[14px] border border-[#5B252A] bg-[#1B0002] p-5 min-[375px]:w-[min(85vw,300px)] min-[375px]:p-6 sm:w-[300px] md:w-[320px] lg:w-[340px]"
      style={{
        boxShadow: "inset 0 0 0 1px rgba(255,119,130,0.12)",
      }}
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#FF7782]">
        Lead signal
      </p>
      <h3 className="mt-4 text-[17px] font-bold leading-snug text-white md:text-[18px]">
        {card.title}
      </h3>
      <p className="mt-3 text-[13px] leading-relaxed text-white/65">
        {card.description}
      </p>
    </article>
  );
}

function MarqueeTrack() {
  return (
    <div className="flex shrink-0 gap-4 sm:gap-5">
      {leadLeakCards.map((card) => (
        <LeadLeakCard key={card.id} card={card} />
      ))}
    </div>
  );
}

const LeadLeaksSection = () => {
  return (
    <section
      id="what-i-do"
      className="relative w-full overflow-x-clip bg-[#1B0002] py-14 min-[375px]:py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-3 min-[375px]:px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-5 flex justify-center">
            <span className="inline-flex h-[34px] min-w-[120px] items-center justify-center rounded-full border border-[#FF7782] px-5 text-[10px] font-medium uppercase tracking-wide text-white">
              The problem
            </span>
          </div>

          <h2 className="mx-auto max-w-[640px] font-bricolage text-[24px] font-bold leading-[1.12] tracking-[-0.03em] text-white min-[375px]:text-[26px] min-[425px]:text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44px]">
            Five reasons founders
            <br />
            <span className="text-[#FF7782]">scroll past you</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[560px] text-[13px] leading-relaxed text-white/75 md:text-sm">
            It&apos;s rarely your skills. It&apos;s how your profile shows
            them. See which of these is costing you contracts.
          </p>
        </div>
      </div>

      <div className="lead-leak-marquee relative mt-10 overflow-hidden md:mt-12">
        <div
          className="lead-leak-marquee-track flex w-max will-change-transform"
          style={{
            animation: "marqueeHorizontalLtr 55s linear infinite reverse",
          }}
        >
          <MarqueeTrack />
          <MarqueeTrack />
        </div>
      </div>
    </section>
  );
};

export default LeadLeaksSection;
