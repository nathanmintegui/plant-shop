import { useCallback, useEffect, useState } from "react";

import Image from "next/image";
import type { StaticImageData } from "next/image";

import { Tittle } from "./sectionTittle";
import { Container } from "./container";

type DataProps = {
  id: number;
  name: string;
  description: string;
  image: StaticImageData;
  price: number;
  generalCategory: number;
};

const fetchData = async (): Promise<DataProps[]> => {
  const res = await fetch(
    "http://localhost:8080/v1/services?pageNumber=0&pageSize=1"
  );

  /* eslint-disable */
  return res.json();
  /*  eslint-enable*/
};

export const Services: React.FC = () => {
  const [data, setData] = useState<DataProps>([]);

  const handleData = useCallback(async () => {
    const res = await fetchData();

    const firstItem = res.filter((item) => typeof item !== undefined).shift();

    setData(firstItem);
  }, []);

  useEffect(() => {
    /* eslint-disable */
    handleData();
    /* eslint-enable */
  }, [handleData]);

  return (
    <Container className="my-20 flex items-center justify-between">
      <div className="w-4/12">
        <Tittle tittle={data.name} position="left" />
        <p className="pb-10 font-sans text-2xl font-normal text-black">
          {data.description}
        </p>
        <button className="h-16 w-64 rounded-lg bg-button-green text-center font-sans text-xl font-bold text-white">
          Book Now!
        </button>
      </div>
      <Image
        src={data.image}
        alt=""
        className="rounded-2xl"
        width={500}
        height={400}
      />
    </Container>
  );
};
