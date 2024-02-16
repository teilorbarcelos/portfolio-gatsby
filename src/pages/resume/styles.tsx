import { rem } from "@/helpers/rem";
import styled from "styled-components";

export const ResumeBodyContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const LeftList = styled.aside`
  width: 100%;
  max-width: ${rem(605)};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const RightList = styled.aside`
  width: 100%;
  max-width: ${rem(302)};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
