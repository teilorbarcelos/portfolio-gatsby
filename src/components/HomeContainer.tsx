import * as React from "react";

interface HomeContainerProps {
  children: React.ReactNode;
}

export const HomeContainer: React.FC<HomeContainerProps> = ({ children }) => {
  return <main>{children}</main>;
};
