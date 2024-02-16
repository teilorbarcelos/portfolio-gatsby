import { rem } from "@/helpers/rem";
import styled from "styled-components";

export const TechnologiesListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${rem(16)};
  margin-top: ${rem(24)};
  margin-bottom: ${rem(48)};
  padding: ${rem(24)} ${rem(62)};

  @media screen and (max-width: 768px) {
    padding: ${rem(24)} ${rem(0)};
  }
`;

export const TechnologiesListImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #a5b3ce;
  max-width: ${rem(56)};
  overflow: hidden;
  border-radius: ${rem(6)};

  padding: ${rem(16)} ${rem(0)};
`;
