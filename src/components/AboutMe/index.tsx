import React from "react";
import { BlockText } from "@/components/Header/components/BlockPieces";
import { ResumeAboutMeContainer } from "./styles";
import { ResumeBlockItemHeader } from "@/components/ResumeBlockItemHeader";
import { AboutMeIcon } from "@/icons/AboutMeIcon";

export const AboutMe: React.FC = () => {
  return (
    <ResumeAboutMeContainer>
      <ResumeBlockItemHeader>
        <AboutMeIcon />
        Sobre Mim
      </ResumeBlockItemHeader>
      <BlockText textAlign="left">
        Sou um apaixonado por programação e desenvolvimento web, sempre em busca
        de me aperfeiçoar e elevar minhas skills para me tornar um profissional
        melhor a cada dia, minhas principais competências são ReactJs e NodeJs,
        já tendo uma ótima bagagem para desenvolver projetos e enfrentar os
        desafios que sejam propostos.
      </BlockText>
    </ResumeAboutMeContainer>
  );
};
