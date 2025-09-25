import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    optimizeCss: true,
  },
  // Enable static exports for deployment
  // output: 'export',
  // trailingSlash: true,
};

export default nextConfig;