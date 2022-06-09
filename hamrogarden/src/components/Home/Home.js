import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import axios from "axios";
import Video from "../../videos/bg1.mp4";
import splash from "../../images/splash.jpg";
import bg from "../../images/bg.jpg";
import OurTeams from "./OurTeams";
import { Row, Col, Container } from "react-bootstrap";
import Product from "./Product";
import emailjs from "emailjs-com";

const Home = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_4abkaml",
      "template_8lz8jgl",
      form.current,
      "ZV-Evv-w2XWSFeipC"
    );
    e.target.reset().then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:7000/api/product/products")
      .then((result) => {
        setData(result.data.products);
        console.log(result.data.products);
        // console.log(result.data.products);
      })
      .catch((err) => {
        console.log(err);
        // alert("Error receiving data");
      });
  }, []);

  return (
    <>
      <div className="home_top">
        <div className="home_left"></div>
        <div className="home_right">
          <h4>Even the tinest of flowers can have toughtst root.</h4>
          <h1>Welcome to Hamro Garden,</h1>
          <h5>
            your number one source for all plant types and other gardening tools
            . We are dedicated to providing you the very best of plant
            categories. We hope you enjoy our product as much as we enjoy
            offering them to you.
          </h5>
          <button className="home_btn">Browse More</button>
        </div>
      </div>

      <h1 className="container">Our Products</h1>

      <>
        <div class="shell">
          <div class="container">
            <div class="row">
              {data.map((result) => {
                return (
                  <div class="col-md-3">
                    <div class="wsk-cp-product">
                      <div class="wsk-cp-img">
                        <img
                          src={"http://localhost:7000/" + result.image}
                          alt={result.name}
                          class="img-responsive"
                        />
                      </div>
                      <div class="wsk-cp-text">
                        <div class="category">
                          <span>{result.discount}% OFF</span>
                        </div>
                        <div class="title-product">
                          <h3>{result.name}</h3>
                        </div>
                        <div class="description-prod">
                          <p>{result.desc}</p>
                        </div>
                        <div class="card-footer">
                          <div class="wcf-left">
                            <span class="price">
                              <strike>
                                <small>Rs:{result.old_price}</small>
                              </strike>{" "}
                              &nbsp;
                            </span>
                            <span class="price">Rs:{result.new_price}</span>
                          </div>
                          <div class="wcf-right">
                            <a href="#" class="buy-btn">
                              Add to Cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* newsletter */}
        <div className="ns_container">
          <div className="ns_section">
            <div className="ns_content">
              <h2>Subscribe to our NEWSLETTER</h2>
              <p>
                <form class="form-search" onSubmit={sendEmail} ref={form}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email ..."
                    required
                  />
                  <button type="submit">Send</button>
                </form>
              </p>
            </div>
          </div>
        </div>
      </>
      {/* sandeep about us */}
      {/* <OurTeams /> */}
    </>
  );
};

export default Home;
