import { useCallback, useEffect, useState } from "react";
import { type Data } from "~/types/types.d";
import { Container } from "./container";
import { Tittle } from "./sectionTittle";
import { Card } from "./card";

const fetchData = async (): Promise<Data[]> => {
  // TODO render only 4 items
  const res = await fetch("http://localhost:3000/api/plants");

  /* eslint-disable */
  return res.json();
  /* eslint-enable */
};

const YouMayAlsoLike = () => {
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
      <Tittle tittle="You May Also Like..." position="center" />
      <div className="flex justify-between">
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </Container>
  );
};

export default YouMayAlsoLike;
