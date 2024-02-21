import React from "react";
import { ResumeBlockItemHeader } from "../ResumeBlockItemHeader";
import { AboutMeIcon } from "@/icons/AboutMeIcon";
import { TechStacksContainer } from "./styles";
import { TechnologyLevel } from "../components/WorksResume/TechnologyLevel";

export const TechStacks: React.FC = () => {
  return (
    <TechStacksContainer>
      <ResumeBlockItemHeader>
        <AboutMeIcon />
        Tecnologias
      </ResumeBlockItemHeader>
      <TechnologyLevel title="ReactJs" level={95} />
    </TechStacksContainer>
  );
};
