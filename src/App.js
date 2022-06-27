import { Routes, Route, BrowserRouter } from 'react-router-dom' ;
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'; 
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Cart from './components/Cart'; 
import MyProvider from './context/CartContext';



export default function App() {
  return (

  <BrowserRouter>
    <MyProvider>

      <NavBar />
      
      <Routes>
        <Route path="/" element={ <ItemListContainer /> } />
        <Route path="/category/:id" element={ <ItemListContainer /> } />
        <Route path="/item/:id" element={<ItemDetailContainer />} />   
        <Route path="/cart" element={<Cart />} />       
      </Routes>

      <Footer className="footer" />

    </MyProvider>
  </BrowserRouter>
  
  );
}

