import { rem } from "@/helpers/rem";
import styled from "styled-components";

interface HamburgerContainerProps {
  isMenuOpen: boolean;
}

export const HamburgerContainer = styled.div<HamburgerContainerProps>`
  width: ${rem(30)};
  height: ${rem(30)};
  padding: ${rem(7)} ${rem(5)};
  display: flex;
  flex-direction: column;
  gap: ${rem(5)};
  cursor: pointer;

  .first-bar {
    background: #d7dde9;
    height: ${rem(2)};
    width: 100%;
    border-radius: ${rem(1)};
    ${(props) =>
      props.isMenuOpen
        ? `transform: rotate(-45deg) translate(-${rem(5)}, ${rem(6)});`
        : ""}
  }

  .middle-bar {
    background: #d7dde9;
    height: ${rem(2)};
    width: 100%;
    border-radius: ${rem(1)};
    ${(props) => (props.isMenuOpen ? "opacity: 0;" : "")}
  }

  .last-bar {
    background: #d7dde9;
    height: ${rem(2)};
    width: 100%;
    border-radius: ${rem(1)};
    ${(props) =>
      props.isMenuOpen
        ? `transform: rotate(45deg) translate(-${rem(4)}, -${rem(5)});`
        : ""}
  }
`;
