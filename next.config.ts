import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'content.itext.kz',
        // protocol: 'http',
        // hostname: '127.0.0.1',
        // port: '1337',
        // pathname: '/uploads/**/*',
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '50mb',
    },
  },
};

export default nextConfig;
