import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { TopTitle } from "../TopTitle/TopTitle";
import { Carousel } from "../Carousel/Carousel";

import { ProductContent } from "./ProductPage.styled";

export const ProductPage = ({ product }) => {
  document.title = product.title;
  return (
    <>
      <Header />
      <TopTitle text={product.title} spanText={product.spanText} />
      <section>
        <ProductContent>
          <div>{product.mainText}</div>
          <div>
            <img src={product.mainImg} alt={product.mainAlt} />
          </div>
        </ProductContent>
      </section>
      <section>
        <Carousel imgList={product.imgList} />
      </section>
      <Footer />
    </>
  );
};
