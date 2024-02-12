import { rem } from "@/helpers/rem";
import styled from "styled-components";

export const BlockText = styled.p`
  color: #a5b3ce;
  font-weight: normal;
  font-size: ${rem(16)};
  line-height: ${rem(24)};
  text-align: center;

  a {
    color: #629feb;
  }
`;
