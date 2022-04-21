import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.scss";

import * as React from "react";

import Footer from "../components/Footer";
import Header from "../components/header";
import Schedule from "../components/Schedule";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import Story from "../components/Story";
import ThankU from "../components/ThankU";

const IndexPage = () => (
  <>
    <Seo title="Jocabeth's Memorial" />
    <Header />
    <Story />
    <StaticImage src="../images/joca_altar_view.jpg" alt="Altar" className="sectionImage"/>
    <Schedule />
    <ThankU />
    <Footer />
  </>
);

export default IndexPage;
