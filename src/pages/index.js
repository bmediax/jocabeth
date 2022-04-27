import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.scss";

import * as React from "react";

import CuarentaDias from "../components/CuarentaDias";
import Footer from "../components/Footer";
import Gallery from "../components/newGallery";
import Header from "../components/header";
import Nav from "../components/Nav";
import Schedule from "../components/Schedule";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import Story from "../components/Story";
import ThankU from "../components/ThankU";

const IndexPage = () => {
  return (
    <>
      <Seo title="Jocabeth's Memorial" />
      <Header />
      <Nav />
      <Story />
      <StaticImage
        src="../images/joca-viw.jpg"
        alt="Altar"
        className="sectionImage"
      />
      <Schedule />
      <CuarentaDias />
      <ThankU />
      <Gallery />
      <Footer />
    </>
  );
};

export default IndexPage;
