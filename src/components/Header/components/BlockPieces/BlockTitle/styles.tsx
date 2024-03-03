import { rem } from "@/helpers/rem";
import styled from "styled-components";

interface BlockTitleProps {
  uppercase?: boolean;
}

export const BlockTitle = styled.h1<BlockTitleProps>`
  color: #fff;
  font-weight: bolder;
  font-size: ${rem(28)};
  line-height: ${rem(33.6)};
  letter-spacing: ${rem(1.6)};
  ${(props) => (props.uppercase ? "text-transform: uppercase;" : "")}

  @media screen and (max-width: 768px) {
    font-size: ${rem(20)};
    line-height: ${rem(28)};
    letter-spacing: ${rem(1.4)};
  }
`;
