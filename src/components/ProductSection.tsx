import Image from "next/image";
import { Container } from "./container";
import { useState } from "react";

const DEFAULT_PRODUCT_QUANTITY = 1 as const;
const INITIAL_PRODUCT_QUANTITY = 1 as const;

const ProductSection = ({ params }) => {
  console.log(params);
  const [quantity, setQuantity] = useState<number>(INITIAL_PRODUCT_QUANTITY);

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

  return (
    <Container className="mb-16 flex justify-between">
      <section className="flex flex-col">
        <Image src={""} alt="" className="" />
        <div className="flex">
          <Image src={""} alt="" className="" />
          <Image src={""} alt="" className="" />
          <Image src={""} alt="" className="" />
          <Image src={""} alt="" className="" />
          <Image src={""} alt="" className="" />
          <Image src={""} alt="" className="" />
        </div>
      </section>

      <section>
        <h1 className="font-sans text-3xl font-bold">Hoya Linearis</h1>
        <p className="font-sans text-3xl font-normal">$ 350</p>
        <p className="font-sans text-xl font-normal text-gray-500">
          With rounded light green and white-striped leaves, the Calathea
          Orbifolia is a decorative and unique houseplant.
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
        <p className="text-gray-500">
          Enter your Pincode to check delivery time.
        </p>
        <form className="flex">
          <input type="text" />
          <button className="pl-5 text-xl font-semibold text-green-700">
            CHECK
          </button>
        </form>
      </section>
    </Container>
  );
};

export default ProductSection;
