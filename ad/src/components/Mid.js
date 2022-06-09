import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductDashboard from "./ProductDashboard/ProductDashboard";
import AddProducts from "./ProductDashboard/AddProduct";
import DisplayProducts from "./ProductDashboard/DisplayProducts";
import DisplayContact from "./ContactDashboard/DisplayContact";
import Update from "./ProductDashboard/UpdateProduct";
import Login from "./Registration/Login";

const Mid = () => {
  return (
    <>
      <Routes>
        <Route path="/productdashboard" element={<ProductDashboard />} />
        <Route path="/addproducts" element={<AddProducts />} />
        <Route path="/displayproducts" element={<DisplayProducts />} />
        <Route path="/displaycontact" element={<DisplayContact />} />
        <Route path="/updateproduct/:id" element={<Update />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Mid;
