import React, { useEffect } from "react";
import { type HeadFC, type PageProps } from "gatsby";
import { DefaultPage } from "@/components/DefaultPage";
import { useRouterStore } from "@/hooks/useRouter";

const ProjectsPage: React.FC<PageProps> = () => {
  const { setPathname } = useRouterStore();
  useEffect(() => {
    setPathname("/projects");
  }, []);
  return <DefaultPage></DefaultPage>;
};

export default ProjectsPage;

export const Head: HeadFC = () => (
  <title>
    Teilor Souza Bacelos - Desenvolvedor Web Full-stack ReactJs e NodeJs
  </title>
);
