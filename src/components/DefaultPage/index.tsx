import * as React from "react";
import "@/styles/reset.css";
import "@/styles/global.css";
import { Header } from "@/components/Header";

interface DefaultPageProps {
  children?: React.ReactNode;
}

export const DefaultPage: React.FC<DefaultPageProps> = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};
