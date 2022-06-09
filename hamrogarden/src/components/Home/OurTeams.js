import React from "react";
import "./OurTeams.css";
import SANDEEP from "../../images/sandeep.jpg";
import MANOJ from "../../images/manoj.jpg";
import ROCHAK from "../../images/rochak.jpg";
import ROHAN from "../../images/rohan.jpg";
import SANGEET from "../../images/sangeet.jpg";

const data = [
  {
    avatar: SANDEEP,
    name: "Sandeep Chaudhary",
    position: "Full Stack Developer",
  },
  {
    avatar: SANGEET,
    name: "Sangeet Poudel",
    position: "Full Stack Developer",
  },
  {
    avatar: ROHAN,
    name: "Rohan Chaulagain",
    position: "Full Stack Developer",
  },
  {
    avatar: MANOJ,
    name: "Manoj Poudel",
    position: "Full Stack Developer",
  },
  {
    avatar: ROCHAK,
    name: "Rochak Bhusal",
    position: "Full Stack Developer",
  },
];

const OurTeams = () => {
  return (
    <section id="teams">
      <h5>Our Developmental Team</h5>
      <h2>Our Teams</h2>
      <div className="container teams__container">
        {data.map(({ avatar, name, position }, index) => {
          return (
            <article key={index} className="team">
              <div className="team__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="team__name">{name}</h5>
              <small className="team__position">{position}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default OurTeams;
