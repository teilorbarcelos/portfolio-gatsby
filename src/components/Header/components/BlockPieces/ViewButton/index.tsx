import { Link } from "gatsby";
import React, { ReactNode } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { ViewButtonContainer } from "./styles";

interface ViewButtonProps {
  href: string;
  children: ReactNode;
}

export const ViewButton: React.FC<ViewButtonProps> = ({ href, children }) => {
  return (
    <Link to={href}>
      <ViewButtonContainer>
        <b>{children}</b> <BiRightArrowAlt />
      </ViewButtonContainer>
    </Link>
  );
};
