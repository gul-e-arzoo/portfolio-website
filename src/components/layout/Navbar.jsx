"use client";

import React, { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { navLinks, scheduleCallHref } from "@/constants";

function subscribeToHash(onStoreChange) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("hashchange", onStoreChange);
  return () => window.removeEventListener("hashchange", onStoreChange);
}

function getHashSnapshot() {
  return typeof window !== "undefined" ? window.location.hash : "";
}

function notifyHashChange() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  }
}

function getActiveNavLabel(pathname, hash) {
  if (pathname === "/") return "Home";
  if (pathname === "/brand") {
    const id = hash.replace(/^#/, "");
    const match = navLinks.find((l) => l.id === id);
    return match?.label ?? "Services";
  }
  return "Home";
}

const CHAT_AVATAR = {
  sm: { box: "size-9", px: 36, badge: "size-[18px]", icon: 12 },
  md: { box: "size-10 xl:size-11", px: 44, badge: "size-5 xl:size-[22px]", icon: 14 },
  lg: { box: "size-11", px: 44, badge: "size-5", icon: 14 },
};

function ChatAvatar({ size = "md" }) {
  const cfg = CHAT_AVATAR[size] ?? CHAT_AVATAR.md;

  return (
    <span className={`relative inline-flex shrink-0 ${cfg.box}`}>
      <Image
        src="/logo.svg"
        width={cfg.px}
        height={cfg.px}
        className={`${cfg.box} rounded-full border-2 border-white/90 object-cover object-center shadow-[0_2px_8px_rgba(0,0,0,0.12)]`}
        alt="Gul e Arzoo"
      />
      <span
        className={`absolute -bottom-0.5 -right-0.5 flex ${cfg.badge} items-center justify-center rounded-full border-2 border-[#FF7782] bg-white p-0.5 shadow-sm`}
      >
        <Image
          src="/walogo.svg"
          width={cfg.icon}
          height={cfg.icon}
          className="size-full object-contain"
          alt=""
        />
      </span>
    </span>
  );
}

const chatPillClass =
  "inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-[#FF7782] py-1.5 pl-1.5 pr-5 font-semibold text-[#1B0002] shadow-[0_7px_22px_rgba(255,119,130,0.22)] transition-all duration-200 hover:bg-[#ff6875] hover:shadow-[0_10px_28px_rgba(255,119,130,0.28)]";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const hash = useSyncExternalStore(
    subscribeToHash,
    getHashSnapshot,
    () => "",
  );

  const active = useMemo(
    () => getActiveNavLabel(pathname, hash),
    [pathname, hash],
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (link) => {
    setMenuOpen(false);

    if (link.href === "/") {
      if (pathname === "/") {
        document.getElementById("hero")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        router.push("/");
      }
      return;
    }

    if (pathname === link.href) {
      document.getElementById(link.id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.history.replaceState(null, "", `${link.href}#${link.id}`);
      notifyHashChange();
      return;
    }

    router.push(`${link.href}#${link.id}`);
  };

  return (
    <nav
      className={`fixed left-0 top-0 z-[100] w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/10 bg-[#170002]/90 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl"
          : "bg-transparent py-4"
      }`}
    >
      {/* Main Navbar */}
      <div className="relative mx-auto flex w-full max-w-[1440px] items-center px-4 sm:px-6 lg:px-8">
        {/* =========================================
            LEFT - LOGO / PROFILE
        ========================================== */}
        <Link
          href="/"
          className="z-10 flex min-w-0 shrink-0 items-center gap-3"
        >
          <div className="relative shrink-0">
            <Image
              src="/logo.svg"
              width={48}
              height={48}
              className="size-11 rounded-full border-2 border-[#FF7782] object-cover md:size-12"
              alt="Gul e Arzoo"
              priority
            />
          </div>

          <div className="hidden min-w-0 leading-tight sm:block">
            <h1 className="whitespace-nowrap text-base font-bold text-white md:text-lg">
              Gul e Arzoo
            </h1>

            <p className="mt-0.5 whitespace-nowrap text-xs text-white/65 md:text-[13px]">
              Visibility & Content Designer
            </p>
          </div>
        </Link>

        {/* =========================================
            CENTER - DESKTOP NAVIGATION
        ========================================== */}
        <ul className="absolute left-1/2 z-20 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-[#5B252A] bg-[#29070A] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_8px_30px_rgba(0,0,0,0.25)] lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => handleNavClick(link)}
                className={`cursor-pointer whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 xl:px-5 ${
                  active === link.label
                    ? "bg-[#FF7782] text-[#1B0002] shadow-[0_4px_12px_rgba(255,119,130,0.18)]"
                    : "text-white/90 hover:bg-[#FF7782]/15 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right: Chat (all screens) + menu toggle (mobile/tablet only) */}
        <div className="z-10 ml-auto flex shrink-0 items-center gap-2 sm:gap-2.5">
          {/* Mobile & tablet — compact chat pill */}
          <a
            href={scheduleCallHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`${chatPillClass} pr-3 sm:pr-4 lg:hidden`}
          >
            <ChatAvatar size="sm" />
            <span className="whitespace-nowrap text-[11px] leading-tight sm:text-[13px]">
              <span className="sm:hidden">Chat</span>
              <span className="hidden sm:inline">Chat with Gul e Arzoo</span>
            </span>
          </a>

          {/* Desktop — full chat pill */}
          <a
            href={scheduleCallHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`${chatPillClass} hidden hover:-translate-y-px lg:inline-flex xl:pr-6`}
          >
            <ChatAvatar size="md" />
            <span className="whitespace-nowrap text-[13px] leading-tight xl:text-sm">
              Chat with Gul e Arzoo
            </span>
          </a>

          {/* ☰ opens Services / Pricing / etc. on small screens (center nav is hidden) */}
          <button
            type="button"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#5B252A] bg-[#29070A] text-xl text-white transition-all duration-200 hover:bg-[#3A0B0F] lg:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Open site menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* =========================================
          MOBILE NAVIGATION MENU
      ========================================== */}
      {menuOpen && (
        <div className="absolute left-0 top-full z-50 w-full border-t border-white/10 bg-[#170002]/98 shadow-[0_20px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl lg:hidden">
          <div className="mx-auto max-w-[600px] px-4">
            <ul className="flex flex-col gap-2 py-5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link)}
                    className={`w-full rounded-xl px-4 py-3.5 text-center text-base font-medium transition-all duration-200 ${
                      active === link.label
                        ? "bg-[#FF7782] text-[#1B0002]"
                        : "text-white hover:bg-[#FF7782]/15"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}

              {/* Mobile Chat Button */}
              <li className="pt-3">
                <a
                  href={scheduleCallHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${chatPillClass} w-full justify-center px-4 py-2.5`}
                >
                  <ChatAvatar size="lg" />
                  <span>Chat with Gul e Arzoo</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;