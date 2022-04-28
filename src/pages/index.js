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
import TopBar from '../components/Topbar';

const IndexPage = () => {
  return (
    <>
      <TopBar
        title="Zumbathon Fundraiser"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia optio quas magnam exercitationem soluta laborum! Odit commodi laudantium possimus quibusdam tenetur sit modi repudiandae, dolorum debitis aspernatur ipsa atque earum!"
        link="https://google.com"
        btnText="Visit Now"
      />
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
