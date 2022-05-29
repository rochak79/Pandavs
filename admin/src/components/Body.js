import React from "react";
import { Route, Routes } from "react-router-dom";
import Addproduct from "./ProductDashboard/Addproduct";
import Deleteproduct from "./ProductDashboard/Deleteproduct";
import Displayproducts from "./ProductDashboard/Displayproducts";
import Updateproduct from "./ProductDashboard/Updateproduct";

const Body = () => {
  return (
    <div className="body__admin">
      <Routes>
        <Route path="/addproduct" element={<Addproduct />} />
        <Route path="/products" element={<Displayproducts />} />
        <Route path="/deleteproduct" element={<Deleteproduct />} />
        <Route path="/updateproduct" element={<Updateproduct />} />
      </Routes>
    </div>
  );
};

export default Body;
