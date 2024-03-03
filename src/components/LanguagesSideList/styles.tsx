import { rem } from "@/helpers/rem";
import styled from "styled-components";

export const SideFormationContainer = styled.ul`
  padding-inline-start: 0;
  display: flex;
  flex-direction: column;
  gap: ${rem(18)};

  li {
    list-style-type: none;

    h1 {
      color: #fff;
      margin-bottom: ${rem(6)};
    }
  }
`;
