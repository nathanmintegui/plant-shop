import { type NextPage } from "next";
import Image from "next/image";
import { heroBanner } from "~/assets";
import { Header } from "~/components/header";
import { MiniHeader } from "~/components/miniHeader";

const Home: NextPage = () => {
  return (
    <div>
      <MiniHeader />
      <Header />
      <Image
        src={heroBanner}
        alt="plan a plant betwen many tree leafs"
        className="w-screen"
      />
    </div>
  );
};

export default Home;
