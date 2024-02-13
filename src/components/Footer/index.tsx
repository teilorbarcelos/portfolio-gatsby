import React from "react";
import { FooterContainer } from "./styles";
import { Link } from "gatsby";

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>
        Desenvolvido por <Link to="/contact">Teilor Souza Barcelos</Link> 2024.
      </p>
    </FooterContainer>
  );
};
