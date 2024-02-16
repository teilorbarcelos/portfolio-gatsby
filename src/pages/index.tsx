import React, { useEffect } from "react";
import { type HeadFC, type PageProps } from "gatsby";
import { useRouterStore } from "@/hooks/useRouter";
import { DefaultPage } from "@/components/DefaultPage";
import { HeaderBlock } from "@/components/HeaderBlock";
import { TeasersBlock } from "@/components/TeasersBlock";
import { featuredProjects } from "@/base/constants";
import { ClientsBlock } from "@/components/ClientsBlock";
import { SkillsBlock } from "@/components/SkillsBlock";

const HomePage: React.FC<PageProps> = () => {
  const { setPathname } = useRouterStore();
  useEffect(() => {
    setPathname("/");
  }, []);
  return (
    <DefaultPage>
      <HeaderBlock />
      <TeasersBlock featuredTeasers={{ featuredTeasers: featuredProjects }} />
      <ClientsBlock />
      <SkillsBlock />
    </DefaultPage>
  );
};

export default HomePage;

export const Head: HeadFC = () => (
  <title>
    Teilor Souza Bacelos - Desenvolvedor Web Full-stack ReactJs e NodeJs
  </title>
);
