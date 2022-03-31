// eslint-disable-next-line import/no-anonymous-default-export
export default {
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    site_name: 'SiteName',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
  // canonical: 'https://hahahaha.com',
  titleTemplate: 'Next SEO | %s',
  defaultTitle: 'Next SEO',
  additionalMetaTags: [
    {
      name: 'charset',
      content: 'text/html; charset=utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1,maximum-scale = 5'
    }
  ],
  additionalLinkTags:[
    {
      rel: 'icon',
      href: '/favicon.ico',
    }
  ],
  noindex: true,
  nofollow: true
}