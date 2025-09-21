import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  experimental: {
    turbo: {
      rules: {
        '*.tsx': {
          loaders: ['swc-loader'],
          as: '*.js',
        },
      },
    },
  },
};

export default nextConfig;
