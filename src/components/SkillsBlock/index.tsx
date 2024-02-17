import React from "react";
import {
  BlockPieceContainer,
  BlockText,
  BlockTitle,
  ViewButton,
} from "@/components/Header/components/BlockPieces";
import { TechnologiesList } from "../TechnologiesList";
import { SkillsResumeList } from "../SkillsResume";

export const SkillsBlock: React.FC = () => {
  return (
    <BlockPieceContainer paddingTop={90} paddingHorizontal={50}>
      <BlockTitle>Skills & Experiências</BlockTitle>
      <BlockText>
        Aqui estão as tecnologias que sou mais familiarizado e utilizo com mais
        frequência durante meus dias de trabalho e estudos.
      </BlockText>
      <TechnologiesList />
      <ViewButton href="/resume">Ver resumo</ViewButton>
      <SkillsResumeList />
      <ViewButton href="/contact">Entrar em Contato</ViewButton>
    </BlockPieceContainer>
  );
};
