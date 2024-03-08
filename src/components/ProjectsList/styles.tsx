import { rem } from "@/helpers/rem";
import styled from "styled-components";

export const ProjectsListContainer = styled.div`
  padding: ${rem(48)};
  background: #1e2738;
  border-radius: ${rem(8)};

  display: flex;
  flex-direction: column;
  gap: ${rem(48)};

  @media screen and (max-width: 768px) {
    padding: ${rem(48)} ${rem(12)};
  }
`;
