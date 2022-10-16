import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div className=" ">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />} />
          <Route path="/products/:category" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
