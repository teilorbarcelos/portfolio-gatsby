import * as React from "react";
import "@/styles/reset.css";
import "@/styles/global.css";
import { Header } from "@/components/Header";
import { NavBar } from "../NavBar";
import { ContentContainer, DefaultPageContainer } from "./styles";
import { Footer } from "../Footer";

interface DefaultPageProps {
  children?: React.ReactNode;
}

export const DefaultPage: React.FC<DefaultPageProps> = ({ children }) => {
  return (
    <DefaultPageContainer>
      <NavBar />
      <Header />
      <ContentContainer>{children}</ContentContainer>
      <Footer />
    </DefaultPageContainer>
  );
};
