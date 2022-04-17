import Default from 'layouts/default'
import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'
import { Provider as AppProvider } from 'react-redux'
import store from 'store/index'
import 'styles/globals.scss'

import 'react-loading-skeleton/dist/skeleton.css'

import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())


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