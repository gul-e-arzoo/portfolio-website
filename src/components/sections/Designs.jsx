"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import {
  design,
  portfolioFilters,
  portfolioGalleryByFilter,
} from "@/constants";
import AnimatedContainer from "@/components/ui/AnimatedContainer";

const IMAGES_PER_ROW = 6;

const toggleButtonClass =
  "cursor-pointer bg-transparent text-[13px] font-semibold text-[#FF7782] underline decoration-[#FF7782]/60 underline-offset-4 transition-colors duration-200 hover:text-white hover:decoration-white sm:text-sm";

const LINKEDIN_BANNER_MAX_H = 300;

function chunkRows(items, size = IMAGES_PER_ROW) {
  const rows = [];
  for (let i = 0; i < items.length; i += size) {
    rows.push(items.slice(i, i + size));
  }
  return rows;
}

/* Six tiles per row, sized so the row is always wider than the screen:
   each piece shows once, then the next, with no copy visible at once. */
const BANNER_TILE_WIDTH = "w-[72vw] sm:w-[44vw] lg:w-[28vw]";
const CARD_TILE_WIDTH = "w-[62vw] sm:w-[36vw] lg:w-[22vw]";

function GalleryGridTile({ item, isLinkedInTab }) {
  const isBanner = isLinkedInTab && item.height < LINKEDIN_BANNER_MAX_H;

  return (
    <div
      className={`group shrink-0 overflow-hidden ${
        isBanner
          ? `rounded-xl bg-[#FFEFF1] p-3 sm:p-4 ${BANNER_TILE_WIDTH}`
          : `rounded-md ${CARD_TILE_WIDTH}`
      }`}
    >
      <Image
        src={item.src}
        alt={item.alt}
        width={item.width}
        height={item.height}
        sizes="(max-width: 640px) 72vw, (max-width: 1024px) 44vw, 28vw"
        className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.01]"
      />
    </div>
  );
}

function GalleryMarqueeRow({ items, rowKey, durationSec, isLinkedInTab, reverse = false }) {
  const loopItems = [...items, ...items];

  return (
    <div className="portfolio-gallery-marquee relative overflow-x-clip">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#1B0002] to-transparent sm:w-16"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#1B0002] to-transparent sm:w-16"
        aria-hidden
      />
      <div
        className="portfolio-gallery-marquee-track flex w-max items-center gap-3 pr-3 will-change-transform"
        style={{
          animation: `${reverse ? "marqueeHorizontalLtr" : "marqueeHorizontalRtl"} ${durationSec}s linear infinite`,
        }}
      >
        {loopItems.map((item, index) => (
          <GalleryGridTile
            key={`${rowKey}-${item.id}-${index}`}
            item={item}
            isLinkedInTab={isLinkedInTab}
          />
        ))}
      </div>
    </div>
  );
}

const CASE_STUDY_TAGS = [
  "Profile Optimization",
  "Content Design",
  "Strategic Positioning",
];

const cornerGlowBg = `radial-gradient(ellipse 90% 75% at 0% 0%, rgba(255,119,130,0.2), transparent 58%),
  radial-gradient(ellipse 80% 70% at 100% 0%, rgba(255,119,130,0.14), transparent 52%),
  radial-gradient(ellipse 70% 60% at 100% 100%, rgba(255,119,130,0.1), transparent 48%)`;

const PREVIEW_ROWS = 2;

/** Work samples right under the hero: tabs, then rows that drift in
    alternating directions. Two rows show first; View more adds the rest. */
export function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState(portfolioFilters[0]);
  const [expanded, setExpanded] = useState(false);

  const galleryItems = useMemo(
    () => portfolioGalleryByFilter[activeFilter] ?? [],
    [activeFilter],
  );
  const isLinkedInTab = activeFilter === "LinkedIn Branding";
  // Always two rows (one drifts left, one right). A row never has fewer
  // than 6 pieces, so it stays wider than the screen.
  const rows = useMemo(() => {
    // LinkedIn tab: banners in one row, full profile redesigns in the other.
    if (isLinkedInTab) {
      const banners = galleryItems.filter((i) => i.height < LINKEDIN_BANNER_MAX_H);
      const cards = galleryItems.filter((i) => i.height >= LINKEDIN_BANNER_MAX_H);
      return [banners, cards].filter((r) => r.length);
    }
    return chunkRows(
      galleryItems,
      Math.max(IMAGES_PER_ROW, Math.ceil(galleryItems.length / PREVIEW_ROWS)),
    );
  }, [galleryItems, isLinkedInTab]);
  const visibleRows = expanded ? rows : rows.slice(0, PREVIEW_ROWS);
  const canExpand = rows.length > PREVIEW_ROWS;

  return (
    <section
      id="portfolio"
      className="relative w-full overflow-x-clip pb-14 pt-0 md:pb-16 lg:pb-20"
    >
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-center gap-2 px-4">
        {portfolioFilters.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => {
                setActiveFilter(filter);
                setExpanded(false);
              }}
              className={`cursor-pointer rounded-full border px-5 py-[7px] text-[11px] font-medium transition-all duration-200 sm:text-xs ${
                isActive
                  ? "border-[#FF7782] bg-[#FF7782] text-[#1B0002]"
                  : "border-[#FF7782] bg-transparent text-white hover:bg-[#FF7782]/10"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="relative mt-8 w-full">
        {galleryItems.length === 0 ? (
          <p className="py-16 text-center text-sm text-white/60">
            No projects available for this service yet.
          </p>
        ) : (
          <div key={activeFilter} className="space-y-3">
            {visibleRows.map((rowItems, rowIndex) => (
              <GalleryMarqueeRow
                key={`${activeFilter}-row-${rowIndex}`}
                rowKey={`${activeFilter}-row-${rowIndex}`}
                items={rowItems}
                isLinkedInTab={isLinkedInTab}
                reverse={rowIndex % 2 === 1}
                durationSec={Math.max(36, rowItems.length * 9)}
              />
            ))}
          </div>
        )}

        {canExpand && (
          <div className="flex justify-center pt-6">
            <button
              type="button"
              className={toggleButtonClass}
              onClick={() => {
                if (expanded) {
                  document
                    .getElementById("portfolio")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }
                setExpanded(!expanded);
              }}
            >
              {expanded ? "View less" : "View more"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

const Designs = () => {
  const caseStudies = useMemo(
    () => [...design].sort((a, b) => (a.id ?? 0) - (b.id ?? 0)),
    [],
  );

  return (
    <>
      {/* =========================================================
          PROFILE REVAMP DESIGNS
      ========================================================== */}
      <section
        id="reviews"
        className="relative w-full overflow-hidden pb-24 pt-10 md:pb-28 md:pt-14 lg:pb-32"
      >
        {/* Subtle Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-[35%] h-[900px] w-[1000px] -translate-x-1/2 rounded-full bg-[#7B1F28]/10 blur-[170px]" />

        <div className="relative z-10 mx-auto w-full max-w-[1120px] px-4 sm:px-6 lg:px-8">
          <AnimatedContainer animationType="fade-up">
            <div className="mx-auto mb-10 max-w-[720px] text-center md:mb-12">
              <div className="mb-4 flex justify-center">
                <span className="inline-flex min-h-[30px] items-center justify-center rounded-full border border-[#FF7782] px-5 py-1.5 text-[9px] font-medium uppercase tracking-[0.02em] text-white">
                  Complete Case Studies
                </span>
              </div>

              <h2 className="text-[24px] font-bold leading-[1.08] tracking-[-0.04em] text-white min-[375px]:text-[27px] min-[425px]:text-[29px] sm:text-[36px] md:text-[42px]">
                See the full
                <br />
                <span className="text-[#FF7782]">before and after</span>
              </h2>

              <p className="mx-auto mt-4 max-w-[580px] text-[11px] leading-[1.6] text-white/70 sm:text-xs">
                What each client had, what I changed, and what they said
                about it. Click any case to see the whole profile.
              </p>
            </div>
          </AnimatedContainer>

          <div className="flex flex-col gap-5 md:gap-6 lg:gap-7">
            {caseStudies.map((item, index) => {
              const avatarSrc = item.avatarImg || item.logo;
              const titleText =
                item.title?.replace(/\n/g, " ") ||
                `${item.firstName || "Client"} LinkedIn Branding`;

              return (
                <div key={`case-study-${item.id || index}`} className="relative isolate">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-2 rounded-[20px] bg-[#FF7782]/15 blur-xl"
                  />
                  <article
                    className="relative z-10 overflow-hidden rounded-[14px] border border-[#FF7782]/50 shadow-[0_0_32px_rgba(255,119,130,0.18),0_0_0_1px_rgba(255,119,130,0.12)]"
                    style={{
                      backgroundColor: "#431216",
                      backgroundImage: cornerGlowBg,
                    }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
                      <div className="relative min-h-[280px] overflow-hidden bg-[#1a1a1a] sm:min-h-[320px] md:min-h-[340px]">
                        <Image
                          src={item.img}
                          alt={titleText}
                          width={960}
                          height={720}
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="h-full w-full object-cover object-center"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1B0002]/95 via-[#1B0002]/50 to-transparent px-4 pb-4 pt-16 sm:px-5">
                          <div className="flex flex-wrap gap-1.5">
                            {CASE_STUDY_TAGS.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-[4px] border border-[#FF7782]/45 bg-[#6A252C]/90 px-2.5 py-1.5 text-[8px] font-semibold uppercase tracking-[0.04em] text-white/95"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex min-h-full flex-col justify-between p-5 sm:p-6 md:py-7 md:pl-6 md:pr-7">
                        <div className="flex flex-1 flex-col">
                          <h3 className="text-[18px] font-bold leading-[1.15] tracking-[-0.03em] text-white sm:text-[20px] md:text-[21px]">
                            {titleText}
                          </h3>

                          <div
                            className="mt-4 flex flex-1 flex-col rounded-[10px] border border-[#FF7782]/35 p-4 sm:mt-5 sm:p-5"
                            style={{
                              backgroundColor: "#5a252a",
                              backgroundImage: cornerGlowBg,
                            }}
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="min-w-0">
                                {item.firstName && (
                                  <p className="text-[13px] font-semibold text-[#FF7782]">
                                    {item.firstName}
                                  </p>
                                )}
                                {item.job && (
                                  <p className="mt-0.5 text-[10px] text-white/55">
                                    {item.job}
                                  </p>
                                )}
                              </div>
                              {avatarSrc && (
                                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-[#FF7782]/60">
                                  <Image
                                    src={avatarSrc}
                                    alt={item.firstName || "Client"}
                                    width={40}
                                    height={40}
                                    className="h-full w-full object-cover"
                                  />
                                </div>
                              )}
                            </div>
                            {item.info && (
                              <p className="mt-3 flex-1 text-[10.5px] leading-[1.7] text-white/85 sm:text-[11px] md:text-xs">
                                {item.info}
                              </p>
                            )}
                          </div>
                        </div>

                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group mt-5 flex w-full items-center justify-center gap-2 rounded-[6px] bg-[#FF7782] px-4 py-3.5 text-[11px] font-semibold text-white shadow-[0_6px_20px_rgba(255,119,130,0.35)] transition-all duration-200 hover:bg-[#ff6875] sm:mt-6 sm:text-xs"
                          >
                            View Full Case
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                              <GoArrowUpRight className="text-sm" />
                            </span>
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Designs;