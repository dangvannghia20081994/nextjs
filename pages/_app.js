import Default from 'layouts/default'
import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'
import { Provider } from 'react-redux'
import store from 'store/index'
export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || Default
  return (
    <Provider store={store}>
      <Layout>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}