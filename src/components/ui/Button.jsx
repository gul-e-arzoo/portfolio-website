"use client";
import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Button = React.forwardRef(
  (
    { className, variant = "primary", size = "default", children, ...props },
    ref,
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-4xl font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

    const variants = {
      primary:
        "bg-[#FF7782] text-[#1B0002] hover:bg-[#ff6875] hover:shadow-lg",
      secondary: "bg-[#6B3237] text-white hover:bg-[#FF7782]",
      outline: "border border-[#FF7782] text-white hover:bg-[#FF7782]",
      ghost: "bg-transparent text-white hover:bg-white/10",
    };

    const sizes = {
      default: "px-4 py-2 text-sm sm:px-5 sm:py-3 sm:text-base",
      sm: "px-3 py-1.5 text-xs sm:text-sm",
      lg: "px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg",
      icon: "p-3",
    };

    const Comp = props.href ? "a" : "button";

    return (
      <Comp
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

Button.displayName = "Button";

export default Button;
