import React from "react";
import {
  FeaturedTeaser,
  FeaturedTeaserProps,
} from "./components/FeaturedTeaser";
import { FeaturedTeasersContainer } from "./stules";

export interface FeaturedTeasersProps {
  featuredTeasers?: FeaturedTeaserProps[];
}

export const FeaturedTeasers: React.FC<FeaturedTeasersProps> = ({
  featuredTeasers,
}) => {
  return (
    <FeaturedTeasersContainer>
      {featuredTeasers?.slice(0, 3).map((teaser) => (
        <FeaturedTeaser key={teaser.id} {...teaser} />
      ))}
    </FeaturedTeasersContainer>
  );
};
