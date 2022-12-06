import React from "react";
import { Container } from "reactstrap";
import "./header.css";

const navLinks = [
  {
    display: "Home",
    url: "#home",
  },
  {
    display: "About",
    url: "#about",
  },
  {
    display: "Services",
    url: "#services",
  },
  {
    display: "Portfolio",
    url: "#portfolio",
  },
  {
    display: "Contact",
    url: "#contact",
  },
];

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h5>Ashutosh</h5>
          </div>
          <div className="nav_menu">
            <ul className="nav_list">
              {navLinks.map((item, index) => (
                <li className="nav_item">
                  <a href={item.url}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav_right d-flex align-items-center gap-4">
            <button className="btn2">Let's talk</button>
            <span className="mobile_menu">
              <i class="ri-menu-5-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
