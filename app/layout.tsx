import "./globals.css";

import { BgImage, Footer, Header } from "@/components/layout";
import QueryProvider from "@/components/providers/QueryProvider";
import type { Metadata, Viewport } from "next";
import { Chakra_Petch } from "next/font/google";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Autoseller - Premium Vehicle Dealership",
    template: "%s | Autoseller",
  },
  description:
    "Discover premium vehicles at Autoseller. Browse our extensive inventory of cars, SUVs, and luxury vehicles. Professional service and competitive pricing.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Autoseller",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#4CFFC0",
};

const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={chakra.className}>
      <head>
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Autoseller" />
      </head>
      <body>
        <QueryProvider>
          <BgImage>
            <Header />
            {children}
            <Footer />
          </BgImage>
        </QueryProvider>

        {/* Service Worker Registration */}
        <Script
          id="sw-register"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
