import type { StaticImageData } from "next/image";

import {
  bonsaiCategory,
  cactusCategory,
  creepersCategory,
  giftingCategory,
  seedsCategory,
  succulentsCategory,
} from "~/assets";

interface IProps {
  image: StaticImageData;
  name: string;
  alt: string;
}

export const categories: IProps[] = [
  {
    image: bonsaiCategory,
    name: "BONSAI",
    alt: "bonsai plant",
  },
  {
    image: cactusCategory,
    name: "CACTUS",
    alt: "cactus plant",
  },
  {
    image: creepersCategory,
    name: "CREEPER",
    alt: "creeper plant",
  },
  {
    image: succulentsCategory,
    name: "SUCCULENTS",
    alt: "succullent plant",
  },
  {
    image: seedsCategory,
    name: "SEEDS",
    alt: "seed plant",
  },
  {
    image: giftingCategory,
    name: "GIFTING",
    alt: "gifting plant",
  },
];
