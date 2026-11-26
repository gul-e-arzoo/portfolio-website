"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Scroll to `#section` after navigating to `/brand`. */
export default function BrandHashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/brand" && pathname !== "/") return;

    const scrollToHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;
      document.getElementById(hash)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    const t = window.setTimeout(scrollToHash, 50);
    window.addEventListener("hashchange", scrollToHash);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, [pathname]);

  return null;
}
