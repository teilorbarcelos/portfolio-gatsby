import { TimelineListItemProps } from "@/base/constants/worksTimelineList";
import React from "react";
import {
  WorksTimelineListContainer,
  WorksTimelineListItemContainer,
} from "./styles";

interface WorksTimelineListProps {
  list: TimelineListItemProps[];
}

export const WorksTimelineList: React.FC<WorksTimelineListProps> = ({
  list,
}) => {
  return (
    <WorksTimelineListContainer>
      {list
        .map((job, index) => (
          <WorksTimelineListItemContainer key={index}>
            <div className="date-company-line">
              <p>
                {job.start} - {job.end}
              </p>{" "}
              <span>{job.company}</span>
            </div>
            <div className="responsibility">{job.responsibility}</div>
            <p className="description">{job.description}</p>
            {job.projectsTimeline && (
              <WorksTimelineListContainer>
                {job.projectsTimeline
                  .map((project, index2) => (
                    <WorksTimelineListItemContainer
                      key={index2}
                      className="sub-list"
                    >
                      <div className="date-customer">
                        <p>
                          {project.start} - {project.end}
                        </p>{" "}
                        <div className="customer">{project.customer}</div>
                      </div>
                      <p className="description">{project.description}</p>
                    </WorksTimelineListItemContainer>
                  ))
                  .reverse()}
              </WorksTimelineListContainer>
            )}
          </WorksTimelineListItemContainer>
        ))
        .reverse()}
    </WorksTimelineListContainer>
  );
};
