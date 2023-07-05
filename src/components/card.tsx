import Image from "next/image";
import { type NextRouter, useRouter } from "next/router";
import { type Data } from "~/types/types.d";

export const Card: React.FC<Data> = ({
  id,
  name,
  image,
  description,
  price,
}: Data) => {
  const router: NextRouter = useRouter();

  const handleClick = async () => {
    await router.push({
      pathname: "/product",
      query: {
        productId: id,
        produtName: name,
        productImage: image,
        productDescription: description,
        productPrice: price,
      },
    });
  };

  return (
    <div className="mb-5 flex h-80 w-96 flex-col items-center justify-center rounded-2xl bg-white">
      <div className="">
        <Image
          src={image}
          alt={`${name} image`}
          className="rounded-lg"
          width={100}
          height={50}
        />
        <h1 className="font-sans font-bold">{name}</h1>
        <p className="font-sans font-normal">$ {price}</p>
        <button
          className="h-16 w-64 rounded-lg bg-button-green text-center font-sans font-bold text-white"
          onClick={handleClick}
        >
          Buy
        </button>
      </div>
    </div>
  );
};
