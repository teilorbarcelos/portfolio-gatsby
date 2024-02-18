import { rem } from "@/helpers/rem";
import styled from "styled-components";

export const ResumeAboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(26)};
  padding-bottom: ${rem(32)};
  border-bottom: solid ${rem(1)} rgba(165, 179, 206, 0.25);
`;
