/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
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
  }
}

module.exports = nextConfig
