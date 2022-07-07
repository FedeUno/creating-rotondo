import { Routes, Route, BrowserRouter } from 'react-router-dom' ;
import ItemDetailContainerA from './components/ItemDetailContainerA'; 
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Cart from './components/Cart'; 
import MyProvider from './context/CartContext';
import FBCheckout from './firebase/FBCheckout';
import ItemListContainerA from './components/ItemListContainerA';
import NotFound from './components/NotFound';
import Order from './components/Order/Order';



export default function App() {

  return (

  <BrowserRouter>
    <MyProvider>

      <NavBar />
      
      <Routes>
        <Route path="/" element={ <ItemListContainerA /> } />
        <Route path="/category/:id" element={ <ItemListContainerA /> } />
        <Route path="/item/:id" element={<ItemDetailContainerA />} />   
        <Route path="/cart" element={<Cart />} />  
        <Route path="/checkout" element={<FBCheckout />} />    
        <Route path="/order" element={<Order />} />    
        <Route path="*" element={<NotFound />} />      
      </Routes>

      <Footer className="footer" />

    </MyProvider>
  </BrowserRouter>
  
  );
}

