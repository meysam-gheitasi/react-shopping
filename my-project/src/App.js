// Products Context
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProductsDetails from "./components/ProductsDetails";
import ShopCart from "./components/ShopCart";
import CartContextProvider from "./context/CartContextProvider";
import ProductsContextProvider from "./context/ProductsContextProvider";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="flex justify-center">
      <ProductsContextProvider>
        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ShopCart" element={<ShopCart />} />
            <Route path="/products/:id" element={<ProductsDetails />} />
          </Routes>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
