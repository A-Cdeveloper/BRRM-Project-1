import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";
import FontAwesomeIcon from "../ui/FontAwesomeIcon";

const FooterSocial = () => {
  return (
    <div
      className="flex space-x-1 w-full lg:w-auto justify-center mb-2 lg:mb-0"
      role="navigation"
      aria-label="Social media links"
    >
      <Link
        href="https://www.facebook.com/"
        target="_blank"
        aria-label="Visit our Facebook page"
      >
        <FontAwesomeIcon icon={faFacebookF} />
      </Link>
      <Link
        href="https://www.instagram.com/"
        target="_blank"
        aria-label="Visit our Instagram page"
      >
        <FontAwesomeIcon icon={faInstagram} classname="text-xl" />
      </Link>
      <Link
        href="https://www.tiktok.com/"
        target="_blank"
        aria-label="Visit our TikTok page"
      >
        <FontAwesomeIcon icon={faTiktok} />
      </Link>
    </div>
  );
};

export default FooterSocial;
