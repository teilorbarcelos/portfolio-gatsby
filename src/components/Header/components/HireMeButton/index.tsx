import React from "react";
import { HireMeButtonContainer } from "./styles";
import { Link } from "gatsby";

export const HireMeButton: React.FC = () => {
  return (
    <HireMeButtonContainer data-testid="hire-me-button">
      <Link to="/contact">Contato</Link>
    </HireMeButtonContainer>
  );
};
