import { IconsContainerCircle } from "@/components/IconsContainerCircle/styled";
import { IconProps } from "@/icons/icons.interface";
import React from "react";

export const LanguagesIcon: React.FC<IconProps> = ({ ...rest }) => {
  return (
    <IconsContainerCircle>
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <path
          d="M5.41641 7.82563L4.93641 9.26562H3.67641L5.77641 3.62563H7.21641L9.31641 9.26562H7.99641L7.51641 7.82563H5.41641ZM7.27641 6.98563L6.49641 4.70563H6.43641L5.65641 6.98563H7.27641ZM0.316406 2.48563C0.316406 1.88563 0.536406 1.36563 0.976406 0.925625C1.41641 0.485626 1.95641 0.265625 2.59641 0.265625H10.4564C11.0564 0.265625 11.5764 0.485626 12.0164 0.925625C12.4564 1.36563 12.6764 1.90563 12.6764 2.54563V5.90563H16.0964C16.6964 5.90563 17.2164 6.12563 17.6564 6.56563C18.0964 7.00563 18.3164 7.52563 18.3164 8.12563V15.9856C18.3164 16.6256 18.0964 17.1656 17.6564 17.6056C17.2164 18.0456 16.6764 18.2656 16.0364 18.2656H8.17641C7.57641 18.2656 7.05641 18.0456 6.61641 17.6056C6.17641 17.1656 5.95641 16.6456 5.95641 16.0456V12.6256H2.59641C1.95641 12.6256 1.41641 12.4056 0.976406 11.9656C0.536406 11.5256 0.316406 11.0056 0.316406 10.4056V2.48563ZM2.59641 1.40563C2.27641 1.40563 2.00641 1.51562 1.78641 1.73563C1.56641 1.95563 1.45641 2.20563 1.45641 2.48563V10.4056C1.45641 10.7256 1.56641 10.9856 1.78641 11.1856C2.00641 11.3856 2.27641 11.4856 2.59641 11.4856H10.4564C10.7764 11.5256 11.0464 11.4356 11.2664 11.2156C11.4864 10.9956 11.5964 10.7256 11.5964 10.4056V2.48563C11.5964 2.20563 11.4864 1.95563 11.2664 1.73563C11.0464 1.51562 10.7764 1.40563 10.4564 1.40563H2.59641ZM10.5764 12.6256C10.8164 12.9856 11.0564 13.3056 11.2964 13.5856C10.4564 14.2256 9.41641 14.7056 8.17641 15.0256C8.45641 15.3856 8.67641 15.7056 8.83641 15.9856C10.1164 15.5856 11.1964 15.0256 12.0764 14.3056C12.9564 15.1056 14.0564 15.6656 15.3764 15.9856C15.5764 15.5856 15.8164 15.2456 16.0964 14.9656C14.8564 14.7256 13.7964 14.2456 12.9164 13.5256C13.6764 12.6856 14.2764 11.6656 14.7164 10.4656H16.0964V9.26562H12.6764V10.4656H13.5764C13.2164 11.3856 12.7364 12.1856 12.1364 12.8656C11.9764 12.6656 11.8164 12.4656 11.6564 12.2656C11.3364 12.5056 10.9764 12.6256 10.5764 12.6256Z"
          fill="#D7DDE9"
        />
      </svg>
    </IconsContainerCircle>
  );
};
