"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  packageReviewImages,
  packageReviewsIntro,
  resultsAnalyticsImages,
  resultsIntro,
  resultsTopPostsImage,
} from "@/constants/landing/results";

function SectionIntro({ intro }) {
  return (
    <div className="text-center">
      <div className="mb-5 flex justify-center">
        <span className="inline-flex h-[34px] items-center justify-center rounded-full border border-[#FF7782] px-5 text-[10px] font-medium uppercase tracking-wide text-white">
          {intro.badge}
        </span>
      </div>

      <h2 className="font-bricolage text-[26px] font-extrabold leading-tight text-white sm:text-[32px] md:text-[36px]">
        {intro.title}
      </h2>

      <p className="mx-auto mt-4 max-w-[560px] text-[13px] font-medium text-white/75 md:text-sm">
        {intro.subtitle}
      </p>
    </div>
  );
}

const PACKAGE_REVIEW_PREVIEW = 6;

const toggleButtonClass =
  "cursor-pointer bg-transparent text-[13px] font-semibold text-[#FF7782] underline decoration-[#FF7782]/60 underline-offset-4 transition-colors duration-200 hover:text-white hover:decoration-white sm:text-sm";

const ResultsSection = () => {
  const [packageReviewsExpanded, setPackageReviewsExpanded] = useState(false);

  const visiblePackageReviews = packageReviewsExpanded
    ? packageReviewImages
    : packageReviewImages.slice(0, PACKAGE_REVIEW_PREVIEW);

  const canTogglePackageReviews =
    packageReviewImages.length > PACKAGE_REVIEW_PREVIEW;

  return (
    <section
      id="results"
      className="relative w-full overflow-x-clip py-14 md:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1100px] px-3 min-[375px]:px-4 sm:px-6">
        <SectionIntro intro={resultsIntro} />

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3 md:mt-10">
          {resultsAnalyticsImages.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={560}
                height={360}
                className="h-auto w-full"
                style={{ width: "100%", height: "auto" }}
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>

        <div className="mt-3 overflow-hidden rounded-2xl border border-white/10 bg-white md:mt-4">
          <Image
            src={resultsTopPostsImage.src}
            alt={resultsTopPostsImage.alt}
            width={1100}
            height={520}
            className="h-auto w-full"
            style={{ width: "100%", height: "auto" }}
            sizes="100vw"
          />
        </div>

        <div
          id="package-reviews"
          className="mt-12 border-t border-white/10 pt-12 md:mt-16 md:pt-14"
        >
          <SectionIntro intro={packageReviewsIntro} />
        </div>

        <div className="mt-8 columns-1 gap-4 sm:columns-2 md:mt-10 md:gap-5">
          {visiblePackageReviews.map((item) => (
            <div
              key={item.id}
              className="mb-4 break-inside-avoid overflow-hidden rounded-xl border border-white/10 bg-white md:mb-5"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={520}
                height={400}
                className="h-auto w-full"
                style={{ width: "100%", height: "auto" }}
                sizes="(max-width: 640px) 100vw, 520px"
              />
            </div>
          ))}
        </div>

        {canTogglePackageReviews && (
          <div className="mt-8 flex justify-center sm:mt-10">
            {packageReviewsExpanded ? (
              <button
                type="button"
                className={toggleButtonClass}
                onClick={() => {
                  setPackageReviewsExpanded(false);
                  document
                    .getElementById("package-reviews")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                View less
              </button>
            ) : (
              <button
                type="button"
                className={toggleButtonClass}
                onClick={() => setPackageReviewsExpanded(true)}
              >
                View more
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ResultsSection;
