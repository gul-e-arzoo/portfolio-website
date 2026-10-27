"use client";
import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Card = React.forwardRef(
  ({ className, children, hoverEffect = true, ...props }, ref) => {
    const baseStyles =
      "bg-[#6B3237] overflow-hidden rounded-2xl md:rounded-3xl border border-[#FF7782] transition-all duration-300";
    const hoverStyles = hoverEffect
      ? " hover:shadow-xl hover:-translate-y-1 cursor-pointer"
      : "";

    return (
      <div
        ref={ref}
        className={cn(baseStyles, hoverStyles, className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";

export default Card;
