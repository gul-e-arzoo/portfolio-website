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
      <div className="max-w-360 px-8 py-16 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="w-full order-2 lg:order-1">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Meet the{" "}
            <span className="text-[#FF7782] italic">mastermind</span>
          </h1>

          <p className="text-lg sm:text-xl text-white py-5">
            Hi, I&apos;m Gul e Arzoo. I&apos;m a LinkedIn Visibility Designer
            and personal branding specialist with 3+ years of experience helping
            career coaches show up powerfully on LinkedIn.
          </p>

          <p className="text-lg sm:text-xl text-white py-5">
            I&apos;ve generated millions of impressions for my clients, helped
            25+ coaches and founders build brands that actually attract
            opportunities — and I do it all through intentional design, sharp
            strategy, and content that converts.
          </p>

          <p className="text-lg sm:text-xl text-white py-5">
            When I&apos;m not designing, you&apos;ll find me exploring new
            ideas, mentoring others, or spending quality time with my family.
          </p>

          <h3 className="  text-lg md:text-xl xl:text-2xl font-medium text-white mt-8">
            Find Me on:
          </h3>

          <div className="relative flex flex-wrap sm:flex-nowrap gap-3 mt-5 z-20">
            <Button
              href="https://www.linkedin.com/in/visibilitydesignerforcoaches/"
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
