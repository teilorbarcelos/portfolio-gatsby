import { rem } from "@/helpers/rem";
import styled from "styled-components";

export const AvatarImage = styled.img`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -106%);
  border: ${rem(8)} solid #1e2738;
  border-radius: 50%;
`;
