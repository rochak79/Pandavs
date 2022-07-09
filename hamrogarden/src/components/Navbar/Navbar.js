import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  // logout
  const logout = () => {
    localStorage.clear();
    window.location.replace("/login");
  };
  // token
  const token = localStorage.getItem("token");
  // console.log(token);

  // name

  if (token) {
    return (
      <section className="ftco-section">
        <div className="container-fluid px-md-5">
          <div className="row justify-content-between">
            <div className="col-md-12 order-md-last">
              <div className="row">
                <div className="col-md-12 ">
                  <Link className="navbar-brand text-center header-main" to="/">
                    <h2>HAMRO GARDEN</h2>
                  </Link>
                </div>
                
              </div>
            </div>

          </div>
        </div>
        <nav
          className="navbar navbar-expand-lg ftco_navbar ftco-navbar-light"
          id="ftco-navbar"
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#ftco-nav"
              aria-controls="ftco-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="fa fa-bars text-dark"></span> Menu
            </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav m-auto">
                <li className="nav-item active">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="products" className="nav-link">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="blog" className="nav-link">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="contact" className="nav-link">
                    Contact Us
                  </Link>
                </li>
                
                <li className="nav-item">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn dropdown-toggle dropdown-menues"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    ></button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="profile">
                        <Link to="profile" className="nav-link text-dark">
                          <i className="fas fa-user"></i> &nbsp; PROFILE
                        </Link>
                      </a>
                      <a className="dropdown-item" href="forum">
                        <Link to="forum" className="nav-link text-dark">
                          <i className="fas fa-comments"></i> &nbsp; FORUM
                        </Link>
                      </a>
                      <a className="dropdown-item" href="cart">
                        <Link to="/cart" className="nav-link text-dark">
                          <i className="fa-solid fa-cart-shopping"></i>&nbsp;
                          Cart
                        </Link>
                      </a>
                      <a className="dropdown-item" href="#">
                        <Link
                          to="login"
                          className="nav-link text-dark"
                          onClick={logout}
                        >
                          <i className="fa-solid fa-right-from-bracket"></i>
                          &nbsp; LOGOUT
                        </Link>
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    );
  } else {
    return (
      <section className="ftco-section">
        <div className="container-fluid px-md-5">
          <div className="row justify-content-between">
            <div className="col-md-12 order-md-last">
              <div className="row">
                <div className="col-md-12 ">
                  <Link className="navbar-brand text-center header-main" to="/">
                    <h2>HAMRO GARDEN</h2>
                  </Link>
                </div>
                
              </div>
            </div>
            </div>
          </div>
        <nav
          className="navbar navbar-expand-lg ftco_navbar ftco-navbar-light"
          id="ftco-navbar"
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#ftco-nav"
              aria-controls="ftco-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="fa fa-bars"></span> Menu
            </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav m-auto">
                <li className="nav-item active">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="blog" className="nav-link">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="contact" className="nav-link">
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn dropdown-toggle dropdown-menues"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    ></button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        <Link to="register" className="nav-link text-dark">
                          <i class="fa-solid fa-right-to-bracket"></i> &nbsp;
                          REGISTER
                        </Link>
                      </a>
                      <a className="dropdown-item" href="#">
                        <Link to="login" className="nav-link text-dark">
                          <i className="fa-solid fa-arrow-right-to-bracket"></i>{" "}
                          &nbsp; LOGIN
                        </Link>
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    );
  }
  // return <div></div>;
};

export default Navbar;
