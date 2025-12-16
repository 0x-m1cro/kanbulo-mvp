"use client";

import { createContext, useContext } from "react";
import { tenderTheme, type TenderTheme } from "@/lib/theme";

const ThemeContext = createContext<TenderTheme>(tenderTheme);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContext.Provider value={tenderTheme}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
