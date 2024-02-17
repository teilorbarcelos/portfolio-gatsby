import { skillsResumeList } from "@/base/constants";
import React from "react";
import {
  SkillResumeCardContainer,
  SkillResumeCardImage,
  SkillResumeCardText,
  SkillResumeCardTitle,
  SkillsResumeListContainer,
} from "./styles";

export const SkillsResumeList: React.FC = () => {
  return (
    <SkillsResumeListContainer>
      {skillsResumeList.map((skill) => (
        <SkillResumeCardContainer>
          <SkillResumeCardImage
            className="icon"
            dangerouslySetInnerHTML={{ __html: skill.icon }}
          />
          <SkillResumeCardTitle>{skill.title}</SkillResumeCardTitle>
          <SkillResumeCardText>{skill.text}</SkillResumeCardText>
        </SkillResumeCardContainer>
      ))}
    </SkillsResumeListContainer>
  );
};
