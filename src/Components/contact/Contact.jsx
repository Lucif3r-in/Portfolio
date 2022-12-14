import React from "react";
import "./contact.css";

import { Container, Row, Col } from "reactstrap";
import Form from "../form/Form";

const Contact = () => {
  return (
    <section id="contact" data-aos="fade-up" data-aos-duration="1000">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>Get in touch</h2>
          </Col>

          <Col lg="6" md="6">
            <div className="contact_info-container d-flex align-items-center gap-5">
              <div className="single_info-box w-50">
                <h6>Address</h6>
                <p>Bhubaneswar, India</p>
              </div>

              <div className="single_info-box w-50">
                <h6>Phone</h6>
                <p>+91 8018663432</p>
              </div>
            </div>

            <div className="contact_info-container d-flex align-items-center gap-5">
              <div className="single_info-box w-50">
                <h6>Email</h6>
                <p>ashutosh123rath@gmail.com</p>
              </div>

              <div className="single_info-box w-50">
                <h6>Location</h6>
                <p>Odisha, India</p>
              </div>
            </div>

            <div className="contact_info-container d-flex align-items-center gap-5">
              <div className="single_info-box w-50">
                <h6>Instagram</h6>
                <p>@v_ashu_dev</p>
              </div>

              <div className="single_info-box w-50">
                <h6>LinkedIn</h6>
                <p>Ashutosh Rath</p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
