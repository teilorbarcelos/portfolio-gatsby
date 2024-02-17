import React, { ReactNode } from "react";
import { ResumeBlockItemHeaderContainer } from "./styles";

interface ResumeBlockItemHeaderProps {
  children: ReactNode;
}

export const ResumeBlockItemHeader: React.FC<ResumeBlockItemHeaderProps> = ({
  children,
}) => {
  return (
    <ResumeBlockItemHeaderContainer>{children}</ResumeBlockItemHeaderContainer>
  );
};
