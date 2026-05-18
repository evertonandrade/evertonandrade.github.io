'use client'
import { ThemeProvider } from 'next-themes';

const ThemeProviderNext = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderNext;
