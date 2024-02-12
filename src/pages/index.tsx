import React, { useEffect } from "react";
import { type HeadFC, type PageProps } from "gatsby";
import { DefaultPage } from "@/components/DefaultPage";
import { useRouterStore } from "@/hooks/useRouter";

const HomePage: React.FC<PageProps> = ({ location }) => {
  const { setPathname } = useRouterStore();
  useEffect(() => {
    setPathname(location.pathname);
  }, []);
  return <DefaultPage></DefaultPage>;
};

export default HomePage;

export const Head: HeadFC = () => (
  <title>
    Teilor Souza Bacelos - Desenvolvedor Web Full-stack ReactJs e NodeJs
  </title>
);
