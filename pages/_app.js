import Default from '~/layouts/default'
import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'
import { Provider as AppProvider } from 'react-redux'
import store from '~/store'
import '~/styles/globals.scss'

import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())
import SSRProvider from 'react-bootstrap/SSRProvider';
const MyApp = ({ Component, pageProps }) => {
  const Layout = Component.Layout || Default
  return (
    <SSRProvider>
      <AppProvider store={store}>
        <Layout>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </Layout>
      </AppProvider>
    </SSRProvider>
  )
}
export default MyApp