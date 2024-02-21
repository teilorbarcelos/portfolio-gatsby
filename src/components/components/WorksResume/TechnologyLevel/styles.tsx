import { rem } from "@/helpers/rem";
import styled from "styled-components";

export const TechnologyLevelContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${rem(24)};

  h1 {
    font-size: ${rem(14)};
    line-height: ${rem(21)};
    font-weight: bold;
    color: #fff;
  }
`;

interface TechnologyLevelDisplayProps {
  level: number;
}

export const TechnologyLevelDisplay = styled.div<TechnologyLevelDisplayProps>`
  position: relative;
  width: 100%;
  height: ${rem(4.8)};
  border-radius: ${rem(4)};
  background: #19202e;
  margin-top: ${rem(6)};

  &::before {
    content: "";
    position: absolute;
    left: 0;
    height: ${rem(4.8)};
    border-radius: ${rem(4)};
    background: #8497bc;
    width: ${(props) => props.level}%;
  }
`;
