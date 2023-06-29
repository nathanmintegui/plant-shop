import { type NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { arrowDown } from "~/assets";
import { Container } from "~/components/container";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { MiniFooter } from "~/components/miniFooter";
import { MiniHeader } from "~/components/miniHeader";

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

const AllCategories: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="menu-bar-label flex w-64 flex-col justify-between">
        <div className="flex justify-between">
          <p>All Categories</p>
          <Image src={arrowDown} alt="arrow down" onClick={handleClick} />
        </div>
        <div className="flex flex-col">
          {plantCategories.map((item, index) => (
            <div key={index} className="flex flex-col">
              <h1 className="pl-5 font-bold">{item.category}</h1>
              {item.subCategory.map((subCategory, index) => (
                <a key={index} className="pl-10">
                  {subCategory}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const MenuBar: React.FC = () => {
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

const Products: React.FC = () => {
  return (
    <div className="w-screen">
      <h1>Products</h1>
    </div>
  );
};

const Shop: NextPage = () => {
  return (
    <div>
      <MiniHeader />
      <Header />

      <Container className="flex gap-20">
        <MenuBar />
        <Products />
      </Container>

      <Footer />
      <MiniFooter />
    </div>
  );
};

export default Shop;
