import React from "react";
import "./testimonial.css";

import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5 text-center">
            <h2>What others say about me?</h2>
          </Col>

          <Col lg="6" className="m-auto">
            <Slider {...settings}>
              <div>
                <div className="single_testimonial">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio ducimus quas doloribus ut rerum, eum minus,
                    voluptatem, commodi qui id at alias! Voluptate eos odio
                    facere, quis rem accusantium cupiditate?Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Excepturi, veritatis.
                  </p>
                  <h6>Anmol Pattnayak</h6>
                  <p className="title">Web Developer</p>
                </div>
              </div>

              <div>
                <div className="single_testimonial">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio ducimus quas doloribus ut rerum, eum minus,
                    voluptatem, commodi qui id at alias! Voluptate eos odio
                    facere, quis rem accusantium cupiditate?Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Excepturi, veritatis.
                  </p>
                  <h6>Anmol Pattnayak</h6>
                  <p className="title">Web Developer</p>
                </div>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
