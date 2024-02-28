import React from "react";
import { ResumeBlockItemHeader } from "../ResumeBlockItemHeader";
import { RightListItemContainer } from "@/pages/resume";
import { ProjectsIcon } from "@/icons/ProjectsIcon";

export const ProjectsSideList: React.FC = () => {
  return (
    <RightListItemContainer>
      <ResumeBlockItemHeader>
        <ProjectsIcon />
        Projetos
      </ResumeBlockItemHeader>

    </RightListItemContainer>
  );
};
