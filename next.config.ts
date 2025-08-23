import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://dhx0gpexmeekh.cloudfront.net/**")],
  },
  experimental: {
    // Optimizacija FontAwesome paketa - učitava samo ikone koje koristite
    optimizePackageImports: [
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/free-brands-svg-icons",
      "@fortawesome/react-fontawesome",
    ],
  },
  // Uključuje SWC minifier za brže build-ove
  swcMinify: true,
  // Optimizacija za bolje performanse
  compiler: {
    // Uklanja console.log u production
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
