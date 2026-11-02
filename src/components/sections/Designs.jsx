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

const GALLERY_PREVIEW_COUNT = 6;
const IMAGES_PER_ROW = 3;
const GALLERY_TILE_WIDTH =
  "w-[min(72vw,210px)] shrink-0 min-[375px]:w-[min(78vw,240px)] min-[425px]:w-[min(82vw,260px)] sm:w-[280px] md:w-[320px] lg:w-[360px]";

const toggleButtonClass =
  "rounded-full border border-[#FF7782] bg-transparent px-5 py-2.5 text-[10px] font-semibold text-white transition-all duration-200 hover:bg-[#FF7782] hover:text-[#1B0002] min-[375px]:px-6 min-[375px]:py-3 min-[375px]:text-[11px] sm:px-8 sm:text-xs";

const LINKEDIN_BANNER_MAX_H = 220;

function chunkRows(items, size = IMAGES_PER_ROW) {
  const rows = [];
  for (let i = 0; i < items.length; i += size) {
    rows.push(items.slice(i, i + size));
  }
  return rows;
}

function GalleryGridTile({ item, isLinkedInTab, layout = "marquee" }) {
  const isBanner = isLinkedInTab && item.height < LINKEDIN_BANNER_MAX_H;
  const widthClass = layout === "grid" ? "w-full" : GALLERY_TILE_WIDTH;

  if (isBanner) {
    return (
      <div
        className={`group flex h-[130px] items-center justify-center overflow-hidden rounded-sm bg-white leading-none shadow-[0_2px_12px_rgba(0,0,0,0.1)] min-[375px]:h-[150px] sm:h-[168px] md:h-[178px] ${widthClass}`}
      >
        <Image
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
          sizes="360px"
          className="max-h-full max-w-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
    );
  }

  return (
    <div
      className={`group relative overflow-hidden bg-white ${widthClass}`}
      style={{ aspectRatio: `${item.width} / ${item.height}` }}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="360px"
        className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.01]"
      />
    </div>
  );
}

function GalleryMarqueeRow({ items, rowKey, durationSec, isLinkedInTab }) {
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
        className="portfolio-gallery-marquee-track flex w-max items-center gap-3 px-3 will-change-transform sm:gap-4 sm:px-4"
        style={{
          animation: `marqueeHorizontalRtl ${durationSec}s linear infinite`,
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

function GalleryStaticGrid({ items, isLinkedInTab }) {
  return (
    <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-start gap-3 px-4 sm:grid-cols-2 sm:gap-[10px] lg:grid-cols-3 lg:px-8">
      {items.map((item) => (
        <GalleryGridTile
          key={item.id}
          item={item}
          isLinkedInTab={isLinkedInTab}
          layout="grid"
        />
      ))}
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

const Designs = () => {
  const [activeFilter, setActiveFilter] = useState(portfolioFilters[0]);
  const [galleryExpanded, setGalleryExpanded] = useState(false);

  const galleryItems = useMemo(
    () => portfolioGalleryByFilter[activeFilter] ?? [],
    [activeFilter],
  );

  const isLinkedInTab = activeFilter === "LinkedIn Branding";

  const previewItems = useMemo(
    () => galleryItems.slice(0, GALLERY_PREVIEW_COUNT),
    [galleryItems],
  );

  const previewRows = useMemo(
    () => chunkRows(previewItems, IMAGES_PER_ROW),
    [previewItems],
  );

  const canToggleGallery = galleryItems.length > GALLERY_PREVIEW_COUNT;

  const caseStudies = useMemo(
    () => [...design].sort((a, b) => (a.id ?? 0) - (b.id ?? 0)),
    [],
  );

  return (
    <>
      {/* =========================================================
          PORTFOLIO GALLERY
      ========================================================== */}
      <section
        id="portfolio"
        className="relative w-full overflow-x-clip bg-[#1B0002] pb-14 pt-16 min-[375px]:pt-20 md:pb-16 md:pt-24 lg:pb-20 lg:pt-28"
      >
        {/* Header */}
        <div className="mx-auto w-full max-w-[1120px] px-3 min-[375px]:px-4 sm:px-6 lg:px-8">
          <AnimatedContainer animationType="fade-up">
            <div className="mx-auto max-w-[850px] text-center">
              {/* Label */}
              <div className="mb-4 flex justify-center">
                <span className="inline-flex min-h-[30px] items-center justify-center rounded-full border border-[#FF7782] px-5 py-1.5 text-[9px] font-medium uppercase tracking-[0.02em] text-white">
                  What I&apos;ve Made
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-[26px] font-bold leading-[1.08] tracking-[-0.04em] text-white min-[375px]:text-[30px] sm:text-[38px] md:text-[44px] lg:text-[48px]">
                Real profiles. Real people.{" "}
                <span className="text-[#FF7782]">Real results.</span>
                <br />
                Pick a service to see the work.
              </h2>

              {/* Subtitle */}
              <p className="mt-4 text-[11px] leading-relaxed text-white/75 sm:text-xs md:text-[13px]">
                Every profile below was built from scratch for one person.
              </p>
            </div>
          </AnimatedContainer>

          {/* Filters */}
          <AnimatedContainer animationType="fade-up" delay={0.08}>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
              {portfolioFilters.map((filter) => {
                const isActive = activeFilter === filter;

                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => {
                      setActiveFilter(filter);
                      setGalleryExpanded(false);
                    }}
                    className={`rounded-full border px-5 py-[7px] text-[10px] font-medium transition-all duration-200 sm:text-[11px] ${
                      isActive
                        ? "border-[#FF7782] bg-[#FF7782] text-white"
                        : "border-[#FF7782] bg-transparent text-white hover:bg-[#FF7782]/10"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </AnimatedContainer>
        </div>

        <div className="relative mt-8 w-full">
          {galleryItems.length === 0 && (
            <div className="mx-auto max-w-[1120px] px-4 py-16 text-center">
              <p className="text-sm text-white/60">
                No projects available for this service yet.
              </p>
            </div>
          )}

          {galleryItems.length > 0 && (
            <div key={`${activeFilter}-${galleryExpanded ? "all" : "preview"}`}>
              {galleryExpanded ? (
                <GalleryStaticGrid
                  items={galleryItems}
                  isLinkedInTab={isLinkedInTab}
                />
              ) : (
                <div className="space-y-3 sm:space-y-4">
                  {previewRows.map((rowItems, rowIndex) => (
                    <GalleryMarqueeRow
                      key={`${activeFilter}-row-${rowIndex}`}
                      rowKey={`${activeFilter}-row-${rowIndex}`}
                      items={rowItems}
                      isLinkedInTab={isLinkedInTab}
                      durationSec={Math.max(28, rowItems.length * 9)}
                    />
                  ))}
                </div>
              )}

              {canToggleGallery && (
                <div className="mx-auto flex max-w-[1120px] justify-center px-4 pt-4 sm:pt-6">
                  {galleryExpanded ? (
                    <button
                      type="button"
                      className={toggleButtonClass}
                      onClick={() => {
                        setGalleryExpanded(false);
                        document
                          .getElementById("portfolio")
                          ?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                    >
                      View less
                    </button>
                  ) : (
                    <button
                      type="button"
                      className={toggleButtonClass}
                      onClick={() => setGalleryExpanded(true)}
                    >
                      View more
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          PROFILE REVAMP DESIGNS
      ========================================================== */}
      <section
        id="reviews"
        className="relative w-full overflow-hidden bg-[#1B0002] pb-24 pt-10 md:pb-28 md:pt-14 lg:pb-32"
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
                Explore our latest
                <br />
                <span className="text-[#FF7782]">Profile Revamp</span> designs
              </h2>

              <p className="mx-auto mt-4 max-w-[580px] text-[11px] leading-[1.6] text-white/70 sm:text-xs">
                From visual identity to content design, these brands showcase
                how strategy and design come together to elevate LinkedIn
                presence.
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