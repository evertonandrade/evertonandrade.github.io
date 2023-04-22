'use client'
import { ThemeProvider } from 'next-themes';

const ThemeProviderNext = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default ThemeProviderNext;
