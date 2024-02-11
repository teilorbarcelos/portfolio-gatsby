import React from "react";
import { HamburgerMenu } from "./components/HamburgerMenu";
import { HeaderContainer } from "./styles";
import { SocialButtons } from "./components/SocialButtons";
import { HireMeButton } from "./components/HireMeButton";

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HamburgerMenu />
      <SocialButtons />
      <HireMeButton />
    </HeaderContainer>
  );
};
