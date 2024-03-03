import React from "react";
import { ResumeBlockItemHeader } from "@/components/ResumeBlockItemHeader";
import { TechnologyLevel } from "../components/WorksResume/TechnologyLevel";
import { TechnologyIcon } from "@/icons/TechnologyIcon";
import { RightListItemContainer } from "@/pages/resume";
import { SoftSkillsIcon } from "@/icons/SoftSkillsIcon";
import {
  SoftSkillItem,
  SoftSkillItemsContainer,
} from "./components/SoftSkillItem/styles";

export const SoftSkills: React.FC = () => {
  return (
    <RightListItemContainer>
      <ResumeBlockItemHeader>
        <SoftSkillsIcon />
        Soft Skills
      </ResumeBlockItemHeader>
      <SoftSkillItemsContainer>
        <SoftSkillItem>Bom relacionamento</SoftSkillItem>
        <SoftSkillItem>Dedicação</SoftSkillItem>
        <SoftSkillItem>Adoro programar</SoftSkillItem>
        <SoftSkillItem>Trabalho em Equipe</SoftSkillItem>
      </SoftSkillItemsContainer>
    </RightListItemContainer>
  );
};
