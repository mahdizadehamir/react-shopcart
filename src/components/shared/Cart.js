import React, { useContext } from "react";
//functions
import { shorten } from "../../helper/functions";
//context
import { CartContext } from "../../Context/CartContextProvider";
//icons
import trashIcon from "../../asset/icons/trash.svg";
const Cart = (props) => {
  const { title, image, quantity, price } = props.data;
  const { dispatch } = useContext(CartContext);
  return (
    <div className="first-of-type:mt-32">
      <div className="flex md:flex-row md:justify-between md:w-2/3 flex-col items-center justify-center bg-white border border-solid  rounded-md py-2 px-10 mx-3 border-gray-300 shadow-md mb-10 md:gap-14">
        <img className="w-32 h-40" src={image} alt="product" />
        <div>
          <p className="text-lg text-blue-500 font-bold">{shorten(title)}</p>
          <p className="text-lg mt-3 text-green-500 font-bold text-center">
            {price} $
          </p>
        </div>
        <div className="bg-yellow-400 rounded-md p-2">
          <span className="text-white font-bold">{quantity}</span>
        </div>
        <div className="flex flex-row">
          {quantity > 1 ? (
            <button
              className="bg-blue-500 text-white rounded-md px-2 font-black text-center w-10 h-10 text-3xl animate__animated animate__fadeInUp  hover:bg-blue-700 transition-colors mx-2"
              onClick={() => {
                dispatch({ type: "DECREASE", payload: props.data });
              }}
            >
              -
            </button>
          ) : (
            <button
              
              onClick={() => {
                dispatch({ type: "REMOVE_ITEM", payload: props.data });
              }}
            >
              <img className="bg-blue-500   font-bold w-10 rounded-md p-2  animate__animated animate__fadeInUp  hover:bg-blue-700 transition-colors mx-2"  src={trashIcon} alt="trash" width="15px" />
            </button>
          )}
          <button
          className="bg-blue-500 text-white rounded-md px-2 font-black text-center w-10 h-10 text-3xl animate__animated animate__fadeInUp  hover:bg-blue-700 transition-colors"
            onClick={() => {
              dispatch({ type: "INCREASE", payload: props.data });
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
