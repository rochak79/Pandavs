import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import OurTeams from "./Home/OurTeams";
import Login from "./Login/Login";
import Register from "./Login/Register";
import Profile from "./Profile/Profile";
import PrivateRoute from "./ProtectedRoutes";
import About from "../components/About/AboutUs";
import ProductDetail from "./Home/ProductDetail";
import Blog from "./Blog/Blog";
import BlogDetail from "./Blog/BlogDetail";
import CartScreen from "./Home/CartScreen";

const Body = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ourteam" element={<OurTeams />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/cart/:id/*" element={<CartScreen />} />
        <Route
          path="/contact"
          element={
            <PrivateRoute>
              <Contact />
            </PrivateRoute>
          }
        />
        <Route
          path="/product/:id"
          element={
            <PrivateRoute>
              <ProductDetail />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default Body;
