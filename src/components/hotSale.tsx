import { useCallback, useEffect, useState } from "react";

import type { StaticImageData } from "next/image";

import { Tittle } from "./sectionTittle";

import { Container } from "./container";
import { Card } from "./card";

type Data = {
  id: number;
  name: string;
  image: string;
  description: string;
  generalCategory: number;
  specificCategory: number;
  price: number;
  isHotSale: boolean;
};

const fetchData = async (): Promise<Data[]> => {
  const res = await fetch("http://localhost:3000/api/hot-sales");

  /* eslint-disable */
  return res.json();
  /* eslint-enable */
};

export const HotSale: React.FC = () => {
  const [data, setData] = useState<Data[] | []>([]);

  const handleData = useCallback(async () => {
    const res = await fetchData();

    setData(res);
  }, []);

  useEffect(() => {
    /* eslint-disable */
    handleData();
    /* eslint-enable */
  }, [handleData]);

  return (
    <Container className="flex flex-col">
      <Tittle tittle="Hot Sale" position="center" />
      <div className="flex flex-wrap justify-between">
        {data.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            alt="alt"
            name={item.name}
            price={item.price}
            hasDescount={true}
          />
        ))}
      </div>
    </Container>
  );
};
