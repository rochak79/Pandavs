import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const contactData = (e) => {
    e.preventDefault();
    const contact = {
      name,
      email,
      number,
      message,
    };
    axios
      .post(`http://localhost:7000/api/contact/contact`, contact)
      .then((result) => {
        console.log(result);
        if (result.status === 201) {
          window.alert("Message sent!");
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
      <section className="contact">
        <div className="content">
          <h2>Contact Us</h2>
          <p>
            {" "}
            We like to offer our best services to you. Please feel free to
            contact us. Lets get in touch with{" "}
            <span className="top">Hamrogarden</span>
          </p>
        </div>
        <div className="containe">
          <div className="contactInfo">
            <div className="boxx">
              <div className="icon">
                <i class="fas fa-address-card"></i>
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>
                  432 Banasthali Ktm, <br></br>Lekhnat tol
                  <br />
                  5405
                </p>
              </div>
            </div>
            <div className="boxx">
              <div className="icon">
                <i class="fa-solid fa-phone"></i>
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p>98101010</p>
              </div>
            </div>
            <div className="boxx">
              <div className="icon">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>Hamrogarden@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contactForm">
            <form>
              <h2>Send Message</h2>
              <div class="inputBox">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <span>Name</span>
              </div>
              <div class="inputBox">
                <input
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span>Email</span>
              </div>
              <div class="inputBox">
                <input
                  type="text"
                  required
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
                <span>Phone</span>
              </div>
              <div class="inputBox">
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <span>Type your Message...</span>
              </div>
              <div class="inputBox"></div>
              <button className="contact_send" onClick={contactData}>
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
