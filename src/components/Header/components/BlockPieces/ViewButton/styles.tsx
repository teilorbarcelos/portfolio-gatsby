import { rem } from "@/helpers/rem";
import styled from "styled-components";

export const ViewButtonContainer = styled.div`
  cursor: pointer;
  height: ${rem(50)};
  padding: 0 ${rem(24)};
  border-radius: 99px;
  background: #465981;
  display: flex;
  align-items: center;
  gap: ${rem(8)};
  color: #fff;
  font-size: ${rem(16)};
  line-height: ${rem(24)};

  &:hover {
    filter: brightness(1.2);
  }
`;
