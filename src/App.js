import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Review from "./components/Review/Review";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Manage from "./components/Manage/Manage";
import {CartProvider} from './context/CartProvider';

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
