import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import loginn from "../../images/loginn.webp";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    const loginData = {
      email,
      password,
    };
    axios
      .post("http://localhost:7000/user/login", loginData)
      .then((result) => {
        if (result.status === 201) {
          const token = result.data.token;
          localStorage.setItem("token", token);
          window.alert("Login Success");
          console.log(result.data.user);
          // user
          const userData = result.data.user;
          localStorage.setItem("userData", JSON.stringify(userData));
          window.location.replace("/");
        }
      })
      .catch((error) => {
        console.log(error);
        const err = error.response.data.message;
        window.alert(err);
      });
  };

  return (
    <div>
      
      <section className="vh-100" style={{backgroundColor: "#eee"}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: "25px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4">

                  

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/ >
                      <label className="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} />
                      <label className="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                  

                  

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 txt-center">
                    <button type="button" className="btn btn-primary btn-lg " onClick={login}>Login</button>
                  </div>

                  <div >
                    <p>Don't have an account? <Link to="/register" className="reg-link text-danger">Click Here.</Link></p>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image"/>

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

export default Login;
