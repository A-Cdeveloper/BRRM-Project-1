import NavLink from "../ui/NavLink";

const Navbar = () => {
  return (
    <nav className="w-full max-w-[200px] mx-auto my-2">
      <NavLink href="/vehicles" isFirst>
        Vehicles List
      </NavLink>

      <NavLink href="/about-us">About Us</NavLink>
      <NavLink href="/services">Services</NavLink>
      <NavLink href="/contact">Contact Us</NavLink>
    </nav>
  );
};

export default Navbar;
