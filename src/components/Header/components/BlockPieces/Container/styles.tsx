import { rem } from "@/helpers/rem";
import styled from "styled-components";

interface BlockPieceContainerProps {
  paddingTop?: number;
  paddingHorizontal?: number;
}

export const BlockPieceContainer = styled.section<BlockPieceContainerProps>`
  background: #1e2738;
  border-radius: ${rem(8)};
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${rem(16)};
  align-items: center;
  padding: ${(props) => (props.paddingTop ? rem(props.paddingTop) : rem(48))}
    ${(props) =>
      props.paddingHorizontal ? rem(props.paddingHorizontal) : rem(140)} ${rem(48)};

  @media screen and (max-width: 768px) {
    padding: ${(props) => (props.paddingTop ? rem(props.paddingTop) : rem(48))} ${rem(16)} ${rem(48)};
  }
`;
