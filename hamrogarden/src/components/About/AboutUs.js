import React from "react";
import "./AboutUs.css";
import hanC from "../../images/hanC.jpg";
import gar from "../../images/gar.jpg";
import pot from "../../images/pot.png";
import rohan from "../../images/rohan.jpg";
import manoj from "../../images/m.jpg";
import rochak from "../../images/rochak.jpg";
import sandeep from "../../images/sandeep.jpg";
import me from "../../images/me.jpg";
import assis from "../../images/assis.png";
import care from "../../images/care.png";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="main">
      <div className="hh">
        <h1>
          About <span>Us</span>
        </h1>
      </div>
      <div className="first-card">
        <div className="img-1st">
          <img src={gar} alt="" />
        </div>
        <div className="description">
          <p>
            Hamro Garden was established with the intention of beautifying your
            garden and making it look aesthetic. We are all aware of how nature
            can have an impact on people's day to day lives. Amid city's busy
            lives, people crave that touch and beauty of plants, and the plants
            fulfill that purpose by giving you some unqiue therapeautic
            experince by its beauty and its touch. Here's where we come in as a
            team. We want to be a part of your gardening journey, whether at
            work or at home and we will be at your service with regards to
            gardening.
          </p>
        </div>
      </div>
      <div className="hh">
        <h1>
          What Do <span>We</span> Do?
        </h1>
      </div>
      <div className="second-card">
        <div className="sub-cards">
          <img src={pot} alt="" />
          <h2>We Sell</h2>
          <p>
            We sell top quality products to our customers to ensure you have
            everything you need at the right and best quality. The quality of
            product isn't compromised and we will make sure of that.
          </p>
        </div>
        <div className="sub-cards">
          <img src={assis} alt="" />
          <h2>We Provide</h2>
          <p>
            We are always at your service and your inconvinience with regards to
            any of our products concerns us very much so we would always help
            you if you have any concerns regarding our product.
          </p>
        </div>
        <div className="sub-cards">
          <img src={care} alt="" />
          <h2>We Care</h2>
          <p>
            We care about your needs and desired goal about your garden on how
            you are looking forward to beautify it. We care about your order and
            feedbacks are very important to us.
          </p>
        </div>
      </div>

      <div className="hh">
        <h1 id="OT">
          Our <span>Team</span>
        </h1>
      </div>
      <div className="second-card">
        <div className="sub-cards">
          <img src={rohan} alt="" />
          <h2>Rohan Chaulagain</h2>
          <p>Full Stack Developer</p>
        </div>
        <div className="sub-cards">
          <img src={manoj} alt="" />
          <h2>Manoj Poudel</h2>
          <p>Full Stack Developer</p>
        </div>
        <div className="sub-cards">
          <img src={rochak} alt="" />
          <h2>Rochak Bhusal</h2>
          <p>Full Stack Developer</p>
        </div>
        <div className="sub-cards">
          <img src={sandeep} alt="" />
          <h2>Sandeep Chaudhary</h2>
          <p>Full Stack Developer</p>
        </div>
        <div className="sub-cards">
          <img src={me} alt="" />
          <h2>Sangeet Paudel</h2>
          <p>Full Stack Developer</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
