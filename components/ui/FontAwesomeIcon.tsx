import "@/lib/fontawesome";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome";

type FontAwesomeIconProps = {
  icon: IconProp;
  classname?: string;
  onClick?: () => void;
  "aria-label"?: string;
  tabIndex?: number;
};

const FontAwesomeIcon = ({
  icon,
  classname,
  onClick,
  "aria-label": ariaLabel,
  tabIndex,
}: FontAwesomeIconProps) => {
  return (
    <FAIcon
      icon={icon}
      className={`text-primary hover:text-primary/70 cursor-pointer text-lg ${classname}`}
      onClick={onClick}
      aria-label={ariaLabel}
      tabIndex={tabIndex}
    />
  );
};

export default FontAwesomeIcon;
