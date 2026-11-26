"use client";
import React from "react";
import Image from "next/image";
import { FaLinkedin, FaWhatsapp, FaBehance } from "react-icons/fa";
import Button from "@/components/ui/Button";
const Mastermind = () => {
  return (
    <section id="about" className="relative bg-[#1B0002]">
      <Image
        src="/mastermind-bottom-blurr.svg"
        alt="bg effect"
        width={1920}
        height={184}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-auto w-full"
        style={{ width: "100%", height: "auto" }}
      />
      <div className="mx-auto grid w-full max-w-360 grid-cols-1 items-center gap-8 px-4 py-12 min-[375px]:px-6 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-10">
        <div className="order-2 w-full lg:order-1">
          <h1 className="text-2xl font-bold text-white min-[375px]:text-3xl sm:text-4xl md:text-5xl">
            Meet the{" "}
            <span className="text-[#FF7782] italic">mastermind</span>
          </h1>

          <p className="py-4 text-base text-white min-[375px]:py-5 min-[375px]:text-lg sm:text-xl">
            Hi, I&apos;m Gul e Arzoo, a LinkedIn Profile Strategist. I help
            fractional CMOs, CFOs, CTOs and COOs turn their LinkedIn into a
            steady source of founder conversations.
          </p>

          <p className="py-4 text-base text-white min-[375px]:py-5 min-[375px]:text-lg sm:text-xl">
            I&apos;ve written 800+ posts and worked with 25+ LinkedIn clients.
            One CTO&apos;s profile I managed reached 2 million impressions and
            brought his agency a new retainer client. I built my own business
            the same way: on LinkedIn, one post at a time.
          </p>

          <p className="py-4 text-base text-white min-[375px]:py-5 min-[375px]:text-lg sm:text-xl">
            When I&apos;m not writing or designing, I&apos;m teaching others
            what works, or spending time with my family.
          </p>

          <h3 className="  text-lg md:text-xl xl:text-2xl font-medium text-white mt-8">
            Find Me on:
          </h3>

          <div className="relative z-20 mt-5 flex flex-col gap-2 min-[425px]:flex-row min-[425px]:flex-wrap sm:flex-nowrap sm:gap-3">
            <Button
              href="https://www.linkedin.com/in/gul-executive-branding/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex justify-center items-center gap-2 uppercase rounded-full sm:text-lg text-sm px-4 py-3"
            >
              <FaLinkedin size={20} />
              LinkedIn
            </Button>

            <Button
              href="https://wa.me/923281107720"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex justify-center items-center gap-2 uppercase rounded-full sm:text-lg text-sm px-4 py-3"
            >
              <FaWhatsapp size={20} />
              WhatsApp
            </Button>

            <Button
              href="https://www.behance.net/gulearzoo82542"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex justify-center items-center gap-2 uppercase rounded-full sm:text-lg text-sm px-4 py-3"
            >
              <FaBehance
                size={24}
                className="border border-white p-1 rounded-full"
              />
              Behance
            </Button>
          </div>
        </div>

        <div className="w-full order-1 lg:order-2 flex justify-center lg:justify-end">
          <Image
            src="/gul.svg"
            alt="Gul e Arzoo - Mastermind"
            width={450}
            height={450}
            priority
            className="h-auto w-full max-w-112.5 object-contain"
            style={{ width: "auto", height: "auto", maxWidth: "100%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Mastermind;
