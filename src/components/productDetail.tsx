import React, { useState } from "react";

import Image, { type StaticImageData } from "next/image";

import { arrowRight } from "~/assets";
import { Container } from "./container";

type MenuProps = {
  onClick: () => void;
};

type TabProps = {
  name: string;
  onClick: () => void;
};

const Detail = () => {
  return (
    <Container className="absolute top-20 z-10 w-screen">
      <div className="flex flex-col items-start gap-3 rounded-2xl bg-white p-6 text-xl text-black">
        <div>
          <h1 className="font-bold">Weekly Watering</h1>
          <p className="text-gray-500">
            Calatheas enjoy weekly waterings, allowing the top 2’ of soil to dry
            out partially. In winter, we recommend watering less frequently to
            prevent overwatering and root rot. This plant is not very drought
            tolerant, and extended periods of dryness will cause leaf edges to
            brown.
          </p>
        </div>
        <div>
          <h1 className="font-bold">Light Requirements</h1>
          <p className="text-gray-500">
            alatheas thrive in medium, indirect sunlight but tolerate lower
            light levels too. Bright direct sunlight can cause the stunning
            colours on their leaves to fade, with prolonged exposure likely to
            burn and scorch their leaves.
          </p>
        </div>
        <div>
          <h1 className="font-bold">Humidity</h1>
          <p className="text-gray-500">
            Your Calathea will also appreciate being placed in a humid
            environment, which you can create with by misting it frequently,
            placing it close to other plants or on a pebble tray partly filled
            with water. Calatheas thrive in steamy bathrooms and kitchens.
          </p>
        </div>
      </div>
    </Container>
  );
};

const Tab: React.FC<TabProps> = ({ name, onClick }: TabProps) => {
  return (
    <div
      className="pressed-animation flex cursor-pointer gap-3"
      onClick={onClick}
    >
      <Image src={arrowRight as StaticImageData} alt="arrow right" />
      <div>
        <p className="text-xl font-semibold">{name}</p>
      </div>
    </div>
  );
};

const Menu: React.FC<MenuProps> = ({ onClick }: MenuProps) => {
  return (
    <Container className="absolute top-10 z-10 flex w-4/12 justify-between text-white">
      <Tab name="Care Guide" onClick={onClick} />
      <Tab name="Plant Bio" onClick={onClick} />
      <Tab name="Reviews" onClick={onClick} />
    </Container>
  );
};

const ProductDetail = () => {
  const [isDetailsVisible, setIsDetailsVisible] = useState<boolean>(false);

  const renderDetail = (isDetailsVisible: boolean) => {
    if (isDetailsVisible) {
      return <Detail />;
    }
  };

  const handleTabClick = (): void => {
    setIsDetailsVisible(!isDetailsVisible);
  };

  return (
    <div className="bg-section-background w-screen">
      <Menu onClick={handleTabClick} />
      {renderDetail(isDetailsVisible)}
    </div>
  );
};

export default ProductDetail;
