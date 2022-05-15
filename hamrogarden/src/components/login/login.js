import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";

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
      .post("http://localhost:7000/api/user/login", loginData)
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          const token = result.data.token;
          localStorage.setItem("token", token);
          alert("Login Success");
          //   console.log(token);
          window.location.replace("/");
        }
      })
      .catch((err) => {
        alert("Login Failed");
        console.log(err);
      });
  };

  return (
    <div>
      <section>
        <div className="container">
          <div className="user singinBx">
            <div class="imgBx">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj2xyA1UXB9IMvrfdTqLF8q_dA4bEeXqo3LSBSod2jR36rcv2-bAyoJ6iWc0fwMJhYHlU&usqp=CAU"></img>
            </div>
            <div className="formBx">
              <form>
                <h2>Sign In</h2>
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
                <button type="submit" onClick={login}>
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
