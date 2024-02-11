import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { DefaultPage } from "@/components/DefaultPage";

const HomePage: React.FC<PageProps> = () => {
  return <DefaultPage></DefaultPage>;
};

export default HomePage;

export const Head: HeadFC = () => (
  <title>
    Teilor Souza Bacelos - Desenvolvedor Web Full-stack ReactJs e NodeJs
  </title>
);
