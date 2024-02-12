import { rem } from "@/helpers/rem";
import styled from "styled-components";

export const CloseIconContainer = styled.div`
  margin-top: ${rem(17)};
  cursor: pointer;
  filter: brightness(0.5);

  &:hover {
    filter: brightness(1.5);
  }

  @media screen and (max-width: 450px) {
    display: none;
  }
`;
