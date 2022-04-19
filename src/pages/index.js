import "../styles/index.scss";

import * as React from "react";

import Seo from "../components/seo";

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <div id="card_wrapper">
      <img
        src="https://images.gofundme.com/xoNZR3RCn3cyicTtQvTscrOC3_I=/720x405/https://d2g8igdw686xgo.cloudfront.net/64727775_16501279955438_r.jpeg"
        alt="GoFundMe Cover"
      />
      <div className="card_content">
        <a href="https://www.gofundme.com/f/jocabeth">Visit GoFundMe</a>
      </div>
    </div>
  </>
);

export default IndexPage;
