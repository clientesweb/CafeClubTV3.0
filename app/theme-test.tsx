"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export default function ThemeTest() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed bottom-20 right-4 z-50 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
      <p className="mb-2">Current theme: {theme}</p>
      <div className="flex gap-2">
        <Button onClick={() => setTheme("light")}>Light</Button>
        <Button onClick={() => setTheme("dark")}>Dark</Button>
        <Button onClick={() => setTheme("system")}>System</Button>
      </div>
    </div>
  )
}

