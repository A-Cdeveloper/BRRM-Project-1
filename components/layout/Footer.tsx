import { FooterCompanyData, FooterSocial } from "./index";

const Footer = () => {
  return (
    <footer className="border-t border-border z-10">
      <div className="flex flex-wrap items-center justify-center lg:justify-between  max-w-screen-2xl mx-auto min-h-[55px] text-sm px-3 2xl:px-0 py-2">
        <FooterSocial />
        <FooterCompanyData />
        <div className="font-light w-full lg:w-auto text-center">
          Company Name © All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
