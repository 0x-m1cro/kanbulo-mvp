"use client";

import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonVariant = "primary" | "ghost";

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant }
>;

export function Button({
  children,
  className,
  variant = "primary",
  ...rest
}: ButtonProps) {
  const base =
    "rounded-full px-5 py-3 text-sm font-semibold transition-all duration-500 ease-[cubic-bezier(0.33,0,0.2,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rose-200 shadow-velvet";
  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-coffee-900 text-rose-50 hover:translate-y-[-1px] hover:shadow-velvet-strong",
    ghost:
      "bg-white/80 text-coffee-900 border border-rose-100 hover:bg-rose-50/80 hover:translate-y-[-1px]",
  };

  const classes = [base, variants[variant], className].filter(Boolean).join(" ");

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
