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
        <Route
          path="/contact"
          element={
            <PrivateRoute>
              <Contact />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default Body;
