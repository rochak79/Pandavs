import React, { useEffect, useState } from "react";
import "./Login.css";
import axios from "axios";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");

  const loginAdmin = (e) => {
    e.preventDefault();
    const adminData = {
      name,
      email,
      password,
      code,
    };
    axios
      .post(`http://localhost:7000/admin/adminlogin`, adminData)
      .then((result) => {
        console.log(result);
        const adminToken = result.data.token;
        localStorage.setItem("adminToken", adminToken);

        window.alert("Hello Admin!");
      })
      .catch((err) => {
        const error = err.response.data.message;
        window.alert(error);
      });
  };
  return (
    <div>
      <div class="main">
        <p class="sign" align="center">
          <h2>Welcome Admin!</h2>
        </p>
        <form class="form1">
          <input
            class="un "
            type="text"
            align="center"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            class="un "
            type="email"
            align="center"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            class="pass"
            type="password"
            align="center"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            class="un "
            type="password"
            align="center"
            placeholder="Authentication key"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button className="submit" align="center" onClick={loginAdmin}>
            Login
          </button>
          {/* <p class="forgot" align="center">
            <a href="#">Forgot Password?</a>
          </p> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
