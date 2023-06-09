import Image from "next/image";

import { maexCard, masterCard, rupayCard, visaCard } from "~/assets";

import { Container } from "./container";

export const MiniFooter = () => {
  return (
    <Container className="flex h-14 items-center justify-center bg-dark-green">
      <p className="mr-16 text-white">
        We facilitate your payments through trusted gateways
      </p>
      <div className="flex w-2/12 justify-between">
        <Image src={visaCard} alt="visa card" />
        <Image src={masterCard} alt="mastercard" />
        <Image src={maexCard} alt="maexCard" />
        <Image src={rupayCard} alt="rupayCard" />
      </div>
    </Container>
  );
};
