import { rem } from "@/helpers/rem";
import styled from "styled-components";

export const SideProjectsContainer = styled.ul`
  padding-inline-start: 0;
  display: flex;
  flex-direction: column;
  gap: ${rem(18)};

  li {
    list-style-type: none;
    padding-left: ${rem(16)};

    h1 {
      position: relative;
      color: #fff;
      margin-bottom: ${rem(6)};

      &::before {
        position: absolute;
        display: block;
        content: "";
        width: ${rem(8)};
        height: ${rem(8)};
        background: #fff;

        top: ${rem(9)};
        left: ${rem(-16)};
      }
    }

    p {
      color: #a5b3ce;
    }
  }
`;
