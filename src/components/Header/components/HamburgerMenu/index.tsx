import React from "react";
import { HamburgerContainer } from "./styles";
import { useMenuStore } from "@/hooks/useMenu";

export const HamburgerMenu: React.FC = () => {
  const { toggleMenu, isOpen } = useMenuStore();
  return (
    <HamburgerContainer onClick={toggleMenu} isMenuOpen={isOpen}>
      <div className="first-bar" />
      <div className="middle-bar" />
      <div className="last-bar" />
    </HamburgerContainer>
  );
};
