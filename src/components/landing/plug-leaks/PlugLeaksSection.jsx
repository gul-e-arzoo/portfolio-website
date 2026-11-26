"use client";

import React from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import {
  plugLeakPaths,
  plugLeakPipeline,
  plugLeaksIntro,
} from "@/constants/landing";
import { scheduleCallHref } from "@/constants";

function GlowCard({ featured, children }) {
  return (
    <div className="group relative isolate">
      {/* Soft bloom that fades in on hover (active state) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-3 rounded-[26px] bg-[#FF7782]/20 opacity-0 blur-3xl transition-opacity duration-500 ease-out group-hover:opacity-100"
      />

      <article
        className={`relative z-10 overflow-hidden rounded-[18px] border p-6 transition-[border-color,box-shadow,transform] duration-500 ease-out group-hover:-translate-y-1 group-hover:border-[#FF7782]/70 group-hover:shadow-[0_18px_48px_rgba(255,119,130,0.22)] md:p-7 ${
          featured ? "border-[#FF7782]/45" : "border-[#FF7782]/25"
        } shadow-[0_8px_24px_rgba(0,0,0,0.25)]`}
        style={{
          backgroundColor: "#431216",
          backgroundImage: featured
            ? `radial-gradient(ellipse 90% 75% at 0% 0%, rgba(255,119,130,0.22), transparent 58%),
               radial-gradient(ellipse 70% 60% at 100% 100%, rgba(255,119,130,0.12), transparent 48%)`
            : `radial-gradient(ellipse 85% 70% at 0% 0%, rgba(255,119,130,0.14), transparent 55%),
               radial-gradient(ellipse 60% 55% at 100% 100%, rgba(255,119,130,0.08), transparent 46%)`,
        }}
      >
        <div className="relative z-10">{children}</div>
      </article>
    </div>
  );
}

const PlugLeaksSection = () => {
  const scrollToTarget = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative w-full overflow-x-clip py-16 md:py-20 lg:py-24">
      {/* Ambient light behind card stack */}
      <div
        className="pointer-events-none absolute right-[5%] top-[42%] h-[520px] w-[420px] -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,119,130,0.22),rgba(255,119,130,0.08)_45%,transparent_72%)] sm:right-[8%] md:h-[680px] md:w-[520px] lg:right-[12%]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[2%] top-[58%] h-[380px] w-[340px] -translate-y-1/2 bg-[radial-gradient(circle,rgba(255,119,130,0.15),transparent_70%)] lg:right-[10%]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid max-w-[1280px] items-start gap-10 px-3 min-[375px]:gap-12 min-[375px]:px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:gap-14 xl:grid-cols-[1fr_480px] lg:px-8">
        <div className="text-center lg:pt-2 lg:text-left">
          <div className="mb-5 flex justify-center lg:justify-start">
            <span className="inline-flex h-[34px] items-center justify-center rounded-full border border-[#FF7782] px-5 text-[10px] font-medium uppercase tracking-wide text-white">
              {plugLeaksIntro.badge}
            </span>
          </div>

          <h2 className="font-bricolage text-[26px] font-bold leading-[1.1] tracking-[-0.03em] text-white min-[375px]:text-[28px] min-[425px]:text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px]">
            {plugLeaksIntro.titleLine1}
            <br />
            <span className="text-[#FF7782]">{plugLeaksIntro.titleLine2}</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[520px] text-[14px] leading-relaxed text-white/80 lg:mx-0 md:text-[15px]">
            {plugLeaksIntro.description}
          </p>

          <div className="mx-auto mt-8 max-w-[520px] border-b border-l lg:mx-0 border-[#FF7782]/45 bg-[#FF7782]/[0.04] px-5 py-4">
            <p className="text-[13px] leading-relaxed text-white/85 md:text-sm">
              {plugLeaksIntro.callout}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8 md:gap-10">
          {plugLeakPaths.map((path) => (
            <GlowCard key={path.id} featured={path.featured}>
              <span className="inline-flex rounded-full border border-[#FF7782]/50 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/90">
                {path.badge}
              </span>

              <h3 className="mt-4 text-xl font-bold leading-snug text-white md:text-[22px]">
                {path.title}
              </h3>

              <p className="mt-3 text-[13px] leading-relaxed text-white/70 md:text-sm">
                {path.description}
              </p>

              {path.ctaType === "scroll" ? (
                <button
                  type="button"
                  onClick={() => scrollToTarget(path.scrollTarget)}
                  className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#FF7782] px-5 py-3.5 text-sm font-semibold text-[#1B0002] shadow-[0_8px_28px_rgba(255,119,130,0.4)] transition-colors hover:bg-[#ff6875] sm:text-[15px]"
                >
                  {path.cta}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/95 text-[#1B0002]">
                    <FaChevronDown className="text-sm" />
                  </span>
                </button>
              ) : (
                <a
                  href={scheduleCallHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-[#FF7782]/55 bg-[#29070A] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[#FF7782] hover:bg-[#FF7782]/10 sm:text-[15px]"
                >
                  <Image
                    src="/Schedule.svg"
                    alt=""
                    width={22}
                    height={22}
                    className="h-[22px] w-[22px] shrink-0"
                  />
                  {path.cta}
                </a>
              )}

              <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/55 sm:text-[10px]">
                {plugLeakPipeline.map((step, index) => (
                  <React.Fragment key={step}>
                    <span>{step}</span>
                    {index < plugLeakPipeline.length - 1 && (
                      <span className="text-[#FF7782]">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlugLeaksSection;
