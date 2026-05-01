'use client'

import { createContext, type ReactNode } from 'react'

interface LayoutContextType {
  navbarWidth: string
  mainAreaPadding: string
}

export const LayoutContext = createContext<LayoutContextType | undefined>(
  undefined
)

export function LayoutProvider({ children }: { children: ReactNode }) {
  const value: LayoutContextType = {
    navbarWidth: 'auto',
    mainAreaPadding: '0',
  }

  return (
    <LayoutContext.Provider value={value}>
      {children}
    </LayoutContext.Provider>
  )
}
