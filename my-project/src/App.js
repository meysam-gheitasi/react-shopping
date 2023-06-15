// Products Context
import Home from "./components/Home";
import ProductsDetails from "./components/ProductsDetails";
import CartContextProvider from "./context/CartContextProvider";
import ProductsContextProvider from "./context/ProductsContextProvider";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="flex justify-center">
      <ProductsContextProvider>
        <CartContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductsDetails />} />
        </Routes>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
