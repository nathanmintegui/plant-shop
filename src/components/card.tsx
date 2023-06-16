import type { StaticImageData } from "next/image";
import Image from "next/image";

type CardProps = {
  image: StaticImageData;
  alt: string;
  name: string;
  price: number;
  hasDescount: boolean;
};

export const Card: React.FC<CardProps> = ({
  image,
  alt,
  name,
  price,
  hasDescount,
}: CardProps) => {
  return (
    <div className="mb-5 flex h-80 w-96 flex-col items-center justify-center rounded-2xl bg-white">
      <div className="">
        <Image
          src={image}
          alt={alt}
          className="rounded-lg"
          width={100}
          height={50}
        />
        <h1 className="font-sans font-bold">{name}</h1>
        <p className="font-sans font-normal">$ {price}</p>
        <button className="h-16 w-64 rounded-lg bg-button-green text-center font-sans font-bold text-white">
          Buy
        </button>
      </div>
    </div>
  );
};
