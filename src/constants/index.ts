import type { StaticImageData } from "next/image";

import {
  airPureBestSelling,
  bonsaiCategory,
  cactusCategory,
  creepersCategory,
  floweringBestSelling,
  giftingCategory,
  indoorBestSelling,
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

export const bestSelling: IProps[] = [
  {
    image: indoorBestSelling,
    name: "INDOOR PLANTS",
    alt: "indoor plants",
  },
  {
    image: airPureBestSelling,
    name: "AIR PURIFYING PLANTS",
    alt: "air purifying plants",
  },
  {
    image: floweringBestSelling,
    name: "FLOWERING PLANTS",
    alt: "flowering plants",
  },
];
