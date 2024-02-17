import React, { useEffect } from "react";
import { type HeadFC, type PageProps } from "gatsby";
import { DefaultPage } from "@/components/DefaultPage";
import { useRouterStore } from "@/hooks/useRouter";
import { AvatarBlock } from "@/components/AvatarBlock";
import { BlockSubtitle } from "@/components/Header/components/BlockPieces/BlockSubtitle";
import {
  BlockTitle,
  ViewButton,
} from "@/components/Header/components/BlockPieces";
import { WorksResume } from "@/components/components/WorksResume";
import { TechStacks } from "@/components/TechStacks";
import { AboutMe } from "@/components/AboutMe";

import { rem } from "@/helpers/rem";
import styled from "styled-components";

const ResumeBodyContainer = styled.div`
  width: 100%;
  display: flex;
`;

const LeftList = styled.aside`
  width: 100%;
  max-width: ${rem(605)};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 ${rem(24)} 0 ${rem(12)};
  border-right: solid ${rem(1)} #a5b3ce;
  gap: ${rem(32)};
`;

const RightList = styled.aside`
  width: 100%;
  max-width: ${rem(302)};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 ${rem(12)} 0 ${rem(24)};
`;

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
            <WorksResume />
          </LeftList>
          <RightList>
            <TechStacks />
          </RightList>
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
