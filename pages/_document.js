import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html lang='vi'>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/vercel.svg"></link>
        <meta name="theme-color" content="#fff" />
        <link href="/fontawesome/css/all.min.css" rel="stylesheet" />
        <link href="/bootstrap/bootstrap.min.css" rel="stylesheet" />
        {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}