import React from "react";
import { ResumeBlockItemHeader } from "../../ResumeBlockItemHeader";
import { JobIcon } from "@/icons/JobIcon";

export const WorksResume: React.FC = () => {
  return (
    <>
      <ResumeBlockItemHeader>
        <JobIcon />
        Experiências de trabalho
      </ResumeBlockItemHeader>
    </>
  );
};
