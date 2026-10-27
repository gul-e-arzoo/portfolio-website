import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import { processIntro, processPhases } from "@/constants/landing";

const cornerGlowBg = `radial-gradient(ellipse 90% 75% at 0% 0%, rgba(255,119,130,0.22), transparent 58%),
  radial-gradient(ellipse 80% 70% at 100% 0%, rgba(255,119,130,0.16), transparent 52%),
  radial-gradient(ellipse 70% 60% at 100% 100%, rgba(255,119,130,0.12), transparent 48%),
  radial-gradient(ellipse 65% 55% at 0% 100%, rgba(255,119,130,0.1), transparent 45%)`;

function ProcessPhaseCard({ phase }) {
  return (
    <article
      className="relative overflow-hidden rounded-[14px] border border-[#FF7782]/45 shadow-[0_0_24px_rgba(255,119,130,0.1),0_0_0_1px_rgba(255,119,130,0.1)]"
      style={{
        backgroundColor: "#431216",
        backgroundImage: cornerGlowBg,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[16px] shadow-[inset_0_0_36px_rgba(255,119,130,0.07)]"
      />

      <div className="relative z-10 p-5 md:p-6 md:pr-24">
        <span className="absolute right-4 top-4 rounded-full bg-[#FF7782] px-3 py-0.5 text-[10px] font-bold tracking-wide text-[#1B0002] md:right-5 md:top-5">
          {phase.week}
        </span>

        <h3 className="pr-14 text-lg font-bold text-white md:text-[19px]">
          {phase.title}
        </h3>

        <p className="mt-2.5 max-w-[640px] text-[12px] font-medium leading-relaxed text-white/80 md:text-[13px]">
          {phase.description}
        </p>

        <ul className="mt-4 space-y-2">
          {phase.points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-2 text-[12px] font-medium leading-snug text-white/90 md:text-[13px]"
            >
              <CiCircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#FF7782]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

const ProcessSection = () => {
  return (
    <section
      id="process"
      className="relative w-full bg-[#1B0002] py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[780px] px-4 sm:px-6">
        <div className="text-center">
          <div className="mb-5 flex justify-center">
            <span className="inline-flex h-[34px] min-w-[120px] items-center justify-center rounded-full border border-[#FF7782] px-5 text-[10px] font-medium uppercase tracking-wide text-white">
              {processIntro.badge}
            </span>
          </div>

          <h2 className="font-bricolage text-[28px] font-extrabold leading-[1.1] tracking-[-0.03em] text-white sm:text-[34px] md:text-[40px] lg:text-[44px]">
            From{" "}
            <span className="text-[#FF7782]">Zero to Authority</span> in
            <br />
            <span className="text-[#FF7782]">12 Weeks</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[560px] text-[13px] font-medium leading-relaxed text-white/80 md:text-sm">
            {processIntro.subtitle}
          </p>
        </div>

        <div className="mt-9 flex flex-col gap-4 md:mt-10 md:gap-4">
          {processPhases.map((phase) => (
            <ProcessPhaseCard key={phase.id} phase={phase} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
