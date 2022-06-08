import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductDashboard from "./ProductDashboard/ProductDashboard";
import AddProducts from "./ProductDashboard/AddProduct";
import DisplayProducts from "./ProductDashboard/DisplayProducts";
import DisplayContact from "./ContactDashboard/DisplayContact";
import Update from "./ProductDashboard/UpdateProduct";

const Mid = () => {
  return (
    <>
      <Routes>
        <Route path="/productdashboard" element={<ProductDashboard />} />
        <Route path="/addproducts" element={<AddProducts />} />
        <Route path="/displayproducts" element={<DisplayProducts />} />
        <Route path="/displaycontact" element={<DisplayContact />} />
        <Route path="/updateproduct/:id" element={<Update />} />
      </Routes>
    </>
  );
};

export default Mid;
