import Default from 'layouts/default'
import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'
import { Provider as AppProvider } from 'react-redux'
import store from 'store/index'
import 'styles/globals.scss'
export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || Default
  return (
    <AppProvider store={store}>
      <Layout>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  )
}