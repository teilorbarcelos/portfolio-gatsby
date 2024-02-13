import { rem } from "@/helpers/rem";
import styled from "styled-components";

export const ClientsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${rem(16)};
  margin-top: ${rem(24)};
  margin-bottom: ${rem(48)};
  padding: ${rem(24)} ${rem(62)};

  @media screen and (max-width: 768px) {
    padding: ${rem(24)} ${rem(0)};
  }
`;

export const ClientsListImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #a5b3ce;
  border-radius: ${rem(6)};
  background: rgba(0, 0, 0, 0.1);

  padding: ${rem(16)} ${rem(0)};
`;
