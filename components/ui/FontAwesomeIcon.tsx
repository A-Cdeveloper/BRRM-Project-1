import "@/lib/fontawesome";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome";

type FontAwesomeIconProps = {
  icon: IconProp;
  classname?: string;
};

const FontAwesomeIcon = ({ icon, classname }: FontAwesomeIconProps) => {
  return (
    <FAIcon
      icon={icon}
      className={`text-primary hover:text-primary/70 cursor-pointer text-lg ${classname}`}
    />
  );
};

export default FontAwesomeIcon;
