import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import CartDetails from './components/CartDetails';
import toast, { Toaster } from 'react-hot-toast';


const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<CartDetails/>}/>
    </Routes>
    <Toaster />
    </>
  )
}

export default App