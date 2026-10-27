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
    <div className="relative isolate">
      {/* Soft bloom behind card (reference-style outer glow) */}
      <div
        aria-hidden
        className={`pointer-events-none absolute -inset-4 rounded-[28px] blur-3xl ${
          featured
            ? "bg-[#FF7782]/35"
            : "bg-[#FF7782]/18"
        }`}
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute -inset-1 rounded-[22px] blur-xl ${
          featured ? "bg-[#FF7782]/20" : "bg-[#FF7782]/10"
        }`}
      />

      <article
        className={`relative z-10 overflow-hidden rounded-[18px] border p-6 md:p-7 ${
          featured
            ? "border-[#FF7782]/75 shadow-[0_0_0_1px_rgba(255,119,130,0.35),0_0_32px_rgba(255,119,130,0.45),0_0_64px_rgba(255,119,130,0.28),0_0_100px_rgba(255,119,130,0.14)]"
            : "border-[#FF7782]/40 shadow-[0_0_0_1px_rgba(255,119,130,0.12),0_0_28px_rgba(255,119,130,0.22),0_0_56px_rgba(255,119,130,0.12)]"
        }`}
        style={{
          backgroundColor: "#431216",
          backgroundImage: featured
            ? `radial-gradient(ellipse 90% 75% at 0% 0%, rgba(255,119,130,0.28), transparent 58%),
               radial-gradient(ellipse 80% 70% at 100% 0%, rgba(255,119,130,0.2), transparent 52%),
               radial-gradient(ellipse 70% 60% at 100% 100%, rgba(255,119,130,0.16), transparent 48%),
               radial-gradient(ellipse 65% 55% at 0% 100%, rgba(255,119,130,0.14), transparent 45%)`
            : `radial-gradient(ellipse 85% 70% at 0% 0%, rgba(255,119,130,0.18), transparent 55%),
               radial-gradient(ellipse 75% 65% at 100% 0%, rgba(255,119,130,0.14), transparent 50%),
               radial-gradient(ellipse 60% 55% at 100% 100%, rgba(255,119,130,0.1), transparent 46%),
               radial-gradient(ellipse 55% 50% at 0% 100%, rgba(255,119,130,0.08), transparent 42%)`,
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[18px] shadow-[inset_0_0_40px_rgba(255,119,130,0.08)]"
        />
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
    <section className="relative w-full overflow-x-clip bg-[#1B0002] py-16 md:py-20 lg:py-24">
      {/* Ambient light behind card stack */}
      <div
        className="pointer-events-none absolute right-[5%] top-[42%] h-[520px] w-[420px] -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,119,130,0.22),rgba(255,119,130,0.08)_45%,transparent_72%)] sm:right-[8%] md:h-[680px] md:w-[520px] lg:right-[12%]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[2%] top-[58%] h-[380px] w-[340px] -translate-y-1/2 bg-[radial-gradient(circle,rgba(255,119,130,0.15),transparent_70%)] lg:right-[10%]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid max-w-[1280px] items-start gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:gap-14 xl:grid-cols-[1fr_480px] lg:px-8">
        <div className="lg:pt-2">
          <div className="mb-5 flex justify-start">
            <span className="inline-flex h-[34px] items-center justify-center rounded-full border border-[#FF7782] px-5 text-[10px] font-medium uppercase tracking-wide text-white">
              {plugLeaksIntro.badge}
            </span>
          </div>

          <h2 className="font-bricolage text-[32px] font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-[38px] md:text-[44px] lg:text-[48px]">
            {plugLeaksIntro.titleLine1}
            <br />
            <span className="text-[#FF7782]">{plugLeaksIntro.titleLine2}</span>
          </h2>

          <p className="mt-5 max-w-[520px] text-[14px] leading-relaxed text-white/80 md:text-[15px]">
            {plugLeaksIntro.description}
          </p>

          <div className="mt-8 max-w-[520px] border-b border-l border-[#FF7782]/45 bg-[#FF7782]/[0.04] px-5 py-4">
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
