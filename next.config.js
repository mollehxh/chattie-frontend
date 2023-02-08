/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'preview.redd.it',
        port: '',
        pathname: '/*',
      },
    ],
  },
};

module.exports = nextConfig;
