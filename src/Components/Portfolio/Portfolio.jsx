import React from "react";
import "./portfolio.css";

import { Container, Row, Col } from "reactstrap";

const portfolioData = [
  {
    imgurl:
      "https://res.cloudinary.com/dhnkuonev/image/upload/v1670597341/my%20folder/Screenshot_57_ahth4p.png",
    title: "Landing Page",
    url: "#",
  },
  {
    imgurl:
      "https://res.cloudinary.com/dhnkuonev/image/upload/v1670597493/my%20folder/Screenshot_59_bxosic.png",
    title: "Landing Page",
    url: "#",
  },
  {
    imgurl:
      "https://res.cloudinary.com/dhnkuonev/image/upload/v1670597444/my%20folder/Screenshot_56_wly9md.png",
    title: "Landing Page",
    url: "#",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" data-aos="fade-right">
      <Container>
        <Row>
          <Col lg="12" className="portfolio_top mb-5">
            <h6>Explore my work and give a feedback</h6>
            <h2>Portfolio</h2>
          </Col>

          {portfolioData.map((item, index) => (
            <Col lg="4" md="6" sm="6" key={index}>
              <div className="portfolio_card">
                <div className="portfolio_img">
                  <img src={item.imgurl} alt="" className="w-100" />
                </div>

                <div className="portfolio_content">
                  <div className="content_top w-100">
                    <h5>{item.title}</h5>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
