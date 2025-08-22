import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://dhx0gpexmeekh.cloudfront.net/**")],
  },
};

export default nextConfig;
