import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html lang='vi'>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/vercel.svg"></link>
        <meta name="theme-color" content="#fff" />
      </Head>
      <body className='scrollbar min-vh-100 user-select-none'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}