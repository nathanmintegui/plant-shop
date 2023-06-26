import { type NextPage } from "next";
import Image from "next/image";
import { heroBanner } from "~/assets";
import { BestSelling } from "~/components/bestSelling";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { MiniFooter } from "~/components/miniFooter";
import { MiniHeader } from "~/components/miniHeader";
import { PlantCategories } from "~/components/plantCategories";
import { Services } from "~/components/services";
import { TrendingPlants } from "~/components/trendingPlants";

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
      <BestSelling />
      <TrendingPlants />
      <Services />
      <Footer />
      <MiniFooter />
    </div>
  );
};

export default Home;
