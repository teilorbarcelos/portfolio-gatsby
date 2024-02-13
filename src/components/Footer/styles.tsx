import { rem } from "@/helpers/rem";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  color: #a5b3ce;
  font-size: ${rem(12)};
  line-height: ${rem(18)};

  display: flex;

  height: ${rem(70)};
  align-items: center;

  a {
    color: #a5b3ce;
  }
`;
