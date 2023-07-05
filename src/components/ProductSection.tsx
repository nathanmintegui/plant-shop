import Image from "next/image";
import { Container } from "./container";
import { useState } from "react";
import { arrowLeft, arrowRight } from "~/assets";

const DEFAULT_PRODUCT_QUANTITY = 1 as const;
const INITIAL_PRODUCT_QUANTITY = 1 as const;

type ParamsProps = {
  params: Props;
};

type Props = {
  productId: number;
  produtName: string;
  productImage: string;
  productDescription: string;
  productPrice: number;
};

const ProductSection = ({ params }: ParamsProps) => {
  const images = [
    params.productImage,
    params.productImage,
    params.productImage,
    params.productImage,
  ];

  const [quantity, setQuantity] = useState<number>(INITIAL_PRODUCT_QUANTITY);
  const [deliveryTime, setDeliveryTime] = useState<boolean>(false);

  const handleIncreaseQuantityClick = () => {
    setQuantity((olderQuantity) => olderQuantity + DEFAULT_PRODUCT_QUANTITY);
  };

  const handleDecreaseQuantityClick = () => {
    if (quantity === INITIAL_PRODUCT_QUANTITY) {
      return;
    } else {
      setQuantity((olderQuantity) => olderQuantity - DEFAULT_PRODUCT_QUANTITY);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDeliveryTime(!deliveryTime);
  };

  const renderDeliveryPrevistion = (deliveryTime: boolean) => {
    if (!deliveryTime) {
      return;
    }

    return (
      <div className="mt-5 rounded-lg border border-gray-700 p-2 text-gray-700">
        <p className="w-5/12">
          Delivery available for this loaction. Typically delivered in 5-7
          working days. Standard Delivery.
        </p>
      </div>
    );
  };

  return (
    <Container className="mb-16 flex w-screen">
      <section className="flex w-1/2 flex-col">
        <Image
          src={params.productImage}
          alt=""
          className=""
          width={250}
          height={250}
        />
        <div className="flex">
          <Image src={arrowLeft} alt="arrow left" />
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt=""
              className=""
              width={100}
              height={100}
            />
          ))}
          <Image src={arrowRight} alt="arrow right" />
        </div>
      </section>

      <section className="w-1/2">
        <h1 className="font-sans text-3xl font-bold">{params.produtName}</h1>
        <p className="my-3 font-sans text-3xl font-normal">
          $ {params.productPrice}
        </p>
        <p className="font-sans text-xl font-normal text-gray-500">
          {params.productDescription}
        </p>
        <div className="my-10 flex gap-16">
          <div className="flex items-center">
            <p className="pr-5">Quantity</p>
            <div className="flex justify-between gap-3 rounded border-2 border-black">
              <button
                className="pressed-arrow px-1"
                onClick={handleDecreaseQuantityClick}
              >
                -
              </button>
              <p>{quantity}</p>
              <button
                className="pressed-arrow px-1"
                onClick={handleIncreaseQuantityClick}
              >
                +
              </button>
            </div>
          </div>
          <div>
            <form>
              <label>
                Include Planter
                <select className="ml-5 gap-1 rounded border-2 border-black bg-transparent px-2 py-1">
                  <option value="">Yes</option>
                  <option value="">No</option>
                </select>
              </label>
            </form>
          </div>
        </div>
        <button className="h-16 w-80 gap-3 rounded-lg bg-button-green text-xl font-bold text-white">
          Add to Cart
        </button>
        <p className="mt-10 text-xl font-semibold text-black">Delivery</p>
        <p className="mb-3 text-gray-500">
          Enter your Pincode to check delivery time.
        </p>
        <form className="flex" onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-2/12 rounded border-2 border-black bg-transparent p-1"
          />
          <button className="pl-5 text-xl font-semibold text-green-700">
            CHECK
          </button>
        </form>
        {renderDeliveryPrevistion(deliveryTime)}
      </section>
    </Container>
  );
};

export default ProductSection;
