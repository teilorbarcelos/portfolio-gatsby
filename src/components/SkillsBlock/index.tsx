import React from "react";
import {
  BlockPieceContainer,
  BlockText,
  BlockTitle,
  ViewButton,
} from "@/components/Header/components/BlockPieces";
import { TechnologiesList } from "./components/TechnologiesList";

export const SkillsBlock: React.FC = () => {
  return (
    <BlockPieceContainer paddingTop={90} paddingHorizontal={50}>
      <BlockTitle>Skills & Experiências</BlockTitle>
      <BlockText>
        Aqui estão as tecnologias que eu sou mais familiarizado e utilizo
        durante meu dia a dia de trabalho.
      </BlockText>
      <TechnologiesList />
      <ViewButton href="/resume">Ver resumo</ViewButton>
    </BlockPieceContainer>
  );
};
