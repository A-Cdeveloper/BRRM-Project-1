"use client";
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import FontAwesomeIcon from "../ui/FontAwesomeIcon";
import { useCompany } from "@/hooks/useCompany";

const HeaderCompanyData = () => {
  const { data: autohouse, isLoading } = useCompany();
  return (
    <div
      className="text-right text-sm font-light space-y-[3px] w-full sm:w-auto my-0"
      role="complementary"
      aria-label="Company contact information"
    >
      <div className="space-x-[8px]">
        <span>
          {isLoading ? (
            <span
              className="inline-block w-32 h-[7px] bg-gray-600/70 animate-pulse rounded"
              aria-hidden="true"
            />
          ) : (
            `${autohouse?.address}, ${autohouse?.city}`
          )}
        </span>
        <span className="inline-block">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            classname="!text-[13px] hover:text-primary"
            aria-hidden="true"
          />
        </span>
      </div>
      <div className="space-x-[8px]">
        <span>
          {isLoading ? (
            <span
              className="inline-block w-24 h-[7px] bg-gray-600/70 animate-pulse rounded"
              aria-hidden="true"
            />
          ) : (
            <Link href={`tel:${autohouse?.phone || "+381 69 123 456"}`}>
              {autohouse?.phone || "+381 69 123 456"}
            </Link>
          )}
        </span>
        <span className="inline-block">
          <FontAwesomeIcon
            icon={faPhone}
            classname="!text-[12px] hover:text-primary"
            aria-hidden="true"
          />
        </span>
      </div>
    </div>
  );
};

export default HeaderCompanyData;
