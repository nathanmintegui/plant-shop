import type { StaticImageData } from "next/image";

import {
  airPureBestSelling,
  blogCardFirstVariaton,
  blogCardSecondVariation,
  bonsaiCategory,
  cactusCategory,
  creepersCategory,
  floweringBestSelling,
  giftingCategory,
  indoorBestSelling,
  seedsCategory,
  succulentsCategory,
} from "~/assets";

export interface IProps {
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

export const blogs = [
  {
    image: blogCardFirstVariaton,
    name: "8 Best Low Maintenance Plants For a Busy Home",
    alt: "Person writing on a paper",
  },
  {
    image: blogCardSecondVariation,
    name: "Air Purifying Plants You Should Take Home Today",
    alt: "Paper with a pen on a table and plants around",
  },
];
