import { rem } from "@/helpers/rem";
import styled from "styled-components";

export const SoftSkillItemsContainer = styled.div`
  margin-top: ${rem(24)};
  display: flex;
  gap: ${rem(12)};
  flex-wrap: wrap;
`;

export const SoftSkillItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${rem(8)};
  font-size: ${rem(12)};
  line-height: ${rem(12)};
  font-weight: bold;
  color: #fff;
  background: rgba(0, 0, 0, 0.1);
  border-radius: ${rem(6)};
`;
