import { rem } from "@/helpers/rem";
import styled from "styled-components";

interface InputContainerProps {
  error?: boolean;
}

export const InputContainer = styled.div<InputContainerProps>`
  padding: ${rem(16)} ${rem(12)};
  border: ${(props) => (props.error ? "2px solid red" : "")};
  background: #273248;
  border-radius: ${rem(6)};
  width: 100%;

  input {
    background: transparent;
    outline: none;
    border: none;
    color: #a5b3ce;
    font-size: ${rem(16)};
    width: 100%;

    &::placeholder {
      transition: all 0.2s;
      color: #a5b3ce;
    }

    &:focus {
      &::placeholder {
        color: transparent;
      }
    }

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px #273248 inset;
    }

    &:-webkit-autofill {
      -webkit-text-fill-color: #a5b3ce !important;
    }
  }
`;
