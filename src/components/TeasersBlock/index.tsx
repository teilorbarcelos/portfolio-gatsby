import React from "react";
import {
  Avatar,
  BlockPieceContainer,
  BlockTitle,
  BlockText,
  ViewButton,
} from "@/components/Header/components/BlockPieces";
import {
  FeaturedTeasers,
  FeaturedTeasersProps,
} from "@/components/Header/components/BlockPieces/FeaturedTeasers";

interface TeasersBlockProps {
  title?: string;
  text?: string;
  featuredTeasers?: FeaturedTeasersProps;
  href?: string;
  seeMoreText?: string;
}

const defaultText = `Aqui estão alguns dos projetos de estudo e outros que trabalhei durante minha carreira profissional nessa área incrível.`;

export const TeasersBlock: React.FC<TeasersBlockProps> = ({
  href = "/projects",
  seeMoreText = "Ver Todos",
  text = defaultText,
  title = "Meus Projetos",
  featuredTeasers,
}) => {
  return (
    <BlockPieceContainer paddingHorizontal={60}>
      <BlockTitle>{title}</BlockTitle>
      <BlockText>{text}</BlockText>
      <FeaturedTeasers {...featuredTeasers} />
      <ViewButton href={href}>{seeMoreText}</ViewButton>
    </BlockPieceContainer>
  );
};
