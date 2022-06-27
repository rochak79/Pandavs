import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import axios from "axios";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";

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
                  <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                    <div className="bg-light card pro-card">
                      <img
                        className="card-img"
                        src={"http://localhost:7000/" + result.image}
                        alt="Image"
                      />
                      <div className="card-body">
                        <h4 className="card-title">{result.name}</h4>
                        <p className="card-text pro-desc">{result.desc}</p>
                        <div className="buy d-flex justify-content-between align-items-center">
                          <div>
                            <h5 className="mt-4">
                              {" "}
                              <strike>
                                <small className="text-danger">
                                  Rs:{result.old_price}
                                </small>
                              </strike>{" "}
                              <div className="text-success">
                                Rs:
                                {result.new_price}
                              </div>
                            </h5>
                          </div>
                          <div className="">
                            <Link
                              to={"/product/" + result._id}
                              className="btn-learnmore btn btn-success mt-3 "
                            >
                              Learn More
                            </Link>
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
