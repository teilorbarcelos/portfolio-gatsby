import { rem } from "@/helpers/rem";
import styled from "styled-components";

export const BlockSubtitle = styled.h1`
  color: #a5b3ce;
  text-transform: uppercase;
  text-align: center;
  font-weight: 500;
  font-size: ${rem(18)};
  line-height: ${rem(27)};
  letter-spacing: ${rem(4)};

  @media screen and (max-width: 768px) {
    font-size: ${rem(16)};
    line-height: ${rem(22)};
  }
`;
