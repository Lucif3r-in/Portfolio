import React, { Fragment } from "react";
import Header from "./Header/Header";
import HeroSection from "./Hero-section/HeroSection";
import About from "./About/about";
const Layout = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <About />
    </Fragment>
  );
};

export default Layout;
