import React from "react";
import { GitHub } from "./Buttons/GitHub";
import { Linkedin } from "./Buttons/Linkedin";
import { SocialButtonsContainer } from "./styles";

export const SocialButtons: React.FC = () => {
  return (
    <SocialButtonsContainer>
      <GitHub />
      <Linkedin />
    </SocialButtonsContainer>
  );
};
