import React, { useState } from "react";
import { HamburgerContainer } from "./styles";

export const HamburgerMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <HamburgerContainer
      onClick={() => setIsMenuOpen((prev) => !prev)}
      isMenuOpen={isMenuOpen}
    >
      <div className="first-bar" />
      <div className="middle-bar" />
      <div className="last-bar" />
    </HamburgerContainer>
  );
};
