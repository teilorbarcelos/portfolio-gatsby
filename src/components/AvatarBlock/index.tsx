import React, { ReactNode } from "react";
import {
  Avatar,
  BlockPieceContainer,
} from "@/components/Header/components/BlockPieces";

interface AvatarBlockProps {
  children: ReactNode;
}

export const AvatarBlock: React.FC<AvatarBlockProps> = ({ children }) => {
  return (
    <BlockPieceContainer paddingHorizontal={36} paddingTop={90}>
      <Avatar />
      {children}
    </BlockPieceContainer>
  );
};
