import React from "react";
import { Route, Routes } from "react-router-dom";
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
      </Routes>
    </div>
  );
};

export default Body;
