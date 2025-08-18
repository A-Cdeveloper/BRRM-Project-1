import "./globals.css";

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
        <div
          className="relative bg-cover bg-center flex flex-col min-h-screen pt-2 -z-20"
          style={{ backgroundImage: "url('/images/home-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/80 -z-10 h-screen"></div>

          <Header />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
