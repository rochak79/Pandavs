import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <section class="sectionfooter contact-area " id="contact">
        <div class="container sectionfooter">
          <div class="row">
            <div class="col-lg-6 offset-lg-3">
              <div class="contact-content text-center">
                <a href="#">
                  {/* <img src={test} className="img" alt="logo" /> */}
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum{" "}
                </p>
                <div class="hr"></div>
                <h6>
                  An eNursery website, where you can find your desired gardening
                  products easily.
                </h6>
                <h6>
                  +977-9868828760<span>|</span>057-520411
                </h6>
                <div class="contact-social">
                  <ul className="ul">
                    <li>
                      <a class="hover-target" href="">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a class="hover-target" href="">
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a class="hover-target" href="">
                        <i class="fab fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a class="hover-target" href="">
                        <i class="fab fa-behance"></i>
                      </a>
                    </li>
                    <li>
                      <a class="hover-target" href="">
                        <i class="fab fa-pinterest-p"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>
          Copyright &copy; 2022 <span className="copyright">HAMRO GARDEN</span>.
          All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
