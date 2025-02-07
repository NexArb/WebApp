"use client"

import React from 'react'
import { useTheme } from 'next-themes'

export const ModeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="text-white"
    >
      {theme === 'dark' ? '🌞' : '🌙'}
    </button>
  )
} 