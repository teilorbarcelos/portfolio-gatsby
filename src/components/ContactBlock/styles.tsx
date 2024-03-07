import { rem } from "@/helpers/rem";
import styled from "styled-components";

export const ContactBlockFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${rem(18)};
  width: 100%;
`;

export const ContactBlockFormInlineContainer = styled.div`
  display: flex;
  gap: ${rem(18)};
  width: 100%;
`;
