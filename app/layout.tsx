import "./globals.css";

import { BgImage, Footer, Header } from "@/components/layout";
import QueryProvider from "@/components/providers/QueryProvider";
import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";

export const metadata: Metadata = {
  title: {
    default: "Autoseller - Premium Vehicle Dealership",
    template: "%s | Autoseller",
  },
  description:
    "Discover premium vehicles at Autoseller. Browse our extensive inventory of cars, SUVs, and luxury vehicles. Professional service and competitive pricing.",
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
      <body>
        <QueryProvider>
          <BgImage>
            <Header />
            {children}
            <Footer />
          </BgImage>
        </QueryProvider>
      </body>
    </html>
  );
}
