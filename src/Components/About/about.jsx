import React, { useState } from "react";
import "./about.css";

import { Container, Row, Col } from "reactstrap";

import Education from "./Education";
import Skills from "./Skills";
import Awards from "./Awards";

const About = () => {
  const [aboutFilter, setAboutFilter] = useState("ABOUT");

  return (
    <section id="about" data-aos="fade-down">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>About Me</h2>
          </Col>

          <Col lg="4" md="3">
            <div className="about_btns d-flex flex-column align-items-center">
              <button
                className={`about_btn ${
                  aboutFilter === "ABOUT" ? "about_btn_active" : ""
                }`}
                onClick={() => setAboutFilter("ABOUT")}
              >
                About Me
              </button>
              <button
                className={`about_btn ${
                  aboutFilter === "EDUCATION" ? "about_btn_active" : ""
                }`}
                onClick={() => setAboutFilter("EDUCATION")}
              >
                Education
              </button>
              <button
                className={`about_btn ${
                  aboutFilter === "SKILLS" ? "about_btn_active" : ""
                }`}
                onClick={() => setAboutFilter("SKILLS")}
              >
                Skills
              </button>
              <button
                className={`about_btn ${
                  aboutFilter === "AWARD" ? "about_btn_active" : ""
                }`}
                onClick={() => setAboutFilter("AWARD")}
              >
                Certificates
              </button>
            </div>
          </Col>

          <Col lg="8" md="9">
            {aboutFilter === "ABOUT" && (
              <div className="about_content_wrapper d-flex gap-5">
                {/* <div className="about_image ">
                  <img
                    src="https://res.cloudinary.com/dhnkuonev/image/upload/v1670237434/my%20folder/tp3-removebg-preview_jhijrd.png"
                    alt=""
                    className="w-100 h-100"
                  />
                </div> */}

                <div className="about_content w-100 h-100">
                  <h2>I'm Ashutosh Rath</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Laborum nam praesentium, perspiciatis officia vitae aperiam
                    et pariatur minima voluptate rerum, quis amet quod
                    consectetur sed tenetur quas, doloribus excepturi nobis.
                  </p>
                  <div className="social_links">
                    <h6 className="mb-4 w-100">Connect with me:</h6>
                    <span>
                      <a href="#">
                        <i class="ri-facebook-fill"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i class="ri-instagram-fill"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i class="ri-github-fill"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i class="ri-linkedin-box-fill"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i class="ri-mail-fill"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            )}

            {aboutFilter === "EDUCATION" && <Education />}

            {aboutFilter === "SKILLS" && <Skills />}

            {/* {aboutFilter === "AWARD" && <Awards />} */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
