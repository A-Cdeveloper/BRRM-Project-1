import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

import FontAwesomeIcon from "../ui/FontAwesomeIcon";

const FooterSocial = () => {
  return (
    <div className="flex space-x-1 w-full lg:w-auto justify-center mb-2 lg:mb-0">
      <FontAwesomeIcon icon={faFacebookF} />
      <FontAwesomeIcon icon={faInstagram} classname="text-xl" />
      <FontAwesomeIcon icon={faTiktok} />
    </div>
  );
};

export default FooterSocial;
