import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";
import FontAwesomeIcon from "../ui/FontAwesomeIcon";

const FooterSocial = () => {
  return (
    <div className="flex space-x-1 w-full lg:w-auto justify-center mb-2 lg:mb-0">
      <Link href="https://www.facebook.com/" target="_blank">
        <FontAwesomeIcon icon={faFacebookF} />
      </Link>
      <Link href="https://www.instagram.com/" target="_blank">
        <FontAwesomeIcon icon={faInstagram} classname="text-xl" />
      </Link>
      <Link href="https://www.tiktok.com/" target="_blank">
        <FontAwesomeIcon icon={faTiktok} />
      </Link>
    </div>
  );
};

export default FooterSocial;
