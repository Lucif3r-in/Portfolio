import React from "react";
import "./about.css";

import { Container, Row, Col } from "reactstrap";

const about = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>About Me</h2>
          </Col>

          <Col lg="4" md="3">
            <div className="about_btns d-flex flex-column align-items-center">
              <button className="about_btn">About Me</button>
              <button className="about_btn">Education</button>
              <button className="about_btn">Skills</button>
              <button className="about_btn">Awards</button>
            </div>
          </Col>

          <Col lg="8" md="9">
            <div className="about_content_wrapper d-flex gap-5">
              <div className="about_image w-25">
                <img src="" alt="" className="w-100" />
              </div>

              <div className="about_content w-75">
                <h2>I'm Ashutosh Rath</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Laborum nam praesentium, perspiciatis officia vitae aperiam et
                  pariatur minima voluptate rerum, quis amet quod consectetur
                  sed tenetur quas, doloribus excepturi nobis.
                </p>
                <div className="social_links">
                  <h6>Connect with me:</h6>
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
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default about;
