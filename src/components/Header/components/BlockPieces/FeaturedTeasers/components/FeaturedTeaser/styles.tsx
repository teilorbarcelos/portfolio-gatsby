import { rem } from "@/helpers/rem";
import styled from "styled-components";

export const FeaturedTeaserContainer = styled.div`
  width: 100%;
  max-width: ${rem(270)};

  img {
    border-radius: ${rem(5)} ${rem(5)} 0 0;
  }

  h1 {
    font-size: ${rem(18)};
    font-weight: bold;
    line-height: ${rem(22)};
    color: #d7dde9;
    margin-top: ${rem(16)};
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

  @media screen and (max-width: 768px) {
    max-width: unset;
  }
`;
