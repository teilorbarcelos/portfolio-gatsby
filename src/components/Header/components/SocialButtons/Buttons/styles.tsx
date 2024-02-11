import { rem } from "@/helpers/rem";
import styled from "styled-components";

export const SocialButtonContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${rem(38)};
  height: ${rem(38)};
  border-radius: 50%;
  background: "rgba(0,0,0,0.1)";
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.05);

  &:hover {
    filter: drop-shadow(0 0 0.75rem #7fb8da);
  }
`;
