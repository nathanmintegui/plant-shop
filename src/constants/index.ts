import type { StaticImageData } from "next/image";

import {
  airPureBestSelling,
  blogCardFirstVariaton,
  blogCardSecondVariation,
  bonsaiCategory,
  cactusCategory,
  celeb1,
  celeb2,
  celeb3,
  celeb4,
  celeb5,
  celeb6,
  celeb7,
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

export const celebs: IProps[] = [
  {
    image: celeb1,
    name: "Celeb 1",
    alt: "Celeb 1",
  },
  {
    image: celeb2,
    name: "Celeb 2",
    alt: "Celeb 2",
  },
  {
    image: celeb3,
    name: "Celeb 3",
    alt: "Celeb 3",
  },
  {
    image: celeb4,
    name: "Celeb 4",
    alt: "Celeb 4",
  },
  {
    image: celeb5,
    name: "Celeb 5",
    alt: "Celeb 5",
  },
  {
    image: celeb6,
    name: "Celeb 6",
    alt: "Celeb 6",
  },
  {
    image: celeb7,
    name: "Celeb 7",
    alt: "Celeb 7",
  },
];
