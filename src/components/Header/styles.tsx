import { rem } from "@/helpers/rem";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  background: #19202e;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: ${rem(60)};
  align-items: center;
  padding: 0 ${rem(24)};
  z-index: 2;
`;
