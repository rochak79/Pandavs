import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact/Contact";
import Home from "./Home.js/Home";
import OurTeams from "./Home.js/OurTeams";
import Login from "./Login/Login";
import Register from "./Login/Register";

const Body = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ourteam" element={<OurTeams />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Body;
