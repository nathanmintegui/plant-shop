import type { StaticImageData } from "next/image";

export type Data = {
  id: number;
  name: string;
  image: StaticImageData;
  description: string;
  generalCategory: number;
  specificCategory: number;
  price: number;
  isHotSale: boolean;
};
