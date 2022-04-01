const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})
const withPWA = require('next-pwa')
const nextConfig = {
  reactStrictMode: false,
  trailingSlash: false,
  eslint: {
    dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
    // ignoreDuringBuilds: true,
  },
  httpAgentOptions: {
    keepAlive: false,
  },
  distDir: 'build',
  devIndicators: {
    buildActivityPosition: 'bottom-right',
    buildActivity: true,
  },
  compiler: {
    removeConsole: false,
    // removeConsole: {
    //   exclude: ['error'],
    // },
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home',
      }
    ]
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/home',
  //       destination: '/', // Matched parameters can be used in the destination
  //       permanent: true,
  //     },
  //   ]
  // },
  reactStrictMode: true,
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'google-font',
          expiration: {
            maxEntries: 4,
            maxAgeSeconds: 7 * 24 * 60 * 60 // 7 days
          }
        }
      },
      {
        urlPattern: /.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'static-font-assets',
          expiration: {
            maxEntries: 4,
            maxAgeSeconds: 7 * 24 * 60 * 60 // 7 days
          }
        }
      },
      {
        urlPattern: /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'static-image-assets',
          expiration: {
            maxEntries: 4,
            maxAgeSeconds: 7 * 24 * 60 * 60 // 7 days
          }
        }
      },
      {
        urlPattern: /\.(?:js)$/i,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'static-js-assets',
          expiration: {
            maxEntries: 4,
            maxAgeSeconds: 7 * 24 * 60 * 60 // 7 days
          }
        }
      },
      {
        urlPattern: /\.(?:css|less)$/i,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'static-style-assets',
          expiration: {
            maxEntries: 4,
            maxAgeSeconds: 7 * 24 * 60 * 60 // 7 days
          }
        }
      },
      {
        urlPattern: /\.(?:json|xml|csv)$/i,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'static-data',
          expiration: {
            maxEntries: 4,
            maxAgeSeconds: 7 * 24 * 60 * 60 // 7 days
          }
        }
      },
      {
        urlPattern: /\/api\/.*$/i,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'apis',
          expiration: {
            maxEntries: 4,
            maxAgeSeconds: 7 * 24 * 60 * 60 // 7 days
          }
        }
      },
      {
        urlPattern: /.*/i,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'other',
          expiration: {
            maxEntries: 4,
            maxAgeSeconds: 7 * 24 * 60 * 60 // 7 days
          }
        }
      },
    ]
  },
}

module.exports = withBundleAnalyzer(withPWA(nextConfig))
