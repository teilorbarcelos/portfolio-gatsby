import React, { useEffect } from "react";
import { type HeadFC, type PageProps } from "gatsby";
import { DefaultPage } from "@/components/DefaultPage";
import { useRouterStore } from "@/hooks/useRouter";

const BlogHomePage: React.FC<PageProps> = () => {
  const { setPathname } = useRouterStore();
  useEffect(() => {
    setPathname("/blog");
  }, []);
  return <DefaultPage></DefaultPage>;
};

export default BlogHomePage;

export const Head: HeadFC = () => (
  <title>
    Teilor Souza Bacelos - Desenvolvedor Web Full-stack ReactJs e NodeJs
  </title>
);
