import { rem } from "@/helpers/rem";
import styled from "styled-components";

export const LanguageLevelContainer = styled.div`
  display: flex;
  gap: ${rem(4)};
`;

interface LanguageLevelSectionProps {
  order: number;
  level: number;
}

export const LanguageLevelSection = styled.div<LanguageLevelSectionProps>`
  background: #19202e;
  width: 100%;
  height: ${rem(10)};
  border-radius: ${rem(2)};
  margin-top: ${rem(8)};
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    height: ${rem(10)};
    border-radius: ${rem(2)};
    background: #8497bc;
    width: ${(props) =>
      props.level >= props.order + 1
        ? "100"
        : props.level - props.order <= 0
        ? "0"
        : (props.level - props.order) * 100}%;
  }
`;
