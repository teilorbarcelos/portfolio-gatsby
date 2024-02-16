import React from "react";
import {
  BlockTitle,
  BlockText,
  ViewButton,
} from "@/components/Header/components/BlockPieces";
import { AvatarBlock } from "../AvatarBlock";

interface HeaderBlockProps {
  title?: string;
  text?: string;
  href?: string;
  seeMoreText?: string;
}

const defaultText = `Olá, eu sou um constante estudante e profissional de programação
full-stack com mais de 4 anos de experiência e que ama o que faz, sempre
buscando o auto-aperfeiçoamento e aprendendendo novas tecnologias, com
foco em ReactJs para front-end e NodeJs para o back-end.`;

export const HeaderBlock: React.FC<HeaderBlockProps> = ({
  href = "/resume",
  seeMoreText = "Ver Resumo",
  text = defaultText,
  title = "Teilor Souza Barcelos",
}) => {
  return (
    <AvatarBlock>
      <BlockTitle>{title}</BlockTitle>
      <BlockText>{text}</BlockText>
      <ViewButton href={href}>{seeMoreText}</ViewButton>
    </AvatarBlock>
  );
};
