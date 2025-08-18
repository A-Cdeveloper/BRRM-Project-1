import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";

import FontAwesomeIcon from "../ui/FontAwesomeIcon";

const HeaderCompanyData = () => {
  return (
    <div className="text-right text-sm font-light space-y-[3px] w-full sm:w-auto my-2">
      <div className="space-x-[8px]">
        <span>Address name 123, City 90321</span>
        <span className="inline-block">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            classname="!text-[13px] hover:text-primary"
          />
        </span>
      </div>
      <div className="space-x-[8px]">
        <span>+381 69 123 456</span>
        <span className="inline-block">
          <FontAwesomeIcon
            icon={faPhone}
            classname="!text-[12px] hover:text-primary"
          />
        </span>
      </div>
    </div>
  );
};

export default HeaderCompanyData;
