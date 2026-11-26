import React from "react";
import Image from "next/image";
import { scheduleCallHref } from "@/constants";

const cornerGlowBg = `radial-gradient(ellipse 90% 75% at 0% 0%, rgba(255,119,130,0.24), transparent 58%),
  radial-gradient(ellipse 80% 70% at 100% 0%, rgba(255,119,130,0.18), transparent 52%),
  radial-gradient(ellipse 70% 60% at 100% 100%, rgba(255,119,130,0.14), transparent 48%),
  radial-gradient(ellipse 65% 55% at 0% 100%, rgba(255,119,130,0.12), transparent 45%)`;

const FinalCtaSection = () => {
  return (
    <section className="relative w-full overflow-x-clip bg-[#1B0002] py-16 md:py-24">
      <div className="relative mx-auto max-w-[1120px] px-3 min-[375px]:px-4 sm:px-6">
        <div className="relative isolate">
          <div
            className="relative z-10 overflow-hidden rounded-2xl border border-[#FF7782]/55 px-4 py-10 text-center min-[375px]:px-6 min-[375px]:py-12 md:px-10 md:py-14"
            style={{
              backgroundColor: "#431216",
              backgroundImage: cornerGlowBg,
            }}
          >
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,119,130,0.22),transparent_55%)]"
              aria-hidden
            />

            <div className="relative z-10">
              <Image
                src="/logo.svg"
                alt=""
                width={56}
                height={56}
                className="mx-auto h-14 w-14 rounded-full border-2 border-[#FF7782] shadow-[0_0_20px_rgba(255,119,130,0.35)]"
              />
              <h2 className="mt-6 font-bricolage text-xl font-bold leading-snug text-white min-[375px]:text-2xl md:text-3xl">
                Your next contract starts with your profile.
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-white/75">
                Book a free 20-minute call. I&apos;ll look at your profile with you and show you the first 3 things to fix. You don&apos;t commit to anything.
              </p>
              <a
                href={scheduleCallHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[#FF7782] px-8 py-3.5 text-sm font-semibold text-[#1B0002] shadow-[0_8px_28px_rgba(255,119,130,0.4)] transition-colors hover:bg-[#ff6875]"
              >
                Show me what to fix
              </a>
              <p className="mt-3 text-xs text-white/55">
                No pitch. No pressure. Just a clear next step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
