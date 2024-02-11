import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { HomeContainer } from "@/components/HomeContainer";

const IndexPage: React.FC<PageProps> = () => {
  return <HomeContainer>home</HomeContainer>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Teilor Souza Bacelos</title>;
