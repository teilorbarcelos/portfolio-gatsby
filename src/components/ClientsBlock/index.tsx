import React from "react";
import {
  Avatar,
  BlockPieceContainer,
  BlockTitle,
  ViewButton,
} from "@/components/Header/components/BlockPieces";

interface ClientsBlockProps {
  title?: string;
  href?: string;
  seeMoreText?: string;
}

export const ClientsBlock: React.FC<ClientsBlockProps> = ({
  href = "/contact",
  seeMoreText = "Entre em contato",
  title = "Clientes e Serviços",
}) => {
  return (
    <BlockPieceContainer paddingTop={90}>
      <BlockTitle>{title}</BlockTitle>
      <ViewButton href={href}>{seeMoreText}</ViewButton>
    </BlockPieceContainer>
  );
};
