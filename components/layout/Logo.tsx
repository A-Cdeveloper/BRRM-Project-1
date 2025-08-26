"use client";

import Image from "next/image";
import Link from "next/link";
import { useCompany } from "@/hooks/useCompany";

const Logo = () => {
  const { data: autohouse, isLoading } = useCompany();

  // Use company logo if available, otherwise fallback to default
  const logoSrc = autohouse?.logo?.url || "/images/logo.png";
  const logoAlt = autohouse?.shortName || "Logo";

  return (
    <Link
      href="/"
      className="flex items-center space-x-2"
      aria-label="Go to homepage"
    >
      <Image
        src={logoSrc}
        alt={logoAlt}
        width={100}
        height={54}
        priority={true}
        className="transition-opacity duration-200"
        style={{
          opacity: isLoading ? 0.6 : 1,
        }}
        aria-label={`${logoAlt} logo`}
      />
    </Link>
  );
};

export default Logo;
