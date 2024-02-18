import React from "react";
import { ResumeBlockItemHeader } from "../../ResumeBlockItemHeader";
import { JobIcon } from "@/icons/JobIcon";
import { WorksTimelineList } from "./WorksTimeline";
import { worksTimelineList } from "@/base/constants/worksTimelineList";
import { WorksResumeContainer } from "./styles";

export const WorksResume: React.FC = () => {
  return (
    <WorksResumeContainer>
      <ResumeBlockItemHeader>
        <JobIcon />
        Experiências de trabalho
      </ResumeBlockItemHeader>
      <WorksTimelineList list={worksTimelineList} />
    </WorksResumeContainer>
  );
};
