module.exports = {
  // plugins: {
  //   tailwindcss: {},
  //   autoprefixer: {},
  //   ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  // }
  plugins: [
    'tailwindcss',
    [
      "@fullhuman/postcss-purgecss",
      process.env.NODE_ENV === "production"
        ? {
          content: [
            "./pages/**/*.{js,jsx,ts,tsx}",
            "./components/**/*.{js,jsx,ts,tsx}",
          ],
          defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        }
        : false,
    ],
  ],
}
