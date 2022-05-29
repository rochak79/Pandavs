import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

const Main = () => {
  return (
    <>
      <header>
        <div class="toggle">
          <i class="fas fa-bars"></i>
        </div>
        <h3>Dashboard</h3>
        <a href="#">
          <i class="fas fa-sign-out-alt"></i>
        </a>
      </header>
      <nav>
        <ul>
          <h3 className="adminhello">Hi, Admin</h3>
          {/* <li>
            <a class="toggle">
              <span class="icon"></span>
              <span class="title">Hello Admin</span>
            </a>
          </li> */}
          <li>
            <a href="#">
              <span class="icon">
                <i class="fas fa-home"></i>
              </span>
              <span class="title">Home</span>
            </a>
          </li>
          <li>
            <a href="addproduct">
              <span class="icon">
                <i class="fas fa-user"></i>
              </span>
              <span class="title">Add Products</span>
            </a>
          </li>
          <li>
            <a href="products">
              <span class="icon">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="title">Diplay Products</span>
            </a>
          </li>
          {/* <li>
            <a href="#">
              <span class="icon">
                <i class="fas fa-info"></i>
              </span>
              <span class="title">Help</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon">
                <i class="fas fa-cog"></i>
              </span>
              <span class="title">Setting</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon">
                <i class="fas fa-lock"></i>
              </span>
              <span class="title">Password</span>
            </a>
          </li> */}
          <li>
            <a href="#">
              <span class="icon">
                <i class="fas fa-sign-out-alt"></i>
              </span>
              <span class="title">Sign Out</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Main;
