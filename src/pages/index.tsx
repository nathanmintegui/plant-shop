import { type NextPage } from "next";
import Image from "next/image";
import { heroBanner } from "~/assets";
import { Header } from "~/components/header";
import { MiniHeader } from "~/components/miniHeader";
import { PlantCategories } from "~/components/plantCategories";

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
      <PlantCategories />
    </div>
  );
};

export default Home;
