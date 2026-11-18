"use client";
import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { MdEmail } from "react-icons/md";

const SIZES = {
  col1: { w: 365, h: 270 },
  col2: { w: 216, h: 276 },
  col3: { w: 315, h: 360 },
};

const Tile = ({ src, colKey }) => {
  const { w, h } = SIZES[colKey];
  return (
    <div className="overflow-hidden bg-[#0b0b0b] w-full rounded-xl">
      {/* eslint-disable-next-line @next/next/no-img-element -- decorative marquee */}
      <img
        src={src}
        alt=""
        width={w}
        height={h}
        className="block h-auto w-full select-none"
        draggable={false}
      />
    </div>
  );
};

const LoopColumn = ({ items, colKey, direction = "down", duration = 30 }) => {
  const animClass =
    direction === "down" ? "animate-marquee-down" : "animate-marquee-up";
  const { w } = SIZES[colKey];

  return (
    <div
      className="relative overflow-hidden"
      style={{ flex: w, minWidth: `${w}px` }}
    >
      <div className="h-[200vh] overflow-hidden w-full">
        <div
          className={`${animClass} flex flex-col gap-4 will-change-transform w-full`}
          style={{ animationDuration: `${duration}s` }}
        >
          {[...items, ...items, ...items].map((src, idx) => (
            <Tile key={`${src}-${idx}`} src={src} colKey={colKey} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const col1 = ["/hero/c1.png", "/hero/c2.png", "/hero/c3.jpg", "/hero/c4.jpg"];
  const col2 = ["/hero/c5.jpg", "/hero/c6.png", "/hero/c7.png", "/hero/c8.jpg"];
  const col3 = ["/hero/c9.png", "/hero/c10.png", "/hero/c11.jpg"];

  return (
    <footer className="w-full relative bg-[#1B0002] overflow-hidden min-h-125">
      <div className="absolute top-[-40%] right-[-10%] w-[60%] lg:w-[55%] h-[180%] -rotate-12 hidden lg:flex gap-4 pointer-events-none select-none z-0 opacity-90">
        <LoopColumn items={col1} colKey="col1" direction="down" duration={30} />
        <LoopColumn items={col2} colKey="col2" direction="up" duration={35} />
        <LoopColumn items={col3} colKey="col3" direction="down" duration={28} />
      </div>

      <div className="absolute inset-y-0 right-0 w-[70%] hidden lg:block z-0 pointer-events-none">
        <div className="absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-[#1B0002] to-transparent z-10" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-360 flex-col justify-between border-t border-[#FF7782]/5 px-4 pb-6 pt-10 min-[375px]:px-6 min-[375px]:pt-12 md:px-12 md:pt-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 ">
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-[#FF7782] rounded-full blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
              <Image
                src="/logo.svg"
                width={80}
                height={80}
                className="relative h-16 w-16 object-contain md:h-20 md:w-20"
                style={{ width: "auto", height: "auto" }}
                alt="logo"
              />
            </div>

            <div className="leading-tight">
              <h1 className="font-bold text-xl md:text-3xl text-white tracking-tight">
                Gul e Arzoo
              </h1>
              <p className="text-zinc-400 text-xs md:text-sm mt-0.5">
                LinkedIn Profile Strategist
              </p>
            </div>
          </div>
        </div>

        {/* Middle Section: Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20 mt-12 mb-16">
          <div className="flex-1 max-w-xl">
            <h2 className="mb-4 text-2xl font-bold leading-tight text-white min-[375px]:text-3xl md:text-4xl lg:text-5xl">
              Get 10 free Infographic templates for LinkedIn
            </h2>

            <p className="text-zinc-400 mb-6 text-sm md:text-base max-w-md">
              Get 10 customizable infographic templates available in Figma when
              you subscribe to my newsletter.
            </p>

            <form className="flex flex-col sm:flex-row items-stretch sm:items-center bg-zinc-900/50 backdrop-blur-md rounded-xl overflow-hidden border border-zinc-800 focus-within:border-[#FF7782] transition-colors duration-300 w-full max-w-md">
              <input
                type="email"
                required
                placeholder="Enter Email Address"
                className="flex-1 px-5 py-4 bg-transparent text-white placeholder-zinc-500 outline-none text-sm"
              />

              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-[#FF7782] px-5 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#ff5f6c] sm:whitespace-nowrap"
              >
                Get templates
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-6 border-t border-[#FF7782]/10 text-left text-sm text-zinc-300 max-w-md">
          © {new Date().getFullYear()} designwithgul. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
