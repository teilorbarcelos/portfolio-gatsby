import { rem } from "@/helpers/rem";
import styled from "styled-components";

export const DefaultPageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 ${rem(16)};
`;

export const ContentContainer = styled.main`
  padding-top: ${rem(150)};
  width: 100%;
  max-width: ${rem(980)};

  display: flex;
  flex-direction: column;
  gap: ${rem(40)};
`;
