import { rem } from "@/helpers/rem";
import styled from "styled-components";

export const WorksTimelineListContainer = styled.ul`
  margin-top: ${rem(24)};
  padding-left: ${rem(16)};
`;

export const WorksTimelineListItemContainer = styled.li`
  list-style-type: none;
  position: relative;
  border-left: solid ${rem(3)} rgba(0, 0, 0, 0.1);

  padding-left: ${rem(24)};

  &::before {
    display: block;
    content: "";
    width: ${rem(10)};
    height: ${rem(10)};
    background: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    border: solid ${rem(2)} #a5b3ce;

    top: ${rem(4)};
    left: ${rem(-6)};

    position: absolute;
  }

  &.sub-list {
    &::before {
      width: ${rem(8)};
      height: ${rem(8)};
      left: ${rem(-5)};
    }
  }

  .date-company-line {
    width: 100%;
    display: flex;
    justify-content: space-between;

    p {
      font-size: ${rem(12)};
      line-height: ${rem(18)};
      color: #a5b3ce;
    }

    span {
      color: #a5b3ce;
      height: ${rem(24)};
      font-size: ${rem(12)};
      line-height: ${rem(18)};
      padding: 0 ${rem(8)};
      background: rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
      border-radius: ${rem(4)};
    }
  }

  .date-customer {
    width: 100%;

    p {
      font-size: ${rem(12)};
      line-height: ${rem(18)};
      color: #a5b3ce;
    }

    .customer {
      margin-top: ${rem(8)};
      font-weight: bold;
      font-size: ${rem(14)};
      line-height: ${rem(18)};
      color: #fff;
    }
  }

  .responsibility {
    margin-top: ${rem(4)};
    font-weight: bold;
    font-size: ${rem(18)};
    line-height: ${rem(22)};
    color: #fff;
  }

  .description {
    margin-top: ${rem(10)};
    font-size: ${rem(16)};
    line-height: ${rem(24)};
    color: #a5b3ce;
    margin-bottom: ${rem(10)};
    padding-left: ${rem(16)};
  }
`;
