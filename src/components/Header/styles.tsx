import { rem } from "@/helpers/rem";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  height: ${rem(60)};
  align-items: center;
  padding: 0 ${rem(24)};
`;
