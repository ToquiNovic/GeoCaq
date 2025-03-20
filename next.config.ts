/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unpkg.com',
        port: '',
        pathname: '/leaflet@1.9.4/dist/images/**',
      },
    ],
  },
}

module.exports = nextConfig