import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import ProductsScreen from '../screens/ProductsScreen';
import Addproduct from './AdminDashboard/ProductDashboard/Addproduct';
import Login from './Login/Login';
import Register from './Login/Register';

const Body = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/products' element={<ProductsScreen />} />
        <Route path='/products/:id' element={<ProductDetailScreen />} />

        <Route path='/register' element={<Register />} />
        <Route path='/addproduct' element={<Addproduct />} />
      </Routes>
    </>
  );
};

export default Body;
