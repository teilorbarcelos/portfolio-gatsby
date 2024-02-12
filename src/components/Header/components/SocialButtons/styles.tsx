import { rem } from "@/helpers/rem";
import styled from "styled-components";

export const SocialButtonsContainer = styled.div`
  left: 50%;
  transform: translate(-50%, 0);
  position: absolute;
  display: flex;
  align-items: center;
  gap: ${rem(12.5)};

  @media screen and (max-width: 450px) {
    transform: translate(-90%, 0);
  }
`;
