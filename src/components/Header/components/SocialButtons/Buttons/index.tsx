import React, { ReactElement } from "react";
import { cloneElement } from "react";
import { SocialButtonContainer } from "./styles";

interface SocialIconProps {
  children: ReactElement;
  url: string;
  dataTestId: string;
}

export const SocialButtonComponent: React.FC<SocialIconProps> = ({
  children,
  url,
  dataTestId,
}) => {
  return (
    <SocialButtonContainer
      target="_blank"
      href={url}
      rel="noreferrer"
      data-testid={dataTestId}
    >
      {cloneElement(children, { fill: "#A5B3CE" })}
    </SocialButtonContainer>
  );
};
