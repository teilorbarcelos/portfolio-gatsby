import { technologiesIconsList } from "@/base/constants";
import React from "react";
import {
  TechnologiesListContainer,
  TechnologiesListImageContainer,
} from "./styles";

export const TechnologiesList: React.FC = () => {
  return (
    <TechnologiesListContainer>
      {technologiesIconsList.map((technology) => (
        <TechnologiesListImageContainer
          key={technology.name}
          dangerouslySetInnerHTML={{ __html: technology.icon }}
          title={technology.name}
        />
      ))}
    </TechnologiesListContainer>
  );
};
