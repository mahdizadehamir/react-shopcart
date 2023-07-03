import React, { useContext } from "react";
// Context
import { ProductsContext } from "../Context/ProductsContextProvider";
import { Link, useParams } from "react-router-dom";

const ProductDetails = (props) => {
  const params = useParams();
  const id = params.id;
  const data = useContext(ProductsContext);
  const product = data[id - 1];
  const { image, title, description, price, category } = product;
  return (
    <div className="flex md:flex-row md:justify-center md:items-center gap-3  flex-col mt-24 bg-white px-2 ">
      <img className=" w-full object-cover" src={image} alt="product" />
      <div className="mt-5 border border-solid border-gray-400 rounded-md flex flex-col gap-4 px-3 h-fit py-3">
        <h3 className="text-xl text-blue-500 font-bold">{title}</h3>
        <p className="mt-4">{description}</p>
        <p className="text-yellow-400 font-bold text-xl">
          Category : <span className="text-black text-lg">{category}</span>
        </p>
        <div className="flex flex-row justify-around ">
          <span className="bg-green-600 p-3 text-white font-extrabold text-lg rounded-md">{price} $</span>
          <Link className="text-white bg-blue-500 p-3 text-lg font-extrabold rounded-md" to="/products">Back To Shop</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
