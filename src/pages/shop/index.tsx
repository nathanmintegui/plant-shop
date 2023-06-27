import { type NextPage } from "next";
import { Container } from "~/components/container";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { MiniFooter } from "~/components/miniFooter";
import { MiniHeader } from "~/components/miniHeader";

const MenuBar: React.FC = () => {
  return (
    <div className="w-1/3">
      <div>All categories</div>
      <div>Price</div>
      <div>Include</div>
    </div>
  );
};

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
