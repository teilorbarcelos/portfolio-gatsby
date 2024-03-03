import React from "react";
import { LanguageLevelContainer, LanguageLevelSection } from "./styles";

interface LanguageLevelProps {
  level: number;
}

export const LanguageLevel: React.FC<LanguageLevelProps> = ({ level }) => {
  return (
    <LanguageLevelContainer>
      {[...Array(10).keys()].map((item) => (
        <LanguageLevelSection order={item} level={level} />
      ))}
    </LanguageLevelContainer>
  );
};
