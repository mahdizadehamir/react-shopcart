import React, { useContext } from "react";
import { Link } from "react-router-dom";
//functions
import { shorten, isInCart, quantityFilter } from "../../helper/functions";
//context
import { CartContext } from "../../Context/CartContextProvider";
//svg
import trash from "../../asset/icons/trash.svg";
//animation
import "animate.css";
const Product = ({ productData }) => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div className="lg:w-60 sm:w-28 w-64 flex flex-col justify-center items-center border-solid border-2 border-gray-400 p-3 bg-white rounded-lg ">
      <img className="w-48 h-52" src={productData.image} alt="product" />
      <h3 className="self-start my-3">{shorten(productData.title)}</h3>
      <p className="self-start my-3">{productData.price} $</p>
      <div className="flex flex-row justify-between items-center w-full ">
        <Link className="inline-block" to={`/products/${productData.id}`}>
          Details
        </Link>
        <div className="flex flex-row  items-center justify-center h-10">
          {quantityFilter(state, productData.id) ? (
            quantityFilter(state, productData.id) > 1 ? (
              <button
                className="bg-blue-500 text-white rounded-md px-2 font-black text-center w-10 h-10 text-3xl hover:bg-blue-700 transition-colors"
                onClick={() =>
                  dispatch({ type: "DECREASE", payload: productData })
                }
              >
                -
              </button>
            ) : (
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_ITEM", payload: productData })
                }
              >
                <img
                  className="bg-blue-500   font-bold w-10 rounded-md p-2  animate__animated animate__fadeInUp  hover:bg-blue-700 transition-colors "
                  src={trash}
                  alt="trash"
                />
              </button>
            )
          ) : null}

          {quantityFilter(state, productData.id) && (
            <span className="text-lg text-center mx-2 text-blue-400 font-extrabold w-4 block">
              {quantityFilter(state, productData.id)}
            </span>
          )}

          {isInCart(state, productData.id) ? (
            <button
              className="bg-blue-500 text-white rounded-md px-2 font-black text-center w-10 h-10 text-3xl animate__animated animate__fadeInUp  hover:bg-blue-700 transition-colors"
              onClick={() =>
                dispatch({ type: "INCREASE", payload: productData })
              }
            >
              +
            </button>
          ) : (
            <button
              className="px-4 py-2 text-sm font-bold bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors "
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: productData })
              }
            >
              ADD TO CART
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
