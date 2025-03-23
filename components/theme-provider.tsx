"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ReactNode } from "react"

// Define the props type manually
type ThemeProviderProps = {
  children: ReactNode
  attribute?: string
  defaultTheme?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
  forcedTheme?: string
  storageKey?: string
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

