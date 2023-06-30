import { type MouseEventHandler, useState } from "react";

import Image from "next/image";

import { arrowDown } from "~/assets";

//todo fetch plant categories from api?
const plantCategories = [
  {
    category: "Indoor Plants",
    subCategory: ["Maidenhair Fern", "Kentia Palm", "Snake Plant", "Others"],
  },
  {
    category: "Outdoor Plants",
    subCategory: [],
  },
  {
    category: "Indoor Plants",
    subCategory: [],
  },
];

type CategoriesProps = {
  isSubCategoryOpen: boolean;
  handleSubCategoryClick: MouseEventHandler<HTMLElement>;
};

type ShowSubCategoriesProps = {
  subCategory: string[];
};

const Categories = ({
  isSubCategoryOpen,
  handleSubCategoryClick,
}: CategoriesProps) => {
  const showSubCategories = (
    isSubCategoryOpen: boolean,
    item: ShowSubCategoriesProps
  ) => {
    if (isSubCategoryOpen) {
      return item.subCategory.map((subCategory: string, index: number) => (
        <a key={index} className="pl-16">
          {subCategory}
        </a>
      ));
    }
    return;
  };

  return (
    <div className="flex flex-col">
      {plantCategories.map((item, index) => (
        <div key={index} className="flex flex-col">
          <div className="flex pl-5">
            <Image
              src={arrowDown}
              alt="arrow down"
              className="pressed-arrow mr-2"
              onClick={handleSubCategoryClick}
            />
            <h1 className="font-bold">{item.category}</h1>
          </div>
          {showSubCategories(isSubCategoryOpen, item)}
        </div>
      ))}
    </div>
  );
};

const AllCategories: React.FC = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState<boolean>(false);
  const [isSubCategoryOpen, setIsSubCategoryOpen] = useState<boolean>(false);

  const handleCategoryClick = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const handleSubCategoryClick = () => {
    setIsSubCategoryOpen(!isSubCategoryOpen);
  };

  return (
    <>
      <div className="menu-bar-label flex w-64 flex-col justify-between">
        <div className="flex justify-between">
          <p>All Categories</p>
          <Image
            src={arrowDown}
            alt="arrow down"
            onClick={handleCategoryClick}
            className="pressed-arrow"
          />
        </div>
        {isCategoryOpen && (
          <Categories
            isSubCategoryOpen={isSubCategoryOpen}
            handleSubCategoryClick={handleSubCategoryClick}
          />
        )}
      </div>
    </>
  );
};

export const MenuBar = () => {
  return (
    <div className="w-1/3">
      <AllCategories />
      <div className="menu-bar-label flex w-64 justify-between">
        <p>Price</p>
        <Image src={arrowDown} alt="arrow right" />
      </div>
      <div className="menu-bar-label flex w-64 justify-between">
        <p>Include</p>
        <Image src={arrowDown} alt="arrowDown" />
      </div>
    </div>
  );
};
