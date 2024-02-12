import React from "react";
import { IconProps } from "./icons.interface";

export const ResumeIcon: React.FC<IconProps> = ({ ...rest }) => {
  return (
    <svg
      width="15"
      height="19"
      viewBox="0 0 15 19"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M2.82812 0.34375C1.58711 0.34375 0.578125 1.35273 0.578125 2.59375V16.0938C0.578125 17.3348 1.58711 18.3438 2.82812 18.3438H11.8281C13.0691 18.3438 14.0781 17.3348 14.0781 16.0938V5.96875H9.57812C8.95586 5.96875 8.45312 5.46602 8.45312 4.84375V0.34375H2.82812ZM9.57812 0.34375V4.84375H14.0781L9.57812 0.34375ZM4.51562 9.34375H10.1406C10.45 9.34375 10.7031 9.59688 10.7031 9.90625C10.7031 10.2156 10.45 10.4688 10.1406 10.4688H4.51562C4.20625 10.4688 3.95312 10.2156 3.95312 9.90625C3.95312 9.59688 4.20625 9.34375 4.51562 9.34375ZM4.51562 11.5938H10.1406C10.45 11.5938 10.7031 11.8469 10.7031 12.1562C10.7031 12.4656 10.45 12.7188 10.1406 12.7188H4.51562C4.20625 12.7188 3.95312 12.4656 3.95312 12.1562C3.95312 11.8469 4.20625 11.5938 4.51562 11.5938ZM4.51562 13.8438H10.1406C10.45 13.8438 10.7031 14.0969 10.7031 14.4062C10.7031 14.7156 10.45 14.9688 10.1406 14.9688H4.51562C4.20625 14.9688 3.95312 14.7156 3.95312 14.4062C3.95312 14.0969 4.20625 13.8438 4.51562 13.8438Z" />
    </svg>
  );
};
