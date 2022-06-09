import React from "react";
import "./Admin.css";
import Mid from "../Mid";
import { Link } from "react-router-dom";

const Admin = () => {
  const logout = () => {
    localStorage.clear();
    window.location.replace("/");
  };

  const token = localStorage.getItem("adminToken");

  if (token) {
    return (
      <body>
        <input type="checkbox" name="" id="check" />
        <label htmlFor="check">
          <i class="fa-solid fa-bars" id="btn"></i>
          <i class="fa-solid fa-xmark" id="cancel"></i>
          <i> </i>
        </label>
        <div className="textt">HAMRO GARDEN</div>
        <div className="sidebar">
          <header>
            HI Admin. &nbsp;
            <button className="fs_div">
              <i
                class="fa fa-sign-out"
                aria-hidden="true logout_fs"
                onClick={logout}
              ></i>
            </button>
          </header>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="productdashboard">Product Dashboard</Link>
            </li>
            <li>
              <Link to="">User Dashboard</Link>
            </li>
            <li>
              <Link to="displaycontact">Contact Dashboard</Link>
            </li>
            <li>
              <Link to="">Payment Dashboard</Link>
            </li>
            <li>
              <Link to="">Add Blogs</Link>
            </li>
          </ul>
        </div>
        <section>
          <Mid />
        </section>
      </body>
    );
  } else {
    return (
      <body>
        <input type="checkbox" name="" id="check" />
        <label htmlFor="check">
          <i class="fa-solid fa-bars" id="btn"></i>
          <i class="fa-solid fa-xmark" id="cancel"></i>
          <i> </i>
        </label>
        <div className="textt">HAMRO GARDEN</div>
        <div className="sidebar">
          <header>
            HI Admin. &nbsp;
            <button className="fs_div">
              <Link to="/login">
                <i class="fa fa-sign-in login_fs" aria-hidden="true"></i>
              </Link>
            </button>
          </header>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="productdashboard">Product Dashboard</Link>
            </li>
            <li>
              <Link to="">User Dashboard</Link>
            </li>
            <li>
              <Link to="displaycontact">Contact Dashboard</Link>
            </li>
            <li>
              <Link to="">Payment Dashboard</Link>
            </li>
            <li>
              <Link to="">Add Blogs</Link>
            </li>
          </ul>
        </div>
        <section>
          <Mid />
        </section>
      </body>
    );
  }
};

export default Admin;
