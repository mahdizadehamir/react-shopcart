import { Navigate, Route, Routes } from "react-router-dom";
import Store from "./components/Store";
//Context
import ProductsContextProvider from "./Context/ProductsContextProvider";
//components
import Navbar from "./components/shared/Navbar";
import ShopCart from "./components/ShopCart";
import ProductDetails from "./components/ProductDetails";
import CartContextProvider from "./Context/CartContextProvider";
function App() {
  return (
    <div className="App container mx-auto">
      <ProductsContextProvider>
        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/products" element={<Store />} />
            <Route path="/cart" element={<ShopCart />} />
            <Route path="/*" element={<Navigate to="/products" />} />
          </Routes>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
