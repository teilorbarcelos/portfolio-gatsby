import { rem } from "@/helpers/rem";
import styled from "styled-components";

interface BlockTextProps {
  textAlign?: string;
}

export const BlockText = styled.p<BlockTextProps>`
  color: #a5b3ce;
  font-weight: normal;
  font-size: ${rem(16)};
  line-height: ${rem(24)};
  text-align: ${(props) => props.textAlign ?? "center"};

  a {
    color: #629feb;
  }
`;
