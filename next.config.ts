import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  compiler: {
    // Remove console.logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // experimental: {
  //   // Optimize for modern browsers
  //   optimizeCss: true,
  // },
  // Reduce bundle size by excluding unnecessary polyfills
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Optimize for modern browsers
      config.resolve.alias = {
        ...config.resolve.alias,
        'core-js/modules': false,
      };
    }
    return config;
  },
};

export default nextConfig;
