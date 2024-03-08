import { rem } from "@/helpers/rem";
import styled from "styled-components";

export const ProjectTeaserContainer = styled.div`
  display: flex;
  gap: ${rem(12)};
  width: 100%;

  img {
    border-radius: ${rem(6)};
    max-height: ${rem(156)};

    @media screen and (max-width: 768px) {
      max-width: unset;
      max-height: unset;
    }
  }

  aside {
    h1 {
      font-size: ${rem(18)};
      font-weight: bold;
      line-height: ${rem(22)};
      color: #d7dde9;
    }

    p {
      font-size: ${rem(16)};
      font-weight: normal;
      line-height: ${rem(24)};
      color: #a5b3ce;
      margin-top: ${rem(8)};
    }

    .see-more {
      color: #629feb;
      display: flex;
      align-items: center;
      gap: ${rem(8)};
      margin-top: ${rem(4)};

      span {
        font-weight: 600;
      }
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
