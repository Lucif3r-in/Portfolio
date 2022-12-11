import React from "react";

import { Container } from "reactstrap";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="pb-4">
      <Container className="text-center footer">
        <p>
          Copyright ©️ 2022, Developed by Vasudev <i class="ri-leaf-line"></i>{" "}
          All Rights Reserved
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
