import React from "react";
import "./experience.css";

import { Container, Row, Col } from "reactstrap";

const developmentExperienceData = [
  {
    year: "2020 - 2021",
    title: "Sr Frontend Developer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis hic deleniti quo, necessitatibus ducimus minima minus quasi perferendis officia similique!",
  },
  {
    year: "2020 - 2021",
    title: "Sr Frontend Developer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis hic deleniti quo, necessitatibus ducimus minima minus quasi perferendis officia similique!",
  },
  {
    year: "2020 - 2021",
    title: "Sr Frontend Developer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis hic deleniti quo, necessitatibus ducimus minima minus quasi perferendis officia similique!",
  },
];

const Experience = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5 experience_title">
            Experience
          </Col>

          <Col lg="6" md="6">
            <div className="single_experience-container">
              {developmentExperienceData.map((item, index) => (
                <div className="single_experience" key={index}>
                  <span className="experience_icon">
                    <i class="ri-briefcase-line"></i>
                  </span>
                  <h6>{item.year}</h6>
                  <p>Remote / Full Time</p>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="single_experience-container">
              {developmentExperienceData.map((item, index) => (
                <div className="single_experience" key={index}>
                  <span className="experience_icon">
                    <i class="ri-briefcase-line"></i>
                  </span>
                  <h6>{item.year}</h6>
                  <p>Remote / Full Time</p>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
