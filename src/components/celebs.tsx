import Image from "next/image";

import { celebs } from "~/constants";
import { Tittle } from "./sectionTittle";
import { Container } from "./container";

const AMOUNT_OF_CELEB_PHOTOS_FIRST_LINE = 4;
const MINIMUM_AMOUNT_OF_CELEB_PHOTOS_SECOND_LINE = 3;
const MAXIMUM_AMOUNT_OF_CELEB_PHOTOS_SECOND_LINE = 8;

export const Celebs: React.FC = () => {
  return (
    <Container className="flex flex-col">
      <Tittle tittle="Celebs You Love, Love Us" position="center" />
      <div className="flex justify-center">
        {celebs
          .filter((_, index) => index < AMOUNT_OF_CELEB_PHOTOS_FIRST_LINE)
          .map((celeb, index) => (
            <Image
              key={index}
              src={celeb.image}
              alt={celeb.alt}
              className="w-screen"
            />
          ))}
      </div>
      <div className="flex justify-center">
        {celebs
          .filter(
            (_, index) =>
              index > MINIMUM_AMOUNT_OF_CELEB_PHOTOS_SECOND_LINE &&
              index < MAXIMUM_AMOUNT_OF_CELEB_PHOTOS_SECOND_LINE
          )
          .map((celeb, index) => (
            <Image
              key={index}
              src={celeb.image}
              alt={celeb.alt}
              className="w-screen"
            />
          ))}
      </div>
    </Container>
  );
};
