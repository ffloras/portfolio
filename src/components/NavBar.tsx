import type { NavItemType } from "../pages/Home";
import NavLinkButton from "./NavLinkButton";

type NavBarType = {
  items: NavItemType[];
};

const NavBar = ({ items }: NavBarType) => {
  return (
    <nav>
      {items.map((item, index) => (
        <NavLinkButton {...item} key={`${item}-${index}`} />
      ))}
    </nav>
  );
};

export default NavBar;
