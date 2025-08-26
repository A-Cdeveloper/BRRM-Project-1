import { AutoHouse } from "@/types";
import Link from "next/link";

const FooterCompanyData = ({
  autohouse,
  isLoading,
}: {
  autohouse?: AutoHouse;
  isLoading: boolean;
}) => {
  return (
    <div
      className="text-primary space-x-2 font-medium my-[5px]"
      role="complementary"
      aria-label="Company contact links"
    >
      {isLoading ? (
        <>
          <span
            className="inline-block w-20 h-1 bg-gray-600/70 animate-pulse rounded"
            aria-hidden="true"
          />
          <span
            className="inline-block w-24 h-1 bg-gray-600/70 animate-pulse rounded"
            aria-hidden="true"
          />
        </>
      ) : (
        <>
          <Link
            href={`mailto:${autohouse?.email || ""}`}
            aria-label={`Send email to ${autohouse?.email || "company"}`}
          >
            {autohouse?.email || "Email"}
          </Link>
          <Link
            href={autohouse?.website || "#"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit company website: ${
              autohouse?.website || "website"
            }`}
          >
            {autohouse?.website || "Website"}
          </Link>
        </>
      )}
    </div>
  );
};

export default FooterCompanyData;
