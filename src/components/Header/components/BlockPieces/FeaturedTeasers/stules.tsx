import { rem } from "@/helpers/rem";
import styled from "styled-components";

export const FeaturedTeasersContainer = styled.div`
  display: flex;
  gap: ${rem(24)};
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
