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
    <ProductsContextProvider>
      <CartContextProvider>
        <div className="bg-slate-300 w-full overflow-hidden">
          <div className="sm:px-16 px-6 flex justify-center items-center ">
            <div className="w-full xl:max-w-[1280px]">
              <Navbar />
            </div>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shopcart" element={<ShopCart />} />
            <Route path="/products/:id" element={<ProductsDetails />} />
          </Routes>

        </div>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
