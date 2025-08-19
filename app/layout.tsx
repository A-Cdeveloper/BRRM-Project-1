import "./globals.css";

import BgImage from "@/components/layout/BgImage";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";

export const metadata: Metadata = {
  title: "Auto Demo 1",
  description: "Auto Demo 1",
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
        <BgImage>
          <Header />
          {children}
          <Footer />
        </BgImage>
      </body>
    </html>
  );
}
