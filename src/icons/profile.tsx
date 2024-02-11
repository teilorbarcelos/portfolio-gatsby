import React from "react";
import { IconProps } from "./icons.interface";

export const ProfileIcon: React.FC<IconProps> = ({ ...rest }) => {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M15.0117 14.2883C14.2348 12.9383 12.7758 12.0312 11.1094 12.0312H8.85938C7.19297 12.0312 5.73398 12.9383 4.95703 14.2883C6.19453 15.6664 7.9875 16.5312 9.98438 16.5312C11.9812 16.5312 13.7742 15.6629 15.0117 14.2883ZM18.9844 9.78125C18.9844 14.7523 14.9555 18.7812 9.98438 18.7812C5.01328 18.7812 0.984375 14.7523 0.984375 9.78125C0.984375 4.81016 5.01328 0.78125 9.98438 0.78125C14.9555 0.78125 18.9844 4.81016 18.9844 9.78125ZM9.98438 10.3438C11.3836 10.3438 12.5156 9.21172 12.5156 7.8125C12.5156 6.41328 11.3836 5.28125 9.98438 5.28125C8.58516 5.28125 7.45312 6.41328 7.45312 7.8125C7.45312 9.21172 8.58516 10.3438 9.98438 10.3438Z" />
    </svg>
  );
};
