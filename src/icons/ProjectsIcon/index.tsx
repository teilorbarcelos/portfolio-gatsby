import { IconsContainerCircle } from "@/components/IconsContainerCircle/styled";
import { IconProps } from "@/icons/icons.interface";
import React from "react";

export const ProjectsIcon: React.FC<IconProps> = ({ ...rest }) => {
  return (
    <IconsContainerCircle>
      <svg
        width="18"
        height="17"
        viewBox="0 0 18 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <path
          d="M11.5364 1.23501C11.6164 1.07501 11.6164 0.925005 11.5364 0.785005C11.4564 0.645004 11.3464 0.555005 11.2064 0.515004C11.0664 0.475004 10.9264 0.495005 10.7864 0.575005C10.6464 0.655005 10.5564 0.755005 10.5164 0.875005L6.01641 15.515C5.93641 15.675 5.93641 15.825 6.01641 15.965C6.09641 16.105 6.20641 16.195 6.34641 16.235C6.48641 16.275 6.62641 16.255 6.76641 16.175C6.90641 16.095 6.99641 15.995 7.03641 15.875L11.5364 1.23501ZM5.23641 4.05501C5.35641 4.135 5.41641 4.25501 5.41641 4.41501C5.41641 4.57501 5.35641 4.71501 5.23641 4.83501L1.69641 8.37501L5.23641 11.915C5.35641 12.035 5.41641 12.175 5.41641 12.335C5.41641 12.495 5.35641 12.625 5.23641 12.725C5.11641 12.825 4.97641 12.875 4.81641 12.875C4.65641 12.875 4.53641 12.815 4.45641 12.695L0.496406 8.795C0.376406 8.675 0.316406 8.53501 0.316406 8.37501C0.316406 8.215 0.376406 8.07501 0.496406 7.95501L4.45641 4.05501C4.53641 3.93501 4.65641 3.87501 4.81641 3.87501C4.97641 3.87501 5.11641 3.93501 5.23641 4.05501ZM12.3164 4.05501C12.1964 4.135 12.1364 4.25501 12.1364 4.41501C12.1364 4.57501 12.1964 4.71501 12.3164 4.83501L15.8564 8.37501L12.3164 11.915C12.1964 12.035 12.1364 12.175 12.1364 12.335C12.1364 12.495 12.1964 12.625 12.3164 12.725C12.4364 12.825 12.5764 12.875 12.7364 12.875C12.8964 12.875 13.0164 12.815 13.0964 12.695L17.0564 8.795C17.1764 8.675 17.2364 8.53501 17.2364 8.37501C17.2364 8.215 17.1764 8.07501 17.0564 7.95501L13.0964 4.05501C13.0164 3.93501 12.8964 3.87501 12.7364 3.87501C12.5764 3.87501 12.4364 3.93501 12.3164 4.05501Z"
          fill="#D7DDE9"
        />
      </svg>
    </IconsContainerCircle>
  );
};