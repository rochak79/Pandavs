import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import Select from "react-select";
import { Form, Button } from "react-bootstrap";
import { Grid, TextField, MenuItem } from "@mui/material/node";
import { color } from "@mui/system";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerData = (e) => {
    e.preventDefault();

    const register = {
      name,
      email,
      password,
    };

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
        window.alert("Login Failed");
      });
  };

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="user singinBx">
            <div className="formBx">
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="username"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                <Form.Control
                  type="password"
                  id="inputPassword5"
                  aria-describedby="passwordHelpBlock"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Button type="submit" onClick={registerData}>
                  Submit
                </Button>
                <p class="signup">
                  {" "}
                  Already have an account?
                  <Link to="/login">Login</Link>
                </p>
              </Form>
            </div>
            <div class="imgBx">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj2xyA1UXB9IMvrfdTqLF8q_dA4bEeXqo3LSBSod2jR36rcv2-bAyoJ6iWc0fwMJhYHlU&usqp=CAU"
                alt="Login"
              ></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
