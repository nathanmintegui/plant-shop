import { type NextPage } from "next";
import Image from "next/image";

import { heroBanner } from "~/assets";

import { BestSelling } from "~/components/bestSelling";
import { Blogs } from "~/components/blogs";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { HotSale } from "~/components/hotSale";
import { MiniFooter } from "~/components/miniFooter";
import { MiniHeader } from "~/components/miniHeader";
import { PlantCategories } from "~/components/plantCategories";
import { Planters } from "~/components/planters";
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
      <Blogs />
      <HotSale />
      <Planters />
      <Services />
      <Footer />
      <MiniFooter />
    </div>
  );
};

export default Home;
