import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./services.css";

const servicesData = [
  {
    icon: "ri-code-line",
    title: "Web Design",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut saepe excepturi veritatis illo velit facilis esse assumenda, corrupti nulla aspernatur.",
  },
  {
    icon: "ri-code-s-slash-line",
    title: "Web Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut saepe excepturi veritatis illo velit facilis esse assumenda, corrupti nulla aspernatur.",
  },
  {
    icon: "ri-landscape-line",
    title: "Graphic Design",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut saepe excepturi veritatis illo velit facilis esse assumenda, corrupti nulla aspernatur.",
  },
  {
    icon: "ri-gallery-line",
    title: "UI/UX Design",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut saepe excepturi veritatis illo velit facilis esse assumenda, corrupti nulla aspernatur.",
  },
];

const Services = () => {
  return (
    <section id="services" data-aos="fade-down" className="serviceSection">
      <Container>
        <Row>
          <Col lg="12" className="service_top">
            <h6>Features</h6>
            <h2>What services I provide</h2>
          </Col>

          {servicesData.map((item, index) => (
            <Col lg="4" md="6" sm="6" key={index} className="mb-4">
              <div className="single_service">
                <span className="service_icon">
                  <i class={item.icon}></i>
                </span>

                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
