"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"

export function ModeToggle() {
  const [mounted, setMounted] = React.useState(false)
  const [isDark, setIsDark] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    // Vérifier le thème actuel depuis le DOM
    const checkTheme = () => {
      const root = document.documentElement
      const darkMode = root.classList.contains("dark")
      setIsDark(darkMode)
    }
    
    checkTheme()
  }, [])

  const toggleTheme = React.useCallback(() => {
    const root = document.documentElement
    const currentIsDark = root.classList.contains("dark")
    const newIsDark = !currentIsDark
    
    // Forcer l'application du thème
    if (newIsDark) {
      root.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      root.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
    
    // Forcer un re-render pour mettre à jour l'état
    setIsDark(newIsDark)
    
    // Double vérification pour s'assurer que le changement est appliqué
    requestAnimationFrame(() => {
      const verifyDark = root.classList.contains("dark")
      if (verifyDark !== newIsDark) {
        if (newIsDark) {
          root.classList.add("dark")
        } else {
          root.classList.remove("dark")
        }
      }
    })
  }, [])

  if (!mounted) {
    return (
      <div className="w-9 h-9 flex items-center justify-center">
        <div className="w-5 h-5 rounded-full border-2 border-neutral-300 dark:border-neutral-600 animate-pulse" />
      </div>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-900 cursor-pointer active:scale-95"
      aria-label={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
      type="button"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-neutral-100 transition-transform duration-200" />
      ) : (
        <Moon className="h-5 w-5 text-neutral-900 transition-transform duration-200" />
      )}
    </button>
  )
}
