import "./App.css";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import MainPage from "./Pages/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from "./Pages/ShopCategory";
import women_banner from "./Components/Assets/product-page/banner_women.png";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
       
        <Routes>
          <Route path="/home" element={<MainPage />} />
          <Route
            path="/womens"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
