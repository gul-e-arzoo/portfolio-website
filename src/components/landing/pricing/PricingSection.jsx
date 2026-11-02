import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import { pricingIntro, pricingTiers } from "@/constants/landing";
import { scheduleCallHref } from "@/constants";

const cornerGlowBg = `radial-gradient(ellipse 90% 75% at 0% 0%, rgba(255,119,130,0.22), transparent 58%),
  radial-gradient(ellipse 80% 70% at 100% 0%, rgba(255,119,130,0.16), transparent 52%),
  radial-gradient(ellipse 70% 60% at 100% 100%, rgba(255,119,130,0.12), transparent 48%),
  radial-gradient(ellipse 65% 55% at 0% 100%, rgba(255,119,130,0.1), transparent 45%)`;

function BenefitsDivider() {
  return (
    <div className="relative my-6 flex items-center justify-center">
      <div className="absolute inset-x-0 top-1/2 h-px bg-[#FF7782]/35" aria-hidden />
      <span className="relative bg-[#431216] px-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF7782]">
        Benefits
      </span>
    </div>
  );
}

function PricingCard({ tier }) {
  return (
    <div className="relative isolate flex h-full flex-col">
      {tier.featured && (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-3 rounded-[24px] bg-[#FF7782]/25 blur-2xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-1 rounded-[20px] bg-[#FF7782]/12 blur-lg"
          />
        </>
      )}

      <article
        className={`relative z-10 flex h-full flex-col overflow-hidden rounded-[16px] border p-6 md:p-7 ${
          tier.featured
            ? "border-[#FF7782]/70 shadow-[0_0_40px_rgba(255,119,130,0.22),0_0_0_1px_rgba(255,119,130,0.15)]"
            : "border-[#FF7782]/40 shadow-[0_0_24px_rgba(255,119,130,0.08)]"
        }`}
        style={{
          backgroundColor: "#431216",
          backgroundImage: cornerGlowBg,
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[16px] shadow-[inset_0_0_36px_rgba(255,119,130,0.06)]"
        />

        <div className="relative z-10 flex h-full flex-col">
          {tier.featured && tier.popularLabel && (
            <span className="absolute right-0 top-0 rounded-full bg-[#FF7782] px-3 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#1B0002]">
              {tier.popularLabel}
            </span>
          )}

          <h3 className="pr-20 text-xl font-bold text-white md:text-[22px]">
            {tier.name}
          </h3>

          <p className="mt-3 min-h-[48px] text-[13px] font-medium leading-relaxed text-white/75">
            {tier.description}
          </p>

          <p className="mt-5 font-bricolage text-[28px] font-bold leading-none text-white min-[375px]:text-[30px] md:text-[36px]">
            {tier.price}
            {tier.period && (
              <span className="text-base font-medium text-white/65">
                {tier.period}
              </span>
            )}
          </p>

          <BenefitsDivider />

          <ul className="flex-1 space-y-2.5">
            {tier.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2.5 text-[12px] font-medium leading-snug text-white/90 md:text-[13px]"
              >
                <CiCircleCheck className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#FF7782]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <a
            href={scheduleCallHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-8 inline-flex w-full items-center justify-center rounded-full py-3.5 text-sm font-semibold transition-colors ${
              tier.featured
                ? "bg-[#FF7782] text-[#1B0002] hover:bg-[#ff6875]"
                : "border border-[#FF7782]/70 bg-transparent text-white hover:bg-[#FF7782]/10"
            }`}
          >
            {tier.cta}
          </a>
        </div>
      </article>
    </div>
  );
}

const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="relative w-full overflow-x-clip bg-[#1B0002] py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1100px] px-3 min-[375px]:px-4 sm:px-6">
        <div className="text-center">
          <div className="mb-5 flex justify-center">
            <span className="inline-flex h-[34px] items-center justify-center rounded-full border border-[#FF7782] px-5 text-[10px] font-medium uppercase tracking-wide text-white">
              {pricingIntro.badge}
            </span>
          </div>

          <h2 className="font-bricolage text-[24px] font-extrabold leading-tight text-white min-[375px]:text-[26px] min-[425px]:text-[28px] sm:text-[34px] md:text-[40px]">
            {pricingIntro.titleBefore}{" "}
            <span className="text-[#FF7782]">{pricingIntro.titleHighlight}</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[560px] text-[13px] font-medium text-white/75 md:text-sm">
            {pricingIntro.subtitle}
          </p>
        </div>

        <div className="mt-10 grid items-stretch gap-5 md:mt-12 md:grid-cols-3 md:gap-4 lg:gap-5">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.id} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
