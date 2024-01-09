/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "tr", "de"],
    defaultLocale: "en"
  },
  images: {
    unoptimized: true
  },
  eslint: {
    dirs: ['pages', 'utils']
  },
  env: {

  }
}

module.exports = nextConfig
