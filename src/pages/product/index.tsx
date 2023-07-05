import { type NextPage } from "next";
import { useRouter } from "next/router";
import ProductSection from "~/components/ProductSection";
import { Container } from "~/components/container";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { MiniFooter } from "~/components/miniFooter";
import { MiniHeader } from "~/components/miniHeader";

const ProductDetail = () => {
  return <></>;
};

const YouMayAlsoLike = () => {
  return <></>;
};

const Product: NextPage = () => {
  const router = useRouter();
  const params = router.query;

  return (
    <div>
      <MiniHeader />
      <Header />

      <Container className="flex flex-col items-center">
        <ProductSection params={params} />
        <ProductDetail />
        <YouMayAlsoLike />
      </Container>

      <MiniFooter />
      <Footer />
    </div>
  );
};

export default Product;
