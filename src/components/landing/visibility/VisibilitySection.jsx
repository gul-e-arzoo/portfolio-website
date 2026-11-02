import React from "react";
import {
  whoItsForAudiences,
  whoItsForIntro,
} from "@/constants/landing/whoItsFor";

const cornerGlowBg = `radial-gradient(ellipse 90% 75% at 0% 0%, rgba(255,119,130,0.2), transparent 58%),
  radial-gradient(ellipse 80% 70% at 100% 0%, rgba(255,119,130,0.14), transparent 52%),
  radial-gradient(ellipse 70% 60% at 100% 100%, rgba(255,119,130,0.1), transparent 48%),
  radial-gradient(ellipse 65% 55% at 0% 100%, rgba(255,119,130,0.08), transparent 45%)`;

function AudienceCard({ audience }) {
  const badgeFilled = audience.badgeStyle === "filled";

  return (
    <article
      className="relative overflow-hidden rounded-[14px] border border-[#FF7782]/40 shadow-[0_0_24px_rgba(255,119,130,0.1)]"
      style={{
        backgroundColor: "#431216",
        backgroundImage: cornerGlowBg,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[14px] shadow-[inset_0_0_32px_rgba(255,119,130,0.06)]"
      />

      <div className="relative z-10 p-5 md:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <h3 className="text-xl font-bold text-white md:text-[22px]">
            {audience.title}
          </h3>
          <span
            className={`inline-flex w-fit shrink-0 items-center justify-center rounded-full px-3 py-1 text-[9px] font-bold uppercase tracking-[0.1em] ${
              badgeFilled
                ? "bg-[#FF7782] text-[#1B0002]"
                : "border border-[#FF7782] bg-transparent text-[#FF7782]"
            }`}
          >
            {audience.badge}
          </span>
        </div>

        <p className="mt-4 text-[12px] font-medium leading-relaxed text-white/75 md:text-[13px]">
          {audience.description}
        </p>
      </div>
    </article>
  );
}

const VisibilitySection = () => {
  return (
    <section className="relative w-full overflow-x-clip bg-[#1B0002] py-16 md:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1280px] items-start gap-10 px-3 min-[375px]:px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-12 xl:grid-cols-[1fr_440px] lg:px-8">
        <div>
          <div className="mb-5 flex justify-start">
            <span className="inline-flex h-[34px] items-center justify-center rounded-full border border-[#FF7782] px-5 text-[10px] font-medium uppercase tracking-wide text-white">
              {whoItsForIntro.badge}
            </span>
          </div>

          <h2 className="max-w-[560px] font-bricolage text-[24px] font-extrabold leading-[1.12] tracking-[-0.03em] text-white min-[375px]:text-[26px] min-[425px]:text-[28px] sm:text-[34px] md:text-[40px] lg:text-[42px]">
            {whoItsForIntro.titleBefore}{" "}
            <span className="text-[#FF7782]">{whoItsForIntro.titleHighlight}</span>{" "}
            {whoItsForIntro.titleAfter}
          </h2>

          <p className="mt-5 max-w-[520px] text-[14px] font-medium leading-relaxed text-white/75 md:text-[15px]">
            {whoItsForIntro.description}
          </p>

          <div className="mt-8 max-w-[520px] border-l-2 border-[#FF7782] bg-[#FF7782]/[0.06] px-5 py-4">
            <p className="text-[13px] font-semibold text-[#FF7782] md:text-sm">
              {whoItsForIntro.callout}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-5">
          {whoItsForAudiences.map((audience) => (
            <AudienceCard key={audience.id} audience={audience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisibilitySection;
