import React from "react";
import type { NavItemType } from "../pages/Home";
import { useNavigate } from "react-router-dom";

const NavLinkButton = ({ name, link }: NavItemType) => {
  const navigate = useNavigate();

  const handleScrolltoSection = (
    ref: React.RefObject<HTMLDivElement | null>
  ) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleRedirectAndScroll = (link: string) => {
    navigate(link);
  };

  return (
    <button
      className="nav-link-button"
      onClick={
        typeof link === "string"
          ? () => handleRedirectAndScroll(link)
          : () => handleScrolltoSection(link)
      }
    >
      {name}
    </button>
  );
};

export default NavLinkButton;
