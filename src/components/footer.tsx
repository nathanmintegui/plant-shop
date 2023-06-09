import Image from "next/image";

import {
  compantBadge,
  facebookIcon,
  instagramIcon,
  papLogoFooter,
  twitterIcon,
} from "~/assets";

import { Container } from "./container";

export const Footer = () => {
  const QuickLinks = () => {
    return (
      <div className="text-white">
        <p className="mb-3 font-bold">Quick Links</p>
        <p>About Us</p>
        <p>Bulk Order</p>
        <p>Gifts</p>
        <p>Organic Garden</p>
      </div>
    );
  };

  const Legal = () => {
    return (
      <div className="text-white">
        <p className="mb-3 font-bold">Legal</p>
        <p>T&C</p>
        <p>Privacy Policy</p>
        <p>Returns</p>
        <p>Shipping</p>
        <p>Cancellation</p>
      </div>
    );
  };

  const Support = () => {
    return (
      <div className="text-white">
        <p className="mb-3 font-bold">Support</p>
        <p>FAQS</p>
        <p>Contact Us</p>
      </div>
    );
  };

  return (
    <Container className="flex h-80 items-center justify-between bg-light-green">
      <Image alt="Plan a plant" src={papLogoFooter} />
      <div className="flex w-4/12 justify-between">
        <QuickLinks />
        <Legal />
        <Support />
      </div>
      <Image alt="" src={compantBadge} />
      <div className="w-44">
        <div className="mb-10 text-white">
          © 2021 Plan A Plant All Rights Reserved
        </div>
        <div className="flex justify-between">
          <Image alt="facebook" src={facebookIcon} />
          <Image alt="twitter" src={twitterIcon} />
          <Image alt="instagram" src={instagramIcon} />
        </div>
      </div>
    </Container>
  );
};
