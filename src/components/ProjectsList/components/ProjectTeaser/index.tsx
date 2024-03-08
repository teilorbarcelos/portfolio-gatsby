import { Link } from "gatsby";
import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { ProjectTeaserContainer } from "./styles";

export interface ProjectTeaserProps {
  id: string;
  imageUrl: string;
  title: string;
  featuredText: string;
  miniText: string;
  url: string;
  repository: string;
}

export const ProjectTeaser: React.FC<ProjectTeaserProps> = ({
  featuredText,
  imageUrl,
  repository,
  title,
  url,
}) => {
  return (
    <ProjectTeaserContainer>
      <img src={imageUrl} alt={`Imagem ilustrativa do projeto ${title}.`} />
      <aside>
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
      </aside>
    </ProjectTeaserContainer>
  );
};
