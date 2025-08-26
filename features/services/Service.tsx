import { ServiceWithIcon } from "@/types";
import Image from "next/image";

const Service = ({ headline, info, icon }: Omit<ServiceWithIcon, "id">) => {
  return (
    <div
      className=" bg-secondary px-3 py-4 flex flex-col items-center space-y-1"
      role="article"
      aria-labelledby={`service-title-${headline
        .replace(/\s+/g, "-")
        .toLowerCase()}`}
    >
      <Image
        src={`/images/icons/${icon}`}
        alt={`${headline} service icon`}
        width={46}
        height={46}
        aria-hidden="true"
      />
      <h3
        id={`service-title-${headline.replace(/\s+/g, "-").toLowerCase()}`}
        className="text-primary"
      >
        {headline}
      </h3>
      <div className="text-sm text-center">{info}</div>
    </div>
  );
};

export default Service;
