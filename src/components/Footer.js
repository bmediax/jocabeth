import * as footerStyles from "../styles/footer.module.scss";

import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <p>
        <i>
          En la memoria de Jocabeth Teodoro - Garcia
        </i>
      </p>
      <StaticImage src="../images/flower.png" alt="Flower" />
    </footer>
  );
};

export default Footer;
