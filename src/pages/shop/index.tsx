import { type NextPage } from "next";
import { Container } from "~/components/container";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { MenuBar } from "~/components/menuBar";
import { MiniFooter } from "~/components/miniFooter";
import { MiniHeader } from "~/components/miniHeader";

const Products: React.FC = () => {
  return (
    <div className="w-screen">
      <h1>Products</h1>
    </div>
  );
};

const Shop: NextPage = () => {
  return (
    <div>
      <MiniHeader />
      <Header />

      <Container className="flex gap-20">
        <MenuBar />
        <Products />
      </Container>

      <Footer />
      <MiniFooter />
    </div>
  );
};

export default Shop;
