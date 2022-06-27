import React from "react";
import "./ProductDashboard.css";
import add from "../images/add.png";
import d from "../images/d.png";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const ProductDashboard = () => {
  return (
    <div>
      <div class="main-container">
        <div class="heading">
          <h1 class="heading__title">Product Dashboard</h1>
        </div>
        <div class="cards">
          <div class="card card-1">
            <h2 class="card__title">Add Product</h2>
            <img src={add} alt="add_products" className="pimg" />
            <p class="card__apply">
              <Link class="card__link" to="/addproducts">
                Add Now <i class="fas fa-arrow-right"></i>
              </Link>
            </p>
          </div>
          <div class="card card-2">
            <h2 class="card__title">View Products.</h2>
            <img src={d} alt="display_products" className="pimg" />
            <p class="card__apply">
              <Link class="card__link" to="/displayproducts">
                Display Now <i class="fas fa-arrow-right"></i>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default ProductDashboard;
