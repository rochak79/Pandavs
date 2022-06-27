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
            <div className="col-md-8 order-md-last">
              <div className="row">
                <div className="col-md-6 text-center">
                  <Link className="navbar-brand" to="#">
                    <h2>HAMRO GARDEN</h2>
                  </Link>
                </div>
                <div className="col-md-6 d-md-flex justify-content-end mb-md-0 mb-3">
                  <form action="#" className="searchform order-lg-last">
                    <div className="form-group d-flex">
                      <form className="form-inline my-2 my-lg-0">
                        <div class="input-group rounded">
                          <input
                            type="search"
                            class="form-control rounded"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="search-addon"
                          />
                          <button
                            class="input-group-text border-0"
                            id="search-addon"
                          >
                            <i class="fas fa-search"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="social-media">
                <p className="mb-0 d-flex">
                  <Link
                    to="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-facebook">
                      <i className="sr-only">Facebook</i>
                    </span>
                  </Link>
                  <Link
                    to="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-twitter">
                      <i className="sr-only">Twitter</i>
                    </span>
                  </Link>
                  <Link
                    to="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-instagram">
                      <i className="sr-only">Instagram</i>
                    </span>
                  </Link>
                  <Link
                    to="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-dribbble">
                      <i className="sr-only">Dribbble</i>
                    </span>
                  </Link>
                </p>
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
            <div className="col-md-8 order-md-last">
              <div className="row">
                <div className="col-md-6 text-center">
                  <Link className="navbar-brand" to="#">
                    <h2>HAMRO GARDEN</h2>
                  </Link>
                </div>
                <div className="col-md-6 d-md-flex justify-content-end mb-md-0 mb-3">
                  <div className="form-group d-flex">
                    <form className="form-inline my-2 my-lg-0">
                      <div class="input-group rounded">
                        <input
                          type="search"
                          class="form-control rounded"
                          placeholder="Search"
                          aria-label="Search"
                          aria-describedby="search-addon"
                        />
                        <button
                          class="input-group-text border-0"
                          id="search-addon"
                        >
                          <i class="fas fa-search"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="social-media">
                <p className="mb-0 d-flex">
                  <Link
                    to="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-facebook">
                      <i className="sr-only">Facebook</i>
                    </span>
                  </Link>
                  <Link
                    to="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-twitter">
                      <i className="sr-only">Twitter</i>
                    </span>
                  </Link>
                  <Link
                    to="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-instagram">
                      <i className="sr-only">Instagram</i>
                    </span>
                  </Link>
                  <Link
                    to="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-dribbble">
                      <i className="sr-only">Dribbble</i>
                    </span>
                  </Link>
                </p>
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
