"use client";

import Image from "next/image";
import Link from "next/link";

const Partners = () => {
  const partners = [
    { src: "/images/maserati.png", alt: "Maserati" },
    { src: "/images/ford.png", alt: "Ford" },
    { src: "/images/bmw.png", alt: "BMW" },
    { src: "/images/audi.png", alt: "Audi" },
    { src: "/images/kia-logo.png", alt: "Kia" },
  ];

  return (
    <div className="absolute bottom-1 xl:bottom-3 2xl:bottom-4 3xl:bottom-6 left-0 right-0 z-10 h-[100px] overflow-x-auto overflow-y-hidden scrollbar-hide">
      <div className="flex items-center justify-center py-4 px-0 min-w-max">
        {partners.map((p) => (
          <Link
            href="/"
            key={p.alt}
            className="flex items-center flex-shrink-0 mr-3 last:mr-0"
          >
            <Image
              src={p.src}
              alt={p.alt}
              width={82}
              height={40}
              className="logo-white object-cover w-full h-full max-w-[82px] max-h-[40px]"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Partners;
