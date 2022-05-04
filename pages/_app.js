import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'
import { Provider as AppProvider } from 'react-redux'
import { useEffect } from 'react'
import { MathJaxContext } from "better-react-mathjax";
import SSRProvider from 'react-bootstrap/SSRProvider';


import Default from '~/layouts/default'
import { getData } from '~/utils/request'
import store, { setUser, setClasses, setSubjects } from '~/store'
import { accessToken } from '~/common/hook/useToken'
import '~/styles/globals.scss'

import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const MyApp = ({ Component, pageProps, user, classes, subjects, message }) => {
  useEffect(() => {
    if (user) store.dispatch(setUser(user))
    if (classes) store.dispatch(setClasses(classes))
    if (subjects) store.dispatch(setSubjects(subjects))
  }, [])
  const Layout = Component.Layout || Default

  const config = {
    options: {
      enableMenu: false,
    }
  };
  return (
    <MathJaxContext config={config}>
      <SSRProvider>
        <AppProvider store={store}>
          <Layout>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
          </Layout>
        </AppProvider>
      </SSRProvider>
    </MathJaxContext>
  )
}
MyApp.getInitialProps = async ({ ctx: { req } }) => {
  let user = null
  let classes = null
  let subjects = null
  if (req) {
    const cookies = req.cookies
    if (cookies[accessToken]) {
      const { data } = await getData('profile/user', {}, cookies[accessToken])
      user = data
    }
    const { data: classes_ } = await getData('category/class')
    classes = classes_
    const { data: subjects_ } = await getData('category/subject')
    subjects = subjects_
  }
  return {
    user,
    classes,
    subjects
  }
}
export default MyApp