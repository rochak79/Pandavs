import React from "react";
import "./Admin.css";
import Mid from "../Mid";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Admin = () => {
  const notify = () => {
    toast.info("Hello");
  };
  const logout = () => {
    localStorage.clear();
    window.location.replace("/");
  };

  const token = localStorage.getItem("adminInfo");
  
  
  

  if (token) {
    return (
      <body>
        <input type="checkbox" name="" id="check" />
        <label htmlFor="check">
          <i className="fa-solid fa-bars" id="btn"></i>
          <i className="fa-solid fa-xmark" id="cancel"></i>
          <i> </i>
        </label>
        <div className="textt">HAMRO GARDEN</div>
        <div className="sidebar">
          <header>
            Hi, {token} &nbsp;
            <button className="fs_div">
              <i
                className="fa fa-sign-out"
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
              <Link to="userdashboard">User Dashboard</Link>
            </li>
            <li>
              <Link to="displaycontact">Contact Dashboard</Link>
            </li>
            <li>
              <Link to="">Payment Dashboard</Link>
            </li>
            <li>
              <Link to="blogdashboard">Blogs</Link>
            </li>
            <li>
              <Link to="" onClick={logout}>
                Logout &nbsp; &nbsp;{" "}
                <i className="fa fa-sign-out" aria-hidden="true logout_fs"></i>
              </Link>
            </li>
          </ul>
        </div>
        <section>
          <Mid />
          
        </section>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </body>
      
    );
  } else {
    return (
      <body>
        <input type="checkbox" name="" id="check" />
        <label htmlFor="check">
          <i className="fa-solid fa-bars" id="btn"></i>
          <i className="fa-solid fa-xmark" id="cancel"></i>
          <i> </i>
        </label>
        <div className="textt">HAMRO GARDEN</div>
        <div className="sidebar">
          <header>
            Hi, Admin. &nbsp;
            <button className="fs_div">
              <Link to="/login">
                <i className="fa fa-sign-in login_fs" aria-hidden="true"></i>
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
              <Link to="userdashboard">User Dashboard</Link>
            </li>
            <li>
              <Link to="displaycontact">Contact Dashboard</Link>
            </li>
            <li>
              <Link to="">Payment Dashboard</Link>
            </li>
            <li>
              <Link to="">Blogs</Link>
            </li>
            <li>
              <Link to="/login">
                Login &nbsp; &nbsp;{" "}
                <i className="fa fa-sign-out" aria-hidden="true logout_fs"></i>
              </Link>
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
