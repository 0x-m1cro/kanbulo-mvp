export const tenderTheme = {
  palette: {
    background: "bg-shell-50",
    surface: "bg-white/70",
    accentRose: "from-rose-50 via-shell-50 to-amber-50",
    ink: "text-coffee-900",
  },
  typography: {
    display: "var(--font-display)",
    body: "var(--font-body)",
  },
  shadows: {
    soft: "shadow-velvet",
  },
  motion: {
    gentle: "duration-500 ease-[cubic-bezier(0.33,0,0.2,1)]",
    slow: "duration-700 ease-out",
  },
};

export type TenderTheme = typeof tenderTheme;
