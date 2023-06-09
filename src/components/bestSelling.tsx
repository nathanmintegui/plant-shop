import Image from "next/image";
import type { StaticImageData } from "next/image";

import { bestSelling } from "~/constants";

import { Container } from "./container";

interface IProps {
  image: StaticImageData;
  name: string;
  alt: string;
}

export const BestSelling: React.FC = () => {
  const Card: React.FC<IProps> = ({ image, name, alt }: IProps) => {
    return (
      <div className="relative flex flex-col items-center rounded-2xl bg-white p-5">
        <Image src={image} alt={alt} className="mb-4 rounded-lg" />
        <h1 className="absolute top-2/4 text-white">{name}</h1>
        <button className="h-16 w-80 rounded-lg bg-button-green text-center text-white">
          Shop Now
        </button>
      </div>
    );
  };

  return (
    <Container className="flex flex-col">
      <h1 className="text-center">best seliing</h1>
      <div className="flex justify-between">
        {bestSelling.map((item: IProps, index: number) => (
          <Card
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
