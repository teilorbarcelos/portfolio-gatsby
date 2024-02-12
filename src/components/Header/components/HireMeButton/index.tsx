import React from "react";
import { HireMeButtonContainer } from "./styles";

export const HireMeButton: React.FC = () => {
  return (
    <HireMeButtonContainer data-testid="hire-me-button">
      <a href="/contact">Contato</a>
    </HireMeButtonContainer>
  );
};
