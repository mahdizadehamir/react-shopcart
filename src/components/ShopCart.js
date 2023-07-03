import React, { useContext } from "react";
//Context
import { CartContext } from "../Context/CartContextProvider";
//components
import Cart from "./shared/Cart";
//Router
import { Link } from "react-router-dom";

const ShopCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div className="relative">
      <div>
        {state.selectedItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>
      <div className=" md:float-right md:absolute md:top-20 md:right-11 bg-white  rounded-md px-3 py-2 max-h-fit">
        {state.itemsCounter > 0 && (
          <div className="flex flex-col justify-between gap-10">
            <p>
              <span className="font-bold text-xl text-blue-500  ">Total Items: </span>
              {state.itemsCounter}
            </p>
            <p>
              <span className="font-bold text-xl text-blue-500  ">Total Price: </span>
              {state.totalPrice} $
            </p>
            <div>
              <button className="p-3 mx-2 bg-green-500 text-white rounded-md" onClick={() => dispatch({ type: "CHECKOUT" })}>
                CHECKOUT
              </button>
              <button className="text-green-500 text-xl" onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
            </div>
          </div>
        )}
        {state.checkout && (
          <div>
            <h3>You Checked Out Successfully</h3>
            <Link to="/products">Buy More?</Link>
          </div>
        )}
        {!state.checkout && state.itemsCounter === 0 && (
          <div>
            <h3>Want To Buy?</h3>
            <Link to="/products">Go Back To Shop</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopCart;
