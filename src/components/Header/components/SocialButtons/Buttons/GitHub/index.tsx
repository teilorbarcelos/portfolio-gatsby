import React from "react";
import { SocialButtonComponent } from "..";
import { GithubIcon } from "@/icons/github";

export const GitHub: React.FC = () => {
  return (
    <SocialButtonComponent
      url="https://github.com/teilorbarcelos"
      dataTestId="github-link-icon"
    >
      <GithubIcon />
    </SocialButtonComponent>
  );
};
