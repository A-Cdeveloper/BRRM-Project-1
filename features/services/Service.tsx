import { ServiceWithIcon } from "@/types";
import Image from "next/image";

const Service = ({ headline, info, icon }: Omit<ServiceWithIcon, "id">) => {
  return (
    <div className=" bg-secondary px-3 py-4 flex flex-col items-center space-y-1">
      <Image src={`/images/icons/${icon}`} alt="Logo" width={46} height={46} />
      <h3 className="text-primary">{headline}</h3>
      <div className="text-sm text-center">{info}</div>
    </div>
  );
};

export default Service;
