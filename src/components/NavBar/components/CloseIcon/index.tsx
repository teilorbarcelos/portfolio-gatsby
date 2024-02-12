import React from "react";
import { CloseIconContainer } from "./styles";
import { CloseIcon } from "@/icons/close";

interface CloseIconProps {
  onClick: () => void;
}

export const CloseIconComponent: React.FC<CloseIconProps> = ({ onClick }) => {
  return (
    <CloseIconContainer onClick={onClick} data-testid="close-icon">
      <CloseIcon fill="#D7DDE9" />
    </CloseIconContainer>
  );
};
