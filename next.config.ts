import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com"
      },
      {
        protocol: "https",
        hostname: "pokeapi.co"
      }
    ],
  },
};

export default nextConfig;
