import ThemeProviderNext from '@/components/theme-provider';
import { MainContainer } from '@/components/app-container';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import '../styles/globals.css';

export const metadata = {
  title: 'Everton Andrade - Website',
  description: 'Welcome to a my personal website',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <div>
          <ThemeProviderNext>
            <Navigation />
            <MainContainer>{children}</MainContainer>
            <Footer />
          </ThemeProviderNext>
        </div>
      </body>
    </html>
  );
}
