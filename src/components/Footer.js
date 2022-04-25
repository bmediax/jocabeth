import * as footerStyles from "../styles/footer.module.scss";

import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <p>
        <i>
          En memoria de Jocabeth Teodoro - Garcia
        </i>
      </p>
      <StaticImage src="../images/flower.png" alt="Flower" draggable={false} />
    </footer>
  );
};

export default Footer;
