import React from "react";
import { SocialButtonComponent } from "..";
import { LinkedinIcon } from "@/icons/linkedin";

export const Linkedin: React.FC = () => {
  return (
    <SocialButtonComponent
      url="https://www.linkedin.com/in/teilorsb"
      dataTestId="linkedin-link-icon"
    >
      <LinkedinIcon />
    </SocialButtonComponent>
  );
};
