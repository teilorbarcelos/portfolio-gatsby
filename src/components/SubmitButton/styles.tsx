import { rem } from "@/helpers/rem";
import styled from "styled-components";

export const SubmitButtonContainer = styled.button`
  cursor: pointer;
  height: ${rem(50)};
  padding: 0 ${rem(24)};
  border-radius: 99px;
  background: #465981;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${rem(10)};
  color: #fff;
  font-size: ${rem(16)};
  line-height: ${rem(24)};
  width: 100%;
  outline: none;
  border: none;

  &:hover {
    filter: brightness(1.2);
  }

  &:disabled {
    filter: brightness(.8);
  }
`;
