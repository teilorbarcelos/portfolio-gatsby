import React from "react";
import { ResumeBlockItemHeader } from "@/components/ResumeBlockItemHeader";
import { RightListItemContainer } from "@/pages/resume";
import { ProjectsIcon } from "@/icons/ProjectsIcon";
import { featuredProjects } from "@/base/constants";
import { SideProjectsContainer } from "./styles";
import { Link } from "gatsby";

export const ProjectsSideList: React.FC = () => {
  return (
    <RightListItemContainer>
      <ResumeBlockItemHeader>
        <ProjectsIcon />
        Projetos
      </ResumeBlockItemHeader>
      <SideProjectsContainer>
        {featuredProjects.map((project) => (
          <Link target="_blank" to={project.url}>
            <li key={project.id}>
              <h1>{project.title}</h1>
              <p>{project.miniText}</p>
            </li>
          </Link>
        ))}
      </SideProjectsContainer>
    </RightListItemContainer>
  );
};
