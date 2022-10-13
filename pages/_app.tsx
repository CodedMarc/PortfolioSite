import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import Head from 'next/head';

const colors = {
  primary: '#764AF1',
  secondary: '#9772FB',
  darkish: '#7F7C82',
  background: '#f2f2f2',
  red: '#F32424'
}

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="title" content="CodedMarc's Pixelated Portfolio" />
        <meta name="description" content="Software Engineer Portfolio Site created by Marc Doran" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://codedmarc.com/" />
        <meta property="og:title" content="CodedMarc's Portfolio" />
        <meta property="og:description" content="A Pixelated Showcase | Software Engineer" />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/73245838?v=4" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="CodedMarc's Portfolio | Software Engineer" />
        <meta property="twitter:description" content="A Pixelated Showcase of Programming Skills" />
        <meta property="twitter:image" content="https://avatars.githubusercontent.com/u/73245838?v=4" />
      </Head>
      <ChakraProvider theme={theme}>
          <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
