/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        // Disable Image Optimization for export mode
        unoptimized: true,
    },
}

module.exports = nextConfig
