"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { reviews } from "@/constants";

const PREVIEW_CHARS = 168;
/** Auto-rotate testimonials (pause while full review is open) */
const AUTO_ADVANCE_MS = 4500;

function previewText(text) {
  if (!text || text.length <= PREVIEW_CHARS) return text;
  const slice = text.slice(0, PREVIEW_CHARS);
  const lastSpace = slice.lastIndexOf(" ");
  return `${(lastSpace > 80 ? slice.slice(0, lastSpace) : slice).trim()}.`;
}

export const Review = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  /** 1 = next slide in from right, -1 = from left */
  const [slideDirection, setSlideDirection] = useState(1);

  const total = reviews.length;

  const goToIndex = useCallback((index, direction = 1) => {
    setSlideDirection(direction);
    setActiveIndex(index);
    setExpanded(false);
  }, []);
  const active = reviews[activeIndex];

  const previousIndex = (activeIndex - 1 + total) % total;
  const nextIndex = (activeIndex + 1) % total;

  const clientPositions = useMemo(
    () => [
      { index: previousIndex, position: "top" },
      { index: activeIndex, position: "center" },
      { index: nextIndex, position: "bottom" },
    ],
    [previousIndex, activeIndex, nextIndex],
  );

  useEffect(() => {
    if (expanded) return undefined;

    let intervalId;

    const start = () => {
      window.clearInterval(intervalId);
      intervalId = window.setInterval(() => {
        setSlideDirection(1);
        setActiveIndex((current) => (current + 1) % total);
      }, AUTO_ADVANCE_MS);
    };

    const stop = () => window.clearInterval(intervalId);

    start();

    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [activeIndex, expanded, total]);

  if (!active) return null;

  const quote = expanded ? active.info.trim() : previewText(active.info);
  const counter = `${String(activeIndex + 1).padStart(2, "0")}/${String(total).padStart(2, "0")}`;

  return (
    <section
      id="featured-testimonials"
      className="relative w-full overflow-x-clip bg-[#1B0002] py-14 min-[375px]:py-20 md:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-[56%] h-[650px] w-[950px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7A252D]/20 blur-[150px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-3 min-[375px]:px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-[800px] text-center md:mb-12">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center justify-center rounded-full border border-[#FF7782]/80 px-5 py-1.5 text-[10px] font-medium uppercase tracking-wide text-white">
              Testimonial
            </span>
          </div>

          <h2 className="text-[26px] font-bold leading-[1.08] tracking-[-0.045em] text-white min-[375px]:text-[30px] sm:text-[42px] md:text-[50px] lg:text-[56px]">
            Don&apos;t Take My Word For It.
            <br />
            Take <span className="text-[#FF7782]">Theirs.</span>
          </h2>

          <p className="mt-5 text-sm text-white/70 md:text-[15px]">
            Execs and founders who got seen, got trusted and got hired.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[1040px] overflow-hidden rounded-[28px] border border-[#FF7782] bg-[#390D11]/90">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,119,130,0.035),transparent_65%)]" />

          <div className="relative grid min-h-0 grid-cols-1 lg:min-h-[500px] lg:grid-cols-[42%_58%]">
            {/* Left — Client Reviews */}
            <div className="relative px-4 py-6 min-[375px]:px-6 min-[375px]:py-8 sm:px-9 sm:py-10 lg:px-12 lg:py-14">
              <h3 className="relative z-20 text-lg font-bold text-white sm:text-xl">
                Client Reviews
              </h3>

              <div className="relative mt-7 hidden h-[350px] lg:block">
                <svg
                  className="pointer-events-none absolute left-[75px] top-[25px] h-[300px] w-[140px]"
                  viewBox="0 0 140 300"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M15 10 C115 70, 115 230, 15 290"
                    stroke="#FF7782"
                    strokeWidth="3"
                    strokeDasharray="9 10"
                    strokeLinecap="round"
                  />
                </svg>

                {clientPositions.map((item) => {
                  const testimonial = reviews[item.index];
                  const isActive = item.position === "center";

                  let positionClasses = "";
                  if (item.position === "top") {
                    positionClasses = "top-0 left-0 opacity-40 scale-[0.90]";
                  }
                  if (item.position === "center") {
                    positionClasses =
                      "top-1/2 left-[55px] -translate-y-1/2 opacity-100 scale-100";
                  }
                  if (item.position === "bottom") {
                    positionClasses = "bottom-0 left-0 opacity-40 scale-[0.90]";
                  }

                  return (
                    <button
                      key={`${testimonial.id}-${item.position}`}
                      type="button"
                      onClick={() => {
                        const dir =
                          item.index === nextIndex
                            ? 1
                            : item.index === previousIndex
                              ? -1
                              : item.index > activeIndex
                                ? 1
                                : -1;
                        goToIndex(item.index, dir);
                      }}
                      className={`absolute z-10 flex min-w-[245px] items-center gap-3 rounded-xl px-3 py-3 text-left transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${positionClasses} ${
                        isActive
                          ? "bg-[#FF7782] shadow-[0_12px_30px_rgba(255,119,130,0.20)]"
                          : "bg-[#A64B54] hover:opacity-70"
                      }`}
                    >
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[#E6C9B8]">
                        <Image
                          src={testimonial.img}
                          alt={testimonial.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <p
                          className={`truncate text-base font-bold ${
                            isActive ? "text-white" : "text-white/70"
                          }`}
                        >
                          {testimonial.name}
                        </p>
                        <div className="mt-1 flex items-center gap-1.5">
                          <span className="text-[13px] text-[#FFF000]">★</span>
                          <span
                            className={`text-xs ${
                              isActive ? "text-white" : "text-white/55"
                            }`}
                          >
                            Verified 2026
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="no-scrollbar mt-7 flex gap-2 overflow-x-auto pb-3 min-[375px]:gap-3 lg:hidden">
                {reviews.map((testimonial, index) => {
                  const isActive = activeIndex === index;
                  return (
                    <button
                      key={testimonial.id}
                      type="button"
                      onClick={() => {
                        goToIndex(index, index > activeIndex ? 1 : -1);
                      }}
                      className={`flex min-w-[min(72vw,200px)] shrink-0 items-center gap-2 rounded-xl px-2.5 py-2.5 text-left transition-all duration-500 min-[375px]:min-w-[200px] min-[375px]:gap-3 min-[375px]:px-3 min-[375px]:py-3 ${
                        isActive ? "bg-[#FF7782]" : "bg-[#7E353C] opacity-55"
                      }`}
                    >
                      <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-[#E6C9B8]">
                        <Image
                          src={testimonial.img}
                          alt={testimonial.name}
                          fill
                          sizes="44px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-bold text-white">
                          {testimonial.name}
                        </p>
                        <div className="mt-1 flex items-center gap-1.5">
                          <span className="text-xs text-[#FFF000]">★</span>
                          <span className="text-[11px] text-white/80">
                            Verified 2026
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

            </div>

            {/* Right — quote */}
            <div className="relative flex min-h-[380px] items-center overflow-hidden px-6 pb-10 sm:px-10 lg:min-h-[420px] lg:px-14 lg:py-14">
              <div className="absolute bottom-[60px] left-0 top-[60px] hidden w-px bg-[#FF7782]/55 lg:block" />

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeIndex}
                  initial={{
                    opacity: 0,
                    x: 36 * slideDirection,
                    y: 14,
                    filter: "blur(6px)",
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    x: -24 * slideDirection,
                    y: -6,
                    filter: "blur(4px)",
                  }}
                  transition={{
                    duration: 0.48,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="w-full"
                >
                  <div className="mb-6 text-center">
                    <motion.span
                      initial={{ opacity: 0, scale: 0.88 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.06, duration: 0.35 }}
                      className="inline-block font-serif text-[52px] font-bold leading-[0.5] text-[#FF7782] min-[375px]:text-[68px] sm:text-[90px]"
                    >
                      &ldquo;
                    </motion.span>
                  </div>

                  <p className="mx-auto max-w-[530px] text-center text-[15px] leading-[1.3] text-white sm:text-base lg:text-[17px]">
                    {quote}
                  </p>

                  <div className="mt-8 text-center">
                    <button
                      type="button"
                      onClick={() => setExpanded((v) => !v)}
                      className="text-sm text-white/85 underline underline-offset-4 transition-colors hover:text-[#FF7782]"
                    >
                      {expanded ? "Show less" : "READ Full Review"}
                    </button>
                  </div>

                  <div className="mx-auto mt-7 h-px w-full max-w-[500px] bg-[#FF7782]/55" />

                  <div className="mt-7 text-center">
                    <h4 className="text-xl font-bold text-white md:text-[23px]">
                      {active.name}
                    </h4>
                    <p className="mt-2 text-sm text-white/90">{active.job}</p>
                    <p className="mt-7 text-xl font-extrabold text-[#FF7782]">
                      {counter}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
