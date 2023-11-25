/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  eslint: {
    dirs: ['pages', 'utils'],
  },
}

module.exports = nextConfig
