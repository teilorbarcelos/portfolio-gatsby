import React from "react";
import { ResumeBlockItemHeader } from "../ResumeBlockItemHeader";
import { TechnologyLevel } from "../components/WorksResume/TechnologyLevel";
import { TechnologyIcon } from "@/icons/TechnologyIcon";
import { RightListItemContainer } from "@/pages/resume";

export const TechStacks: React.FC = () => {
  return (
    <RightListItemContainer>
      <ResumeBlockItemHeader>
        <TechnologyIcon />
        Tecnologias
      </ResumeBlockItemHeader>
      <TechnologyLevel title="ReactJs" level={95} />
      <TechnologyLevel title="NextJs" level={95} />
      <TechnologyLevel title="Typescript" level={90} />
      <TechnologyLevel title="NodeJs" level={85} />
    </RightListItemContainer>
  );
};
