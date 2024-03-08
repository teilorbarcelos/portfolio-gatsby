import { useMenuStore } from "@/hooks/useMenu";
import React from "react";
import { NavbarContainer } from "./styles";
import { MenuLink } from "./components/MenuLink";
import { ProfileIcon } from "@/icons/profile";
import { BagIcon } from "@/icons/bag";
import { PenIcon } from "@/icons/pen";
import { ResumeIcon } from "@/icons/resume";
import { TalkIcon } from "@/icons/talk";
import { CloseIconComponent } from "./components/CloseIcon";

export const NavBar: React.FC = () => {
  const { isOpen, toggleMenu } = useMenuStore();
  return (
    <NavbarContainer isOpen={isOpen} data-testid="nav-bar">
      <ul>
        <MenuLink path="/" title="Sobre" testId="about-link">
          <ProfileIcon />
        </MenuLink>

        <MenuLink path="/projects" title="Projetos" testId="projects-link">
          <BagIcon />
        </MenuLink>

        {/* <MenuLink path="/blog" title="Blog" testId="blog-link">
          <PenIcon />
        </MenuLink> */}

        <MenuLink path="/resume" title="Resumo" testId="resume-link">
          <ResumeIcon />
        </MenuLink>

        <MenuLink path="/contact" title="Contato" testId="contact-link">
          <TalkIcon />
        </MenuLink>

        <CloseIconComponent onClick={toggleMenu} />
      </ul>
    </NavbarContainer>
  );
};
