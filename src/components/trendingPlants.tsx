import { useCallback, useEffect, useState } from "react";

import { Container } from "./container";
import { Card } from "./card";
import { Tittle } from "./sectionTittle";
import { type Data } from "~/types/types.d";

const fetchData = async (): Promise<Data[]> => {
  const res = await fetch(
    "http://localhost:8080/v1/trending?pageNumber=0&pageSize=8"
  );

  /* eslint-disable */
  return res.json();
  /* eslint-enable */
};

export const TrendingPlants: React.FC = () => {
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
      <Tittle tittle="Trending Plants" position="left" />
      <div className="flex flex-wrap justify-between">
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </Container>
  );
};
