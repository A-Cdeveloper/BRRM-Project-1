// components/BgImage.tsx
"use client";

import { getBgImage } from "@/utils/bgImages";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function BgImage({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const segment = pathname.split("/")[1] || "home";
  const bgImage = getBgImage(segment);

  return (
    <div
      className="relative bg-cover bg-center flex flex-col min-h-screen pt-2"
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : undefined}
      role="main"
      aria-label={`${
        segment.charAt(0).toUpperCase() + segment.slice(1)
      } page background`}
    >
      {bgImage && (
        <div
          className="absolute inset-0 bg-black/85 z-0 h-full"
          aria-hidden="true"
        ></div>
      )}

      {children}
    </div>
  );
}
