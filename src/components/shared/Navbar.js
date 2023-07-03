import React, { useContext } from "react";
//context
import { CartContext } from "../../Context/CartContextProvider";
import { Link } from "react-router-dom";
//icons
import basket from "../../asset/icons/basket.svg";
const Navbar = () => {
  const { state } = useContext(CartContext);
  return (
    <div className=" flex flex-row justify-between items-center fixed top-0 container  bg-white h-20 shadow-md px-4 py-1 z-10">
      <div>
        <Link className="text-lg text-blue-600 font-bold underline" to="/products">
          Products
        </Link>
      </div>
      <div className="relative">
        <Link to="/cart">
          <img src={basket} alt="basket" width={"30px"} />
        </Link>
        <span className="absolute top-0 -right-2 text-white bg-blue-600 rounded-full text-xs py-0.5 px-1 font-bold ">
          {state.itemsCounter}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
