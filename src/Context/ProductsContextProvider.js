import React, { createContext } from "react";
import { useState, useEffect } from "react";

//api
import { getProducts } from "../services/api";

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setProducts(await getProducts());
    };
    fetchApi();
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
