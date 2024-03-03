import { rem } from "@/helpers/rem";
import styled from "styled-components";

export const SkillsResumeListContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: ${rem(24)};
  width: 100%;

  margin-top: ${rem(48)};
  margin-bottom: ${rem(48)};

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SkillResumeCardImage = styled.div`
  width: 100%;
  max-width: ${rem(56)};
`;

export const SkillResumeCardTitle = styled.div`
  color: #fff;
  font-family: Inter, sans-serif;
  font-weight: bold;
  font-size: ${rem(18)};
  line-height: ${rem(21.6)};
`;

export const SkillResumeCardText = styled.div`
  color: #a5b3ce;
  font-size: ${rem(16)};
  line-height: ${rem(24)};
  text-align: center;

  a {
    color: #629feb;
  }
`;

export const SkillResumeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${rem(18)};
  width: 100%;
  max-width: ${rem(255)};

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
