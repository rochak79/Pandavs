import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import loginsvg from "../../images/l.webp";

const Login = () => {
  // const dataa = localStorage.getItem("userData");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const login = (e) => {
    e.preventDefault();
    const loginData = {
      email,
      password,
    };
    if (password === confirm) {
      axios
        .post("http://localhost:7000/user/login", loginData)
        .then((result) => {
          if (result.status === 201) {
            const token = result.data.token;
            localStorage.setItem("token", token);

            window.alert("Login Success");

            // user
            const userData = result.data.user;
            localStorage.setItem("userData", userData);
            // console.log(userData);
            // console.log(
            //   "User:",
            //   result.data.user.name,
            //   result.data.user.email,
            //   result.data.user.password
            // );
            window.location.replace("/");
          }
        })
        .catch((error) => {
          console.log(error);
          const err = error.response.data.message;
          window.alert(err);
        });
    } else {
      window.alert("Password and Confirm password do not match!");
    }
  };

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="user singinBx">
            <div class="imgBx">
              <img src={loginsvg} className="loginsvg" alt="Login Image"></img>
            </div>
            <div className="formBx">
              <form>
                <h2 className="signinh2">Sign In</h2>
                <input
                  type="email"
                  name=""
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input
                  type="password"
                  name=""
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type="password"
                  name=""
                  placeholder="Confirm password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                />

                <button className="loginbtn" type="submit" onClick={login}>
                  Login
                </button>
                <p class="signup">
                  {" "}
                  Dont have an account?
                  <Link to="/register">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
