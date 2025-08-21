import { HeaderCompanyData, Logo } from "./index";

const Header = () => {
  return (
    <header className="min-h-14 z-10">
      <div className="flex flex-wrap items-center justify-between max-w-screen-2xl mx-auto px-2 2xl:px-0">
        <Logo />
        <HeaderCompanyData />
      </div>
    </header>
  );
};

export default Header;
