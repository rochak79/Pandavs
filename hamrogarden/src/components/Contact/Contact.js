import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const saveData = (e) => {
    e.preventDefault();
    const contactData = {
      name,
      email,
      number,
      message,
    };
    axios
      .post(`http://localhost:7000/api/contact/contact`, contactData)
      .then((result) => {
        console.log(result);
        if (result.status === 201) {
          window.alert("Message sent to Admin successfully!");
        } else {
          window.alert("Could not send message to the admin!");
        }
      })
      .catch((err) => {
        window.alert("Could not send message to the admin!");
        console.log(err);
      });
  };
  return (
    <div>
      <div class="containerr">
        <div className="contactus">
          <div class="row">
            <h1 className="h1">contact us</h1>
          </div>
          <div class="row">
            <h4 className="h4">We'd love to hear from you!</h4>
          </div>
          <div class="row input-container">
            <div class="col-xs-12">
              <div class="styled-input wide">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label>Name</label>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="styled-input">
                <input
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>Email</label>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="styled-input">
                <input
                  type="text"
                  required
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
                <label>Phone Number</label>
              </div>
            </div>
            <div class="col-xs-12">
              <div class="styled-input wide">
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <label>Message</label>
              </div>
            </div>
            <div class="col-xs-12">
              <button className="btn-lrg submit-btn" onClick={saveData}>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
