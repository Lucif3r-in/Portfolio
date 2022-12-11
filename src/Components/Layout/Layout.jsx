import React, { Fragment } from "react";
import Header from "../Header/Header";
import HeroSection from "../Hero-section/HeroSection";
import About from "../About/about";
import Services from "../services/Services";
import Experience from "../Experience/Experience";
import Portfolio from "../../Portfolio/Portfolio";
import Testimonial from "../Testimonial/Testimonial";
import Contact from "../contact/Contact";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <About />
      <Services />
      <Experience />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default Layout;
