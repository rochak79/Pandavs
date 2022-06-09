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
      <section class="ftco-section">
        <div class="container-fluid px-md-5">
          <div class="row justify-content-between">
            <div class="col-md-8 order-md-last">
              <div class="row">
                <div class="col-md-6 text-center">
                  <Link class="navbar-brand" to="#">
                    <h2>HAMRO GARDEN</h2>
                  </Link>
                </div>
                <div class="col-md-6 d-md-flex justify-content-end mb-md-0 mb-3">
                  <form action="#" class="searchform order-lg-last">
                    <div class="form-group d-flex">
                      <input
                        type="text"
                        class="form-control pl-3"
                        placeholder="Search"
                      />
                      <button
                        type="submit"
                        placeholder=""
                        class="form-control search"
                      >
                        <span class="fa fa-search"></span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex">
              <div class="social-media">
                <p class="mb-0 d-flex">
                  <Link
                    to="#"
                    class="d-flex align-items-center justify-content-center"
                  >
                    <span class="fa fa-facebook">
                      <i class="sr-only">Facebook</i>
                    </span>
                  </Link>
                  <Link
                    to="#"
                    class="d-flex align-items-center justify-content-center"
                  >
                    <span class="fa fa-twitter">
                      <i class="sr-only">Twitter</i>
                    </span>
                  </Link>
                  <Link
                    to="#"
                    class="d-flex align-items-center justify-content-center"
                  >
                    <span class="fa fa-instagram">
                      <i class="sr-only">Instagram</i>
                    </span>
                  </Link>
                  <Link
                    to="#"
                    class="d-flex align-items-center justify-content-center"
                  >
                    <span class="fa fa-dribbble">
                      <i class="sr-only">Dribbble</i>
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav
          class="navbar navbar-expand-lg ftco_navbar ftco-navbar-light"
          id="ftco-navbar"
        >
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#ftco-nav"
              aria-controls="ftco-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="fa fa-bars"></span> Menu
            </button>
            <div class="collapse navbar-collapse" id="ftco-nav">
              <ul class="navbar-nav m-auto">
                <li class="nav-item active">
                  <Link to="/" class="nav-link">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="#" class="nav-link">
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="#" class="nav-link">
                    Blog
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="contact" class="nav-link">
                    Contact Us
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="login" class="nav-link" onClick={logout}>
                    Logout
                  </Link>
                </li>
                <li class="nav-item"></li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    );
  } else {
    return (
      <section class="ftco-section">
        <div class="container-fluid px-md-5">
          <div class="row justify-content-between">
            <div class="col-md-8 order-md-last">
              <div class="row">
                <div class="col-md-6 text-center">
                  <Link class="navbar-brand" to="#">
                    <h2>HAMRO GARDEN</h2>
                  </Link>
                </div>
                <div class="col-md-6 d-md-flex justify-content-end mb-md-0 mb-3">
                  <form action="#" class="searchform order-lg-last">
                    <div class="form-group d-flex">
                      <input
                        type="text"
                        class="form-control pl-3"
                        placeholder="Search"
                      />
                      <button
                        type="submit"
                        placeholder=""
                        class="form-control search"
                      >
                        <span class="fa fa-search"></span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex">
              <div class="social-media">
                <p class="mb-0 d-flex">
                  <Link
                    to="#"
                    class="d-flex align-items-center justify-content-center"
                  >
                    <span class="fa fa-facebook">
                      <i class="sr-only">Facebook</i>
                    </span>
                  </Link>
                  <Link
                    to="#"
                    class="d-flex align-items-center justify-content-center"
                  >
                    <span class="fa fa-twitter">
                      <i class="sr-only">Twitter</i>
                    </span>
                  </Link>
                  <Link
                    to="#"
                    class="d-flex align-items-center justify-content-center"
                  >
                    <span class="fa fa-instagram">
                      <i class="sr-only">Instagram</i>
                    </span>
                  </Link>
                  <Link
                    to="#"
                    class="d-flex align-items-center justify-content-center"
                  >
                    <span class="fa fa-dribbble">
                      <i class="sr-only">Dribbble</i>
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav
          class="navbar navbar-expand-lg ftco_navbar ftco-navbar-light"
          id="ftco-navbar"
        >
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#ftco-nav"
              aria-controls="ftco-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="fa fa-bars"></span> Menu
            </button>
            <div class="collapse navbar-collapse" id="ftco-nav">
              <ul class="navbar-nav m-auto">
                <li class="nav-item active">
                  <Link to="/" class="nav-link">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="about" class="nav-link">
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="#" class="nav-link">
                    Blog
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="contact" class="nav-link">
                    Contact Us
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="login" class="nav-link">
                    Login
                  </Link>
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
