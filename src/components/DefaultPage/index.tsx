import * as React from "react";
import "@/styles/reset.css";
import "@/styles/global.css";
import { Header } from "@/components/Header";
import { NavBar } from "../NavBar";
import { ContentContainer, DefaultPageContainer, Footer } from "./styles";
import { Link } from "gatsby";

interface DefaultPageProps {
  children?: React.ReactNode;
}

export const DefaultPage: React.FC<DefaultPageProps> = ({ children }) => {
  return (
    <DefaultPageContainer>
      <NavBar />
      <Header />
      <ContentContainer>
        {children}
        <Footer>
          <p>
            Desenvolvido por <Link to="/contact">Teilor Souza Barcelos</Link>{" "}
            2024.
          </p>
        </Footer>
      </ContentContainer>
    </DefaultPageContainer>
  );
};
