import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import Select from "react-select";
import { Form, Button } from "react-bootstrap";
import { Grid, TextField, MenuItem } from "@mui/material/node";
import { color } from "@mui/system";
import register from "../../images/Wavy_Tech-28_Single-10.jpg";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [desc, setDesc] = useState("");

  const registerData = (e) => {
    e.preventDefault();

    const register = {
      name,
      email,
      password,
      address,
      phone,
      gender,
      desc,
    };
    if (password === confirm) {
      axios
        .post(`http://localhost:7000/user/register`, register)
        .then((result) => {
          console.log(result);
          if (result.status === 201) {
            console.log(result.data);
            window.alert("User Registered Successfully");
            window.location.replace("/login");
          }
        })
        .catch((err) => {
          console.log(err);
          const error = error.response.data.message;
          window.alert("Vayeaan");
        });
    } else {
      window.alert("Password and Confirm password do not match!");
    }
  };

  return (
    <div>
      <section
        className="vh-100 pt-5 pb-lg-5 mb-5 registration"
        style={{ background: "#eee " }}
      >
        <div style={{ background: "#eee" }}>
          <div className="container pb-lg-5 registration">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div
                  className="card text-black"
                  style={{ borderRadius: "25px" }}
                >
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-1">
                          Sign up
                        </p>

                        <form className="mx-1 mx-md-4">
                          <div className="d-flex flex-row align-items-center mb-2">
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id="form3Example1c"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                              />
                              <label
                                className="form-label"
                                for="form3Example1c"
                              >
                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                Your Name
                              </label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-2">
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="email"
                                id="form3Example3c"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                              <label
                                className="form-label"
                                for="form3Example3c"
                              >
                                {" "}
                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                Your Email
                              </label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-2">
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                id="form3Example4c"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                              <label
                                className="form-label"
                                for="form3Example4c"
                              >
                                {" "}
                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                Password
                              </label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-2">
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                id="form3Example4cd"
                                className="form-control"
                                value={confirm}
                                onChange={(e) => setConfirm(e.target.value)}
                              />
                              <label
                                className="form-label"
                                for="form3Example4cd"
                              >
                                {" "}
                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                Repeat your password
                              </label>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-2">
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id="form3Example1c"
                                className="form-control"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                              />
                              <label
                                className="form-label"
                                for="form3Example1c"
                              >
                                <i className="fas fa-address-card fa-lg me-3 fa-fw"></i>
                                Address
                              </label>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-2">
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id="form3Example1c"
                                className="form-control"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                              />
                              <label
                                className="form-label"
                                for="form3Example1c"
                              >
                                {" "}
                                <i className="fas fa-phone fa-lg me-3 fa-fw"></i>
                                Phone
                              </label>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-2">
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id="form3Example1c"
                                className="form-control"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                style={{ color: "black" }}
                              />
                              <label
                                className="form-label"
                                for="form3Example1c"
                              >
                                {" "}
                                <i className="fas fa-check fa-lg me-3 fa-fw"></i>
                                Gender
                              </label>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-2">
                            <div className="form-outline flex-fill mb-0">
                              <textarea
                                type="text"
                                id="form3Example1c"
                                rows="4"
                                cols="30"
                                placeholder="About yourself..."
                                className="desc"
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                              />
                              <label
                                className="form-label"
                                for="form3Example1c"
                              >
                                <i className="fas fa-message fa-lg me-3 fa-fw"></i>
                                About Yourself
                              </label>
                            </div>
                          </div>
                          <p>
                            <Link to="/login" className="regtolog text-danger">
                              Click here
                            </Link>{" "}
                            if you already have an account.{" "}
                          </p>
                          <div className="d-flex justify-content-center mx-2 mb-3 mb-lg-4">
                            <button
                              type="button"
                              className="btn btn-primary btn-lg btn-reg"
                              onClick={registerData}
                            >
                              Register
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                          className="img-fluid"
                          alt="Sample image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
