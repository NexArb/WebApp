/** @type {import('next').NextConfig} */
const nextConfig = {
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
