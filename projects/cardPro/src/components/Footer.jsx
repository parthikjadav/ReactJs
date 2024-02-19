import React from "react";
import "../App.css"

const Footer = () => {
  return (
    <div>
      <section class="contact-area mt-5" id="contact">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 offset-lg-3">
              <div class="contact-content text-center">
                <a href="#">
                  <img src="https://i.ibb.co/QDy827D/ak-logo.png" alt="logo" />
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum{" "}
                </p>
                <div class="hr"></div>
                <h6>1120 Lorem ipsum dolor sit amet, KC 179050, Chandigarh.</h6>
                <h6>
                  +01 2345 6789 12<span>|</span>+01 2345 6789 12
                </h6>
                <div class="contact-social">
                  <ul>
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
        <p className="m-0">
          Copyright &copy; 2019{" "}
          <img src="https://i.ibb.co/QDy827D/ak-logo.png" alt="logo" /> All
          Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
