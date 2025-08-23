import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://dhx0gpexmeekh.cloudfront.net/**")],
  },
  // Optimizacija za bolje performanse
  compiler: {
    // Uklanja console.log u production
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
