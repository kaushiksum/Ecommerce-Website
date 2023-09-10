
// import React from 'react';

import {Routes, Route} from "react-router-dom"

import { Products } from './pages/products';
import { Product } from './pages/product';
import { Cart } from './pages/cart';
import { NotFoun } from './pages/not-found';
import { NavBar } from './components/navbar';
import { useNavigate } from 'react-router-dom';

import { createSearchParams } from 'react-router-dom';


import { useCart } from './context/cart';


function App() {

  const navigate = useNavigate();

  const { cartItemCount  } = useCart()

  const onSearch = (searchQuery) => {

    navigate(`/?${createSearchParams({ q: searchQuery })}`)
    
  }

  return (
   <>
   <NavBar onSearch={onSearch} cartItemCount={cartItemCount()} />
   <Routes>

    <Route path='/' element={<Products />} />
    <Route path='/product/:productId' element= {<Product />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='*' element={<NotFoun />} />
   </Routes>
   
   </>
  );
}

export default App;
