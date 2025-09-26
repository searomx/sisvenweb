import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    qualities: [25, 50, 75, 100],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = {
  cacheHandler: require.resolve('./cache-handler.js'),
  cacheMaxMemorySize: 0, // disable default in-memory caching
}

export default nextConfig;
