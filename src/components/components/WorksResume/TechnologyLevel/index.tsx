import React from "react";
import { TechnologyLevelContainer, TechnologyLevelDisplay } from "./styles";

interface TechnologyLevelProps {
  title: string;
  level: number;
}

export const TechnologyLevel: React.FC<TechnologyLevelProps> = ({
  title,
  level,
}) => {
  return (
    <TechnologyLevelContainer>
      <h1>{title}</h1>
      <TechnologyLevelDisplay level={level} />
    </TechnologyLevelContainer>
  );
};
