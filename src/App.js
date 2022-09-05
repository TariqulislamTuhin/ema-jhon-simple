import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Manage from "./components/Manage/Manage";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Review from "./components/Review/Review";
import Shop from "./components/Shop/Shop";
import { CartProvider } from "./context/CartProvider";
import Shipment from "./components/Shipment/Shipment";
import Login from "./components/Login/Login";
import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <CartProvider>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/review" element={<Review />}></Route>
          <Route path="/manage" element={<Manage />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/shipment/" element={<Shipment/>} />
          <Route path="/login/" element={<Login />} />
          <Route path="*" element={<Shop />}></Route>
        </Routes>
      </CartProvider>
    </UserContext.Provider>
  );
}

export default App;
