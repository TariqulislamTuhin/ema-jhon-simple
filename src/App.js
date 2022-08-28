import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Manage from "./components/Manage/Manage";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Review from "./components/Review/Review";
import Shop from "./components/Shop/Shop";
import { CartProvider } from "./context/CartProvider";

function App() {
  return (
    
      <CartProvider>
        <Header></Header>
          <Routes>
            <Route path="/" element={<Shop />}></Route>
            <Route path="/review" element={<Review />}></Route>
            <Route path="/manage" element={<Manage />} />
            <Route path="/product-details/:id" element={<ProductDetails />} />
            <Route path="*" element={<Shop />}></Route>
          </Routes>
      </CartProvider>
    
  );
}

export default App;
