import Image from "next/image";

import { cartIcon, profileIcon } from "~/assets";

export const MiniHeader: React.FC = () => {
  const DISCOUNT_PHRASE =
    "Use code FIRST50 for a 50% discount on your first order!";

  return (
    <div className="flex h-10 items-center justify-end bg-dark-green">
      <p className="absolute left-1/3 top-2 text-white">{DISCOUNT_PHRASE}</p>
      <div className="flex px-28">
        <Image src={cartIcon} alt="shop cart" />
        <Image src={profileIcon} alt="avatar profile icon" className="ml-14" />
      </div>
    </div>
  );
};
