import { Router, Routes, Route } from "react-router-dom";
import { Contact } from "../pages/contact/Contact";
import { Home } from "../pages/home/Home";
import { Construction } from "../pages/construction/Construction";
import { Techs } from "../pages/techs/Techs";
import { ProductPage } from "../components/ProductPage/ProductPage";

import { productPages } from "../utils/utils";

export const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/techs" element={<Techs />} />
        <Route path="/construction" element={<Construction />} />
        {productPages.map((item, index) => (
          <Route
            key={index}
            path={item.url}
            element={<ProductPage product={item} />}
          />
        ))}
      </Routes>
    </Router>
  );
};
