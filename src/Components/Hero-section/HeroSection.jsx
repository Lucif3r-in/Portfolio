import React, { useEffect, useRef } from "react";
import "./hero_section.css";

import { Container, Row, Col } from "reactstrap";
import { init } from "ityped";

const HeroSection = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      backDelay: 1500,
      showCursor: true,
      strings: [
        "Ashutosh Rath",
        "a Web Developer",
        "a Competitve Programmer",
        "a Content Creator",
      ],
    });
  }, []);
  return (
    <section className="hero_section" id="home">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero_content flex align-items-center justify-content-center">
              <p className="mb-3">Welcome to my World!</p>
              <h5 className="mb-4">Hi</h5>
              <h2 className="hero_title mb-4">
                I'm <span ref={textRef}></span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                accusantium obcaecati asperiores nostrum voluptates assumenda
                sunt quam at ullam fugiat ratione nisi magnam, consectetur
                cumque{" "}
              </p>

              <div className="hero_btns mt-4 d-flex align-items-center gap-4">
                <button className="hire_btn">Hire Me</button>
                <button className="btn2">Contact</button>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="hero_img">
              <img
                src="https://res.cloudinary.com/dhnkuonev/image/upload/v1670237434/my%20folder/tp3-removebg-preview_jhijrd.png"
                alt=""
                className="w-90"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
