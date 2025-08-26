import { HeaderCompanyData, Logo } from "./index";

const Header = () => {
  return (
    <header
      className="min-h-14 z-10"
      role="banner"
      aria-label="Site header"
      aria-describedby="header-description"
    >
      <div className="flex flex-wrap items-center justify-between max-w-screen-2xl mx-auto px-2 2xl:px-0">
        <Logo />
        <HeaderCompanyData />
      </div>
      <div id="header-description" className="sr-only">
        Main site header containing logo and company information
      </div>
    </header>
  );
};

export default Header;
