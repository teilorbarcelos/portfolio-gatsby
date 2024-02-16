import React, { useEffect } from "react";
import { type HeadFC, type PageProps } from "gatsby";
import { DefaultPage } from "@/components/DefaultPage";
import { useRouterStore } from "@/hooks/useRouter";
import { AvatarBlock } from "@/components/AvatarBlock";
import { BlockSubtitle } from "@/components/Header/components/BlockPieces/BlockSubtitle";
import { LeftList, ResumeBodyContainer, RightList } from "./styles";
import { AboutMe } from "./components/AboutMe";
import {
  BlockTitle,
  ViewButton,
} from "@/components/Header/components/BlockPieces";

const ResumePage: React.FC<PageProps> = () => {
  const { setPathname } = useRouterStore();
  useEffect(() => {
    setPathname("/resume");
  }, []);
  return (
    <DefaultPage>
      <AvatarBlock>
        <BlockTitle uppercase>Teilor Souza Barcelos</BlockTitle>
        <BlockSubtitle>Desenvolvedor Web Full-stack</BlockSubtitle>
        <ViewButton href="/contact">Entrar em Contato</ViewButton>
        <ResumeBodyContainer>
          <LeftList>
            <AboutMe />
          </LeftList>
          <RightList>lado direito</RightList>
        </ResumeBodyContainer>
      </AvatarBlock>
    </DefaultPage>
  );
};

export default ResumePage;

export const Head: HeadFC = () => (
  <title>
    Teilor Souza Bacelos - Desenvolvedor Web Full-stack ReactJs e NodeJs
  </title>
);
