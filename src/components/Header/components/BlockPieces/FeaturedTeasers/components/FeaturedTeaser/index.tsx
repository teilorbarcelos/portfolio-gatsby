import { Link } from "gatsby";
import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { FeaturedTeaserContainer } from "./styles";

export interface FeaturedTeaserProps {
  id: string;
  imageUrl: string;
  title: string;
  featuredText: string;
  miniText: string;
  url: string;
  repository: string;
}

export const FeaturedTeaser: React.FC<FeaturedTeaserProps> = ({
  featuredText,
  imageUrl,
  repository,
  title,
  url,
}) => {
  return (
    <FeaturedTeaserContainer>
      <img src={imageUrl} alt={`Imagem ilustrativa do projeto ${title}.`} />
      <h1>{title}</h1>
      <p>{featuredText}</p>
      <Link to={repository} target="_blank">
        <div className="see-more">
          <span>Visitar repositório</span> <BiRightArrowAlt />
        </div>
      </Link>
      {url && (
        <Link to={url} target="_blank">
          <div className="see-more">
            <span>Visitar site</span> <BiRightArrowAlt />
          </div>
        </Link>
      )}
    </FeaturedTeaserContainer>
  );
};
