import * as React from "react";

import Layout from "../components/layout";
import { Link } from "gatsby";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <br />
    <a
      href="https://www.gofundme.com/f/jocabeth"
      style={{ textAlign: "center", display: "block" }}
    >
      Go to Funeral Expenses for Jocabeth Teodoro Garcia Gofundme
    </a>
  </>
);

export default IndexPage;
