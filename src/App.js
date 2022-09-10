import Api from './api/Api';
import {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Cart from './components/Cart';
import { ShopProvider } from './contextApi/context';


function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    Api.get('/').then(res=>{
      setProducts(res.data)
    })
  }, [])

  return (
    <ShopProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={
            <Products products={products} />
          } />
          <Route path="/cart" element={
            <Cart />
          } />
        </Routes>
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;
