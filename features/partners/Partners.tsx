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
    <div
      className="absolute bottom-1 xl:bottom-3 2xl:bottom-4 3xl:bottom-6 left-0 right-0 z-10 h-[100px] overflow-x-auto overflow-y-hidden
      w-full"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <div className="flex items-center justify-center py-4 px-0 min-w-max">
        {partners.map((p, index) => (
          <Link
            href="/"
            key={p.alt}
            className="flex items-center    flex-shrink-0"
            style={{ marginRight: index < partners.length - 1 ? "30px" : "0" }}
          >
            <Image
              src={p.src}
              alt={p.alt}
              width={82}
              height={35}
              style={{
                maxHeight: "40px",
                maxWidth: "82px",
                height: "auto",
                width: "auto",
              }}
              className="logo-white"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Partners;
