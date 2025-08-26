import NavLink from "../ui/NavLink";

const Navbar = () => {
  return (
    <nav
      className="w-full max-w-[200px] mx-auto my-2"
      role="navigation"
      aria-label="Main navigation"
      aria-describedby="nav-description"
    >
      <div id="nav-description" className="sr-only">
        Main site navigation with links to vehicles, about us, services, and
        contact
      </div>

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
