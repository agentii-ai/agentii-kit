'use client'

import React, { useEffect, useState } from 'react'

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: 'light' | 'dark'
  storageKey?: string
}

export function ThemeProvider({
  children,
  defaultTheme = 'light', // Light mode is now the default
  storageKey = 'theme-preference',
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>(defaultTheme)
  const [mounted, setMounted] = useState(false)

  // Load theme from localStorage on mount
  useEffect(() => {
    setMounted(true)
    const storedTheme = localStorage.getItem(storageKey) as 'light' | 'dark' | null
    if (storedTheme) {
      setTheme(storedTheme)
      applyTheme(storedTheme)
    } else {
      // Use light mode as default (not system preference)
      setTheme('light')
      applyTheme('light')
    }
  }, [storageKey])

  const applyTheme = (selectedTheme: 'light' | 'dark') => {
    const html = document.documentElement
    if (selectedTheme === 'dark') {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem(storageKey, newTheme)
    applyTheme(newTheme)
  }

  // Prevent flash of wrong theme
  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

interface ThemeContextType {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined)

export function useTheme() {
  const context = React.useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
