import type { Data } from "~/types/types.d";

import { Container } from "./container";
import { Tittle } from "./sectionTittle";
import { useCallback, useEffect, useState } from "react";
import { Card } from "./card";

const fetchData = async (): Promise<Data[]> => {
  const res = await fetch(
    "http://localhost:8088/v1/planters?pageNumber=0&pageSize=4"
  );

  /* eslint-disable */
  return res.json();
  /* eslint-enable */
};

export const Planters: React.FC = () => {
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
      <Tittle tittle="Planters" position="center" />
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
