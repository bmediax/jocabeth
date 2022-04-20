import "../styles/index.scss";

import * as React from "react";

import Header from "../components/header";
import Section from "../components/Section";
import Seo from "../components/seo";

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <Header />
    <Section title="JOCABETH’S STORY / LA HISTORY DE JOCABETH" type="intro">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
        laoreet vitae ultricies varius erat. vitae ultricies varius erat.{" "}
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
        laoreet vitae ultricies varius erat. vitae ultricies varius erat. vitae
      </p>
    </Section>
    <Section title="Schedule / Horario" type="schedule" id="schedule">
      <blockquote>
        Por respeto al esposo y hijos de jocabeth no se dejara sacar fotos
        durante el...
      </blockquote>
    </Section>
    {/* <h1>Jocabeth's Memorial</h1>
    <div id="card_wrapper">
      <StaticImage src="../images/joca-cover_top.jpg" alt="GoFundMe Cover" />
      <div className="card_content">
        <a href="https://www.gofundme.com/f/jocabeth">Visit GoFundMe</a>
      </div>
    </div> */}
  </>
);

export default IndexPage;
