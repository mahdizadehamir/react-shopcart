import React, { useContext } from "react";
import { ProductsContext } from "../Context/ProductsContextProvider";
import Product from "./shared/Product";
const Store = () => {
  const products = useContext(ProductsContext);
  return (
    <div className="flex  md:flex-row lg:flex-row flex-col flex-wrap justify-between mt-32 items-center gap-20 ">
      {products.map((product) => (
        <Product key={product.id} productData={product} />
        
      ))}
    </div>
  );
};

export default Store;
