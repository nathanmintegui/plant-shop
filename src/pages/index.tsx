import { type NextPage } from "next";
import { Header } from "~/components/header";
import { MiniHeader } from "~/components/miniHeader";

const Home: NextPage = () => {
  return (
    <div>
      <MiniHeader />
      <Header />
    </div>
  );
};

export default Home;
