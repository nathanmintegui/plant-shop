import Image from "next/image";
import type { StaticImageData } from "next/image";

import { categories } from "~/constants";
import { Container } from "./container";

interface IProps {
  image: StaticImageData;
  name: string;
  alt: string;
}

export const PlantCategories: React.FC = () => {
  const Plant: React.FC<IProps> = ({ image, name, alt }: IProps) => {
    return (
      <div className="flex flex-col items-center">
        <Image src={image} alt={alt} className="" />
        <h1>{name}</h1>
      </div>
    );
  };

  return (
    <Container className="mt-20 flex flex-row-reverse">
      <a className="absolute text-green-700 underline">See all</a>
      <div className="flex w-screen justify-between">
        {categories.map((item: IProps, index: number) => (
          <Plant
            key={index}
            image={item.image}
            name={item.name}
            alt={item.alt}
          />
        ))}
      </div>
    </Container>
  );
};
