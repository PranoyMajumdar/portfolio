"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes"
import { useIsMounted } from "@/hooks/useIsMounted";
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const isMounted = useIsMounted();
  if (!isMounted) return null;
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
} 