import { ThemeProviderProps as NextThemesProviderProps } from 'next-themes'

declare module 'next-themes' {
  export interface ThemeProviderProps extends NextThemesProviderProps {
    children: React.ReactNode;
  }
} 