import { rem } from "@/helpers/rem";
import styled from "styled-components";

export const BlockTitle = styled.h1`
  color: #fff;
  font-weight: bolder;
  font-size: ${rem(28)};
  line-height: ${rem(33.6)};
  letter-spacing: ${rem(1.6)};

  @media screen and (max-width: 768px) {
    font-size: ${rem(24)};
    line-height: ${rem(28)};
    letter-spacing: ${rem(1.6)};
  }
`;
