import React from "react";
import { ProjectsListContainer } from "./styles";
import { featuredProjects } from "@/base/constants";
import { ProjectTeaser } from "./components/ProjectTeaser";

export const ProjectsList: React.FC = () => {
  return (
    <ProjectsListContainer>
      {featuredProjects.map((project) => (
        <ProjectTeaser key={project.id} {...project} />
      ))}
    </ProjectsListContainer>
  );
};
