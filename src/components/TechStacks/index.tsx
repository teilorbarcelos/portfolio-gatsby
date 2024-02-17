import React from "react";
import { ResumeBlockItemHeader } from "../ResumeBlockItemHeader";
import { AboutMeIcon } from "@/icons/AboutMeIcon";

export const TechStacks: React.FC = () => {
  return (
    <>
      <ResumeBlockItemHeader>
        <AboutMeIcon />
        Tecnologias
      </ResumeBlockItemHeader>
    </>
  );
};
