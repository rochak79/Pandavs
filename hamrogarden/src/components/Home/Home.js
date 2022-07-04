import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import axios from "axios";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import c from "../../images/c.png";
import t from "../../images/t.jpg";
import u from "../../images/u.png";
import d from "../../images/d.jpg";
import f from "../../images/f.jpg";
import s from "../../images/s.jpg";
import fe from "../../images/fe.jpg";
import to from "../../images/to.jpg";

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
      })
      .catch((err) => {
        console.log(err);
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

      <>
        {/* <div class="shell">
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
        </div> */}
        {/* newsletter */}
        {/* <div className="ns_container">
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
        </div> */}
      </>

      {/* Trusted partner */}
      <div className="trusted">
        <h3 className="trusted-h">Your trusted partner!</h3>
        <p>Give us a chance to serve the best things of gardening!</p>
        <p>Your trust is all we want.</p>
        <button className="partner-btn">Shop Now</button>
      </div>

      {/* Card */}
      <h3 className="for-you text-center">For you..</h3>
      <div class="container cards-list mb-5">
        <Link to="/">
          <div class="card_1">
            <div class="card_image">
              {" "}
              <img src={f} />{" "}
            </div>
            <div class="card_title title-white">
              <p>Flowers</p>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div class="card_1">
            <div class="card_image">
              {" "}
              <img src={to} />{" "}
            </div>
            <div class="card_title title-white">
              <p>Tools</p>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div class="card_1">
            <div class="card_image">
              {" "}
              <img src={fe} />{" "}
            </div>
            <div class="card_title title-white">
              <p>Fertilizers</p>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div class="card_1 mb-5">
            <div class="card_image">
              {" "}
              <img src={s} />{" "}
            </div>
            <div class="card_title title-white">
              <p>Seeds</p>
            </div>
          </div>
        </Link>
      </div>
      {/* Cart */}

      <div className="cart-section">
        <div className="inner-cart">
          <img src={c} alt="Cart" className="cart-image" />
          <div className="cart-inner-content">
            <h3>
              <b>UPTO 50% OFF</b>
            </h3>
            <p>Find out more!</p>
            <button className="cart-inner-btn">Shop Now</button>
          </div>
        </div>
      </div>
      {/* Offers */}
      <h3 className="container mb-4 mt-lg-4 offer">Offers</h3>
      <div className="container offers">
        <div className="inner-offers">
          <img src={d} alt="Discount" className="offers-img" />
          <p className="byadmin">By Admin</p>
          <p className="title-admin">
            Enjoy heavy discounts on various products
          </p>
          <p className="inner-offer-desc">
            Enjoy seasonal discounts on your favourite products. We don't charge
            you more for any products. Price as well as products we provide are
            100% genuine and are low on price.
          </p>
        </div>
        <div className="inner-offers">
          <img src={t} alt="Discount" className="offers-img" />
          <p className="byadmin">By Admin</p>
          <p className="title-admin">Fully trustworthy</p> <br />
          <p className="inner-offer-desc">
            Your trust is everything we want. Let us serve you with our
            facility. We ensure that you won't face any problem anf by chance if
            you do, we will try to solve it as soon as possible.
          </p>
        </div>
        <div className="inner-offers">
          <img src={u} alt="Discount" className="offers-img" />
          <p className="byadmin">By Admin</p>
          <p className="title-admin">
            Enhanced user experience by fixing minor bugs ans glitches
          </p>
          <p className="inner-offer-desc">
            User experience affects the flow of user. Keeping this in mind, we
            have improved our designs such that no user will feel difficulty
            while using out site.{" "}
          </p>
        </div>
      </div>
      {/* newsletter */}
      <div className="container newsletter">
        <div className="inner-newsletter">
          <h3>Get update from anywhere!</h3>
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
      {/* sandeep about us */}
      {/* <OurTeams /> */}
    </>
  );
};

export default Home;
