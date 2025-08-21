import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import FontAwesomeIcon from "./FontAwesomeIcon";

type IconButtonsProps = {
  icon: IconProp;
  onClick: () => void;
  ariaLabel: string;
  tabIndex: number;
  classname?: string;
};

const IconButton = ({
  icon,
  onClick,
  ariaLabel,
  tabIndex,
  classname,
}: IconButtonsProps) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      classname={`text-white opacity-50 hover:opacity-100 hover:text-white transition-opacity duration-200 ${classname}`}
      onClick={onClick}
      aria-label={ariaLabel}
      tabIndex={tabIndex}
    />
  );
};

export default IconButton;
