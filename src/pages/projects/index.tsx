import React, { useEffect } from "react";
import { type HeadFC, type PageProps } from "gatsby";
import { DefaultPage } from "@/components/DefaultPage";
import { useRouterStore } from "@/hooks/useRouter";
import { HeaderBlock } from "@/components/HeaderBlock";
import { ProjectsList } from "@/components/ProjectsList";

const ProjectsPage: React.FC<PageProps> = () => {
  const { setPathname } = useRouterStore();
  useEffect(() => {
    setPathname("/projects");
  }, []);
  return (
    <DefaultPage>
      <HeaderBlock
        title="Meus Projetos"
        text="Aqui você pode ver meus principais projetos de trabalho e estudo."
        seeMoreText="Entrar em contato"
        href="/contact"
      />
      <ProjectsList />
    </DefaultPage>
  );
};

export default ProjectsPage;

export const Head: HeadFC = () => (
  <title>
    Teilor Souza Bacelos - Desenvolvedor Web Full-stack ReactJs e NodeJs
  </title>
);
