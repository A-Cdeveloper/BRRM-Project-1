"use client";
import { useCompany } from "@/hooks/useCompany";
import { FooterCompanyData, FooterSocial } from "./index";

const Footer = () => {
  const { data: autohouse, isLoading } = useCompany();

  return (
    <footer className="border-t border-border z-10">
      <div className="flex flex-wrap items-center justify-center lg:justify-between  max-w-screen-2xl mx-auto min-h-[55px] text-sm px-3 2xl:px-0 py-2">
        <FooterSocial />
        <FooterCompanyData autohouse={autohouse} isLoading={isLoading} />
        <div
          className="font-light w-full lg:w-auto text-center"
          suppressHydrationWarning
        >
          {isLoading ? (
            <span className="inline-block w-32 h-1 bg-gray-600/70 animate-pulse rounded" />
          ) : (
            `${autohouse?.fullName || "Company"} © All rights reserved.`
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
