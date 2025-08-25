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
  // Security headers za zaštitu od napada
  async headers() {
    return [
      {
        source: "/(.*)", // Sve rute
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY", // Sprečava clickjacking napade
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff", // Sprečava MIME type sniffing
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block", // Aktivira browser XSS zaštitu
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin", // Kontroliše referrer informacije
          },
        ],
      },
    ];
  },
};

export default nextConfig;
