import React from "react";
import { ResumeBlockItemHeader } from "../ResumeBlockItemHeader";
import { RightListItemContainer } from "@/pages/resume";
import { FormationIcon } from "@/icons/FormationIcon";
import { formationList } from "@/base/constants";
import { SideFormationContainer } from "./styles";
import { Link } from "gatsby";

export const FormationSideList: React.FC = () => {
  return (
    <RightListItemContainer>
      <ResumeBlockItemHeader>
        <FormationIcon />
        Formação
      </ResumeBlockItemHeader>
      <SideFormationContainer>
        {formationList
          .map((course) => {
            const CourseItem = () => (
              <li key={course.id}>
                <h1>{course.title}</h1>
                <p>{course.school}</p>
                <p>{course.date}</p>
              </li>
            );
            return course.url ? (
              <Link target="_blank" to={course.url}>
                <CourseItem />
              </Link>
            ) : (
              <CourseItem />
            );
          })
          .reverse()}
      </SideFormationContainer>
    </RightListItemContainer>
  );
};
