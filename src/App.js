import { Routes, Route, BrowserRouter } from 'react-router-dom' ;
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'; 
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Cart from './components/Cart';




export default function App() {
  return (

  <BrowserRouter>
  
      <NavBar />

      <Routes>
        <Route path="/" element={ <ItemListContainer /> } />
        <Route path="/category/:id" element={ <ItemListContainer /> } />
        <Route path="/item/:id" element={<ItemDetailContainer />} />   
        <Route path="/cart" element={<Cart />} />         
      </Routes>

      <Footer className="footer" />

  </BrowserRouter>
  
  );
}

