import { Routes, Route, BrowserRouter } from "react-router-dom";
import ItemDetailContainer from "./components/item/ItemDetailContainer";
import NavBar from "./components/layaout/NavBar";
import Cart from "./components/cart/Cart";
import MyProvider from "./context/CartContext";
import Checkout from "../src/components/checkout/Checkout";
import ItemListContainer from "./components/item/ItemListContainer";
import NotFound from "./components/NotFound";
import Order from "./components/Order/Order";
import Footer from "./components/layaout/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <MyProvider>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order" element={<Order />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </MyProvider>
    </BrowserRouter>
  );
}
