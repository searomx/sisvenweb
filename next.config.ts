import type { NextConfig } from "next";
import { Autoplay } from "swiper/modules";
const withFlowbiteReact = require("flowbite-react/plugin/nextjs");

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    qualities: [25, 50, 75, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',        
      },  
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = 
  // images: {
  //   remotePatterns: [new URL("https://flowbite.com/docs/images/people/")],
  // },

  withFlowbiteReact({
    cacheHandler: require.resolve("./cache-handler.js"),
    cacheMaxMemorySize: 0,
  });

export default nextConfig;
