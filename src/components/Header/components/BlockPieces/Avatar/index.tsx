import React from "react";
import { AvatarImage } from "./styles";

export const Avatar: React.FC = () => {
  const profileImageUrl = "https://github.com/teilorbarcelos.png";
  return (
    <AvatarImage
      width={160}
      height={160}
      src={profileImageUrl}
      alt={`Imagem de perfil de Teilor Souza Barcelos`}
      data-testid="profile-image"
    />
  );
};
