import { rem } from "@/helpers/rem";
import styled from "styled-components";

export const ResumeBlockItemHeaderContainer = styled.div`
  display: flex;
  text-transform: uppercase;
  font-size: ${rem(18)};
  font-weight: bolder;
  color: #fff;
  letter-spacing: ${rem(2.4)};
  line-height: ${rem(21)};
  align-items: center;
  gap: ${rem(8)};
`;
