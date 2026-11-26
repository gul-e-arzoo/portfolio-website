"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

/** Featured client quotes that rotate every 5 seconds. */
const spotlights = [
  {
    id: "raquel",
    name: "Raquel Alonso",
    role: "CMO & Personal Brand Strategist",
    followers: "11K+ followers",
    img: "/testimonials/C10.jpg",
    label: "In her words",
    quote:
      "What I particularly loved about her work was how well she understood my personal brand and translated it into visuals that felt genuinely me. [...] I’d recommend Gul to execs and leaders looking to design a personal brand that feels authentic to who they are.",
    service: "LinkedIn visual revamp",
  },
  {
    id: "sophie",
    name: "Sophie Frey",
    role: "Career Advisor for Finance Professionals",
    followers: "3.5K+ followers",
    img: "/testimonials/C11.jpg",
    label: "In her words",
    quote:
      "Gul’s approach to visibility on LI is very professional and practical: we had a conversation, and continued through many exchanges offline as the work was being over-delivered. [...] As for results, it has already shown positive performance.",
    service: "LinkedIn profile rebuild",
  },
];

const ROTATE_MS = 5000;

const cardBg = {
  backgroundColor: "rgba(67, 18, 22, 0.55)",
  backgroundImage:
    "radial-gradient(ellipse 80% 70% at 0% 0%, rgba(255,119,130,0.14), transparent 60%)",
};

const ClientSpotlight = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % spotlights.length),
      ROTATE_MS
    );
    return () => window.clearInterval(id);
  }, [paused]);

  const s = spotlights[index];

  return (
    <div
      className="mt-6 md:mt-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        key={s.id}
        className="client-spotlight grid grid-cols-1 gap-3 md:grid-cols-[minmax(0,320px)_1fr] md:gap-4"
      >
        <div
          className="flex flex-col items-center justify-center rounded-2xl border border-[#FF7782]/25 px-6 py-8 text-center"
          style={cardBg}
        >
          <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-[#FF7782]/70">
            <Image src={s.img} alt={s.name} fill sizes="96px" className="object-cover" />
          </div>
          <p className="mt-4 text-xl font-bold text-white">{s.name}</p>
          <p className="mt-1 text-sm text-white/60">{s.role}</p>
          <span className="mt-4 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/80">
            {s.followers}
          </span>
        </div>

        <div
          className="flex flex-col justify-center rounded-2xl border border-white/10 px-6 py-8 md:px-10"
          style={cardBg}
        >
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#FF7782]">
            <span className="h-0.5 w-4 rounded-full bg-[#FF7782]" />
            {s.label}
          </p>
          <blockquote className="mt-4 text-[17px] font-medium leading-relaxed text-white/90 md:text-[22px]">
            “{s.quote}”
          </blockquote>
          <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45">
            {s.service}
          </p>
        </div>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {spotlights.map((item, i) => (
          <button
            key={item.id}
            type="button"
            aria-label={`Show ${item.name}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-[#FF7782]" : "w-1.5 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientSpotlight;
