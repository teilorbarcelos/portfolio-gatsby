import React from "react";
import { ResumeBlockItemHeader } from "@/components/ResumeBlockItemHeader";
import { RightListItemContainer } from "@/pages/resume";
import { languagesList } from "@/base/constants";
import { SideFormationContainer } from "./styles";
import { LanguagesIcon } from "@/icons/LanguagesIcon";
import { LanguageLevel } from "../LanguageLevel";

export const LanguagesSideList: React.FC = () => {
  return (
    <RightListItemContainer>
      <ResumeBlockItemHeader>
        <LanguagesIcon />
        Idiomas
      </ResumeBlockItemHeader>
      <SideFormationContainer>
        {languagesList.map((language) => (
          <li key={language.id}>
            <h1>{language.name}</h1>
            <LanguageLevel level={language.level} />
          </li>
        ))}
      </SideFormationContainer>
    </RightListItemContainer>
  );
};
