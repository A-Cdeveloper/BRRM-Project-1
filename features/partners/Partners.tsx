"use client";

import Image from "next/image";
import Link from "next/link";
import { PARTNERS } from "@/constants/partners";

const Partners = ({ limit }: { limit?: number }) => {
  const displayedPartners = limit ? PARTNERS.slice(0, limit) : PARTNERS;

  return (
    <div className="flex items-center  py-1 px-0 min-w-max">
      {displayedPartners.map((p) => (
        <Link
          href={`/vehicles/?make=${p.slug}`}
          key={p.alt}
          className="flex items-center flex-shrink-0 mr-3 last:mr-0"
        >
          <Image
            src={p.src}
            alt={p.alt}
            width={82}
            height={40}
            loading="lazy"
            className="logo-white object-cover w-full h-full max-w-[82px] max-h-[40px]"
          />
        </Link>
      ))}
    </div>
  );
};

export default Partners;
