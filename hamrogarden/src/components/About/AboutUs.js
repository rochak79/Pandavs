import React from "react";
import "./AboutUs.css";
import hanC from "../../images/hanC.jpg";
import gar from "../../images/gar.jpg";
import pot from "../../images/pot.png";
import rohan from "../../images/rohan.jpg";
import manoj from "../../images/manoj.jpg";
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            repellendus molestiae expedita. Fugiat est eius voluptate iure quos,
            non sequi pariatur nulla, corrupti labore inventore nesciunt. Quos
            quasi magnam aut dolore repudiandae vitae odit illo aliquid delectus
            animi id sint, assumenda ducimus qui voluptate esse? Porro, magni
            hic assumenda error perferendis pariatur ratione maiores numquam
            eius consequuntur ut nesciunt repellendus qui ipsa dolores libero
            quaerat voluptates veritatis aliquam cumque animi quod voluptatem
            sunt. Tempora blanditiis porro ea soluta! Possimus quam commodi
            molestiae veniam odio facere ab asperiores eveniet, nisi, aspernatur
            quae officiis deleniti similique quibusdam praesentium pariatur
            impedit quia ex?
          </p>
          <div className="btn">
            <a href="#">
              <button className="btn_seemore">See More</button>
            </a>
          </div>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            natus quasi mollitia placeat deserunt sit sunt facilis quas delectus
            sapiente.
          </p>
        </div>
        <div className="sub-cards">
          <img src={assis} alt="" />
          <h2>We Provide</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
            reiciendis dolores at nam laboriosam dicta architecto consequuntur
            libero quisquam provident!
          </p>
        </div>
        <div className="sub-cards">
          <img src={care} alt="" />
          <h2>We Care</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            itaque asperiores sequi esse sunt aut consectetur sint eos
            laudantium dicta.
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
