import { rem } from "@/helpers/rem";
import styled from "styled-components";

interface TextareaContainerProps {
  error?: boolean;
}

export const TextareaContainer = styled.div<TextareaContainerProps>`
  padding: ${rem(16)} ${rem(12)};
  border: ${(props) => (props.error ? "2px solid red" : "")};
  background: #273248;
  border-radius: ${rem(6)};
  width: 100%;

  textarea {
    background: transparent;
    outline: none;
    border: none;
    color: #a5b3ce;
    font-size: ${rem(16)};
    width: 100%;
    height: ${rem(300)};
    resize: none;

    scrollbar-width: thin;
    scrollbar-color: #a5b3ce transparent;
    scrollbar-arrow-color: transparent;

    &::placeholder {
      transition: all 0.2s;
      color: #a5b3ce;
    }

    &:focus {
      &::placeholder {
        color: transparent;
      }
    }
  }
`;
