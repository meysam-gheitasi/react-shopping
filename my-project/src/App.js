// Products Context
import Home from "./components/Home";
import ProductsContextProvider from "./context/ProductsContextProvider";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="flex justify-center">
      <ProductsContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
