import React from "react";
import {
  BlockPieceContainer,
  BlockTitle,
  ViewButton,
} from "@/components/Header/components/BlockPieces";
import { ClientsList } from "./components/ClientsList";

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
    <BlockPieceContainer paddingTop={90} paddingHorizontal={50}>
      <BlockTitle>{title}</BlockTitle>
      <ClientsList />
      <ViewButton href={href}>{seeMoreText}</ViewButton>
    </BlockPieceContainer>
  );
};
