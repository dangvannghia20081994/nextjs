import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html>
      <Head>
        <link href="/fontawesome/css/all.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}