import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import MainContainer from '../components/app-container';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <Head>
          <title>Everton Andrade | Personal Website</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navigation />
        <MainContainer>
          <Component {...pageProps} />
        </MainContainer>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
