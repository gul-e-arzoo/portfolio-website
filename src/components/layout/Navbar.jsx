"use client";

import React, { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { navLinks, linkedInHref } from "@/constants";
import { FaLinkedinIn } from "react-icons/fa6";

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

function normalizePath(p) {
  return (p || "/").replace(/\/+$/, "") || "/";
}

function getActiveNavLabel(rawPathname, hash) {
  const pathname = normalizePath(rawPathname);
  if (pathname === "/") return hash === "#pricing" ? "Pricing" : "Home";
  if (pathname === "/brand") {
    const id = hash.replace(/^#/, "");
    const match = navLinks.find((l) => l.href === "/brand" && l.id === id);
    return match?.label ?? "Portfolio";
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
        <FaLinkedinIn aria-hidden className="size-full text-[#0A66C2]" />
      </span>
    </span>
  );
}

const chatPillBase =
  "cursor-pointer items-center gap-2 rounded-full bg-[#FF7782] font-semibold text-[#1B0002] shadow-[0_7px_22px_rgba(255,119,130,0.22)] transition-all duration-200 hover:bg-[#ff6875] hover:shadow-[0_10px_28px_rgba(255,119,130,0.28)] min-[375px]:gap-2.5 lg:gap-2.5 lg:py-1.5 lg:pl-1.5 lg:pr-5 lg:hover:-translate-y-px";

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

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (mq.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const handleNavClick = (link) => {
    setMenuOpen(false);

    if (link.href === "/") {
      const target = link.id || "hero";
      if (normalizePath(pathname) === "/") {
        document.getElementById(target)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        router.push(target === "hero" ? "/" : `/#${target}`);
      }
      return;
    }

    if (normalizePath(pathname) === link.href) {
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
      className={`fixed left-0 top-0 z-[100] w-full max-w-[100vw] overflow-x-clip transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/10 bg-[#170002]/90 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl"
          : "bg-transparent py-4"
      }`}
    >
      {/* Main Navbar — equal side columns on md+ keep pill nav centered */}
      <div className="relative mx-auto grid w-full max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-x-2 px-3 min-[375px]:px-4 sm:px-6 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:px-8">
        {/* =========================================
            LEFT - LOGO / PROFILE
        ========================================== */}
        <Link
          href="/"
          className="z-10 col-start-1 row-start-1 flex min-w-0 items-center gap-3 justify-self-start"
        >
          <div className="relative shrink-0">
            <Image
              src="/logo.svg"
              width={48}
              height={48}
              className="size-9 rounded-full border-2 border-[#FF7782] object-cover min-[375px]:size-10 md:size-12"
              alt="Gul e Arzoo"
              priority
            />
          </div>

          <div className="hidden min-w-0 leading-tight lg:block">
            <p className="whitespace-nowrap text-base font-bold text-white xl:text-lg">
              Gul e Arzoo
            </p>

            <p className="mt-0.5 whitespace-nowrap text-xs text-white/65 xl:text-[13px]">
              LinkedIn Profile Strategist
            </p>
          </div>
        </Link>

        {/* =========================================
            CENTER - DESKTOP NAVIGATION
        ========================================== */}
        <ul className="z-20 row-start-1 hidden min-w-0 max-w-full items-center justify-self-center gap-0.5 rounded-full border border-[#5B252A] bg-[#29070A] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_8px_30px_rgba(0,0,0,0.25)] md:col-start-2 md:col-end-3 md:flex md:gap-1 md:p-1.5 lg:gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                type="button"
                onClick={() => handleNavClick(link)}
                className={`cursor-pointer whitespace-nowrap rounded-full px-2.5 py-1.5 text-[11px] font-medium transition-all duration-200 md:px-3 md:py-1.5 md:text-xs lg:px-4 lg:py-2 lg:text-sm xl:px-5 ${
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

        {/* Right: chat + hamburger (phones) */}
        <div className="z-10 col-start-2 row-start-1 flex min-w-0 items-center justify-self-end gap-1.5 min-[375px]:gap-2 sm:gap-2.5 md:col-start-3 md:col-end-4">
          <a
            href={linkedInHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`${chatPillBase} inline-flex min-w-0 max-w-[min(100%,9.5rem)] shrink py-1 pl-1 pr-2.5 min-[425px]:max-w-none min-[425px]:pr-3 md:max-w-none lg:pr-6 xl:pr-6`}
            aria-label="Chat with Gul-e-Arzoo on LinkedIn"
          >
            <ChatAvatar size="sm" />
            <span className="min-w-0 text-[10px] font-semibold leading-tight min-[375px]:text-[11px] lg:text-[13px] lg:whitespace-nowrap xl:text-sm">
              <span className="inline min-[425px]:hidden md:inline lg:hidden">
                Chat
              </span>
              <span className="hidden min-[425px]:inline md:hidden lg:inline lg:whitespace-nowrap">
                Chat with Gul-e-Arzoo
              </span>
            </span>
          </a>

          {/* ☰ — phones only; tablet+ uses center pill nav */}
          <button
            type="button"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#5B252A] bg-[#29070A] text-xl text-white transition-all duration-200 hover:bg-[#3A0B0F] md:hidden"
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
        <div className="absolute left-0 top-full z-50 w-full border-t border-white/10 bg-[#170002]/98 shadow-[0_20px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:hidden">
          <div className="mx-auto max-w-[600px] px-4">
            <ul className="flex flex-col gap-2 py-5">
              {navLinks.map((link) => (
                <li key={link.label}>
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
                  href={linkedInHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${chatPillBase} inline-flex w-full justify-center px-4 py-2.5`}
                >
                  <ChatAvatar size="lg" />
                  <span>Chat with Gul-e-Arzoo</span>
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