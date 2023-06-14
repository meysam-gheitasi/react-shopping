
// Products Context
import Home from "./components/Home";
import ProductsContextProvider from "./context/ProductsContextProvider";

function App() {
  return (
    <div>
      <ProductsContextProvider>
        <Home />
      </ProductsContextProvider>
    </div>
  );
}

export default App;
