import React from "react";
import { ResumeBlockItemHeader } from "../ResumeBlockItemHeader";
import { AboutMeIcon } from "../icons/AboutMeIcon";

export const AboutMe: React.FC = () => {
  return (
    <ResumeBlockItemHeader>
      <AboutMeIcon />
      About Me
    </ResumeBlockItemHeader>
  );
};
