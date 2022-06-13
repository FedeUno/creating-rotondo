import { Routes, Route, BrowserRouter } from 'react-router-dom' ;
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'; 
import NavBar from './components/NavBar';






export default function App() {
  return (

  <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={ <ItemListContainer /> } />
        <Route path="/category/:id" element={ <ItemListContainer /> } />
        <Route path="/item/:id" element={<ItemDetailContainer />} />   
 
      </Routes>

  </BrowserRouter>
  
  );
}

