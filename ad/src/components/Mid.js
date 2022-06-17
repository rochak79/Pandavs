import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductDashboard from "./ProductDashboard/ProductDashboard";
import AddProducts from "./ProductDashboard/AddProduct";
import DisplayProducts from "./ProductDashboard/DisplayProducts";
import DisplayContact from "./ContactDashboard/DisplayContact";
import Update from "./ProductDashboard/UpdateProduct";
import Login from "./Registration/Login";
import PrivateRoute from "./ProtectedRoutes";
import UserDashboard from "./UserDashboard/UserDashboard";
import BlogDashboard from "./Blog/BlogDashboard";
import AddBlog from "./Blog/AddBlog";
import DisplayBlog from "./Blog/DisplayBlog";

const Mid = () => {
  return (
    <>
      <Routes>
        <Route
          path="/productdashboard"
          element={
            <PrivateRoute>
              <ProductDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/addproducts"
          element={
            <PrivateRoute>
              <AddProducts />
            </PrivateRoute>
          }
        />
        <Route
          path="/displayproducts"
          element={
            <PrivateRoute>
              <DisplayProducts />
            </PrivateRoute>
          }
        />
        <Route
          path="/displaycontact"
          element={
            <PrivateRoute>
              <DisplayContact />
            </PrivateRoute>
          }
        />
        <Route
          path="/updateproduct/:id"
          element={
            <PrivateRoute>
              <Update />
            </PrivateRoute>
          }
        />
        <Route
          path="/userdashboard"
          element={
            <PrivateRoute>
              <UserDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/blogdashboard"
          element={
            <PrivateRoute>
              <BlogDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/addblog"
          element={
            <PrivateRoute>
              <AddBlog />
            </PrivateRoute>
          }
        />
        <Route
          path="/displayblog"
          element={
            <PrivateRoute>
              <DisplayBlog />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Mid;
