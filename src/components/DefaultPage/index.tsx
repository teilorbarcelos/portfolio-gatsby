import * as React from "react";
import "@/styles/reset.css";
import "@/styles/global.css";

interface DefaultPageProps {
  children?: React.ReactNode;
}

export const DefaultPage: React.FC<DefaultPageProps> = ({ children }) => {
  return <>{children}</>;
};
