import React, { ReactElement, cloneElement } from "react";
import { MenuLinkContainer } from "./styles";
import { useRouterStore } from "@/hooks/useRouter";

export interface MenuLinkProps {
  children: ReactElement;
  title: string;
  path: string;
  testId?: string;
}

export const MenuLink: React.FC<MenuLinkProps> = ({
  children,
  path,
  title,
  testId,
}) => {
  const { pathname } = useRouterStore();
  const color = pathname === path ? "#FE655C" : "#A5B3CE";
  return (
    <a href={path} data-testid={testId}>
      <MenuLinkContainer color={color}>
        {cloneElement(children, { fill: color })}
        <p className="title">{title}</p>
      </MenuLinkContainer>
    </a>
  );
};
