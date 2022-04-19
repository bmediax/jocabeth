import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Seo from "../components/seo";
import "../styles/index.scss";

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <h1>Jocabeth's Memorial</h1>
    <div id="card_wrapper">
      <StaticImage src="../images/joca-cover_top.jpg" alt="GoFundMe Cover" />
      <div className="card_content">
        <a href="https://www.gofundme.com/f/jocabeth">Visit GoFundMe</a>
      </div>
    </div>
  </>
);

export default IndexPage;
