import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { SubmitButtonContainer } from "./styles";

interface SubmitButtonProps {
  children: ReactNode;
  onSubmit: () => void;
}

export const SubmitButton: React.FC<
  ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, ...rest }) => {
  return (
    <SubmitButtonContainer {...rest}>
      <b>{children}</b>
    </SubmitButtonContainer>
  );
};
