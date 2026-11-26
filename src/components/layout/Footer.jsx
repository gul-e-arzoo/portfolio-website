import React from "react";
import Image from "next/image";
import {
  FaLinkedinIn,
  FaInstagram,
  FaRedditAlien,
  FaThreads,
} from "react-icons/fa6";
import { socialLinks } from "@/constants/navigation";

const ICONS = {
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  reddit: FaRedditAlien,
  threads: FaThreads,
};

const Footer = () => {
  return (
    <footer className="relative z-[1] w-full">
      <div className="mx-auto max-w-[1280px] px-4 pb-8 pt-14 sm:px-6 md:pt-16 lg:px-8">
        {/* Logo: picture + name, centred */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/logo.svg"
            alt="Gul e Arzoo"
            width={72}
            height={72}
            className="h-16 w-16 rounded-full border-2 border-[#FF7782] object-cover md:h-[72px] md:w-[72px]"
          />
          <p className="mt-4 font-bricolage text-2xl font-bold tracking-tight text-white md:text-3xl">
            Gul e Arzoo
          </p>
          <p className="mt-1 text-xs text-white/55 md:text-sm">
            LinkedIn Profile Strategist
          </p>
        </div>

        <div className="mt-10 h-px w-full bg-[#FF7782]/20 md:mt-12" />

        {/* Bottom row: copyright left, socials right */}
        <div className="mt-6 flex flex-col-reverse items-center gap-5 sm:flex-row sm:justify-between">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} designwithgul.com
          </p>

          <ul className="flex items-center gap-3">
            {socialLinks.map(({ label, href, icon }) => {
              const Icon = ICONS[icon];
              return (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#FF7782]/40 text-white/80 transition-colors duration-200 hover:border-[#FF7782] hover:bg-[#FF7782] hover:text-[#1B0002]"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
