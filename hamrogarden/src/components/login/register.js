import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [tc, setTc] = useState("");

  const register = (e) => {
    e.preventDefault();
    const registerData = {
      name,
      email,
      password,
    };

    axios
      .post("http://localhost:7000/user/register", registerData)
      .then((result) => {
        console.log(result);
        if (result.status === 201) {
          console.log(result.data);
          window.alert("User Registered Successfully");
          window.location.replace("/login");
        }
      })
      .catch((error) => {
        const err = error.response.data.message;
        window.alert(err);
      });
  };
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="user singinBx">
            <div className="formBx">
              <form>
                <h2>Register your account</h2>
                <input
                  type="text"
                  name=""
                  placeholder="Username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
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
                  placeholder="Create Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>

                <button className="loginbtn" type="submit" onClick={register}>
                  Register
                </button>
                <p class="signup">
                  {" "}
                  Already have an account?
                  <Link to="/login">Login</Link>
                </p>
              </form>
            </div>
            <div class="imgBx">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj2xyA1UXB9IMvrfdTqLF8q_dA4bEeXqo3LSBSod2jR36rcv2-bAyoJ6iWc0fwMJhYHlU&usqp=CAU"></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
