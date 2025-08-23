import {
  faTelegram,
  faViber,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import { BackButton } from "@/components/ui";
import ContactFormular from "@/features/contact/ContactFormular";
import Map from "@/features/contact/Map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Metadata } from "next";

// Statički metadata za Contact stranicu
export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Autoseller. Contact us for vehicle inquiries, support, or any questions about our services.",
};

const ContactPage = () => {
  return (
    <main className="flex flex-col flex-1  max-w-screen-2xl mx-auto z-10 w-full py-4 px-2 2xl:px-0">
      <BackButton />
      <h1 className="mb-2">
        Get in <span className="text-primary">touch</span>
      </h1>

      <div className="w-full lg:w-1/2 mb-3">
        <p>
          Posuere ullamcorper egestas et massa. Risus habitant enim ac et
          aliquam mi. Natoque massa massa tortor vestibulum viverra. Consectetur
          consequat lu
        </p>{" "}
      </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-between space-x-0 lg:space-x-3 space-y-3 lg:space-y-0 mb-8">
        <div className="w-full lg:w-1/2">
          <ContactFormular />
        </div>
        <div className="w-full lg:w-1/2 space-y-3">
          <Map />
          <div className="flex items-center space-x-3">
            <div>Also available on:</div>
            <div className="grid grid-cols-3 gap-[4px]">
              <Link href="tel:123456" target="_blank">
                <FontAwesomeIcon
                  icon={faViber}
                  className="text-2xl text-primary"
                />
              </Link>
              <Link href="tel:123456" target="_blank">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="text-2xl text-primary"
                />
              </Link>
              <Link href="tel:123456" target="_blank">
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="text-2xl text-primary"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
