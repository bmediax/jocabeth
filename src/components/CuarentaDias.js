import * as cuarentaStyles from "../styles/cuarentaDias.module.scss";

import React from "react";
import Section from "./Section";

const CuarentaDias = () => {
  return (
    <Section
      title="40 Días / 40 Days"
      type="CuarentaDias"
      id="40dias"
      className={cuarentaStyles.section}
      style={{ "--title-marginBlockEnd": "10px" }}
    >
      <h3 className={cuarentaStyles.date}>
        05.25.2022
      </h3>
      {/* <p>Se les invita a un Rezo de 40 Dias el dia 25 de Mayo 2022</p>
      <p>We invite you to a "Rezo" of "40 días" May 25th, 2022</p>

      <a
        target="_blank"
        href="http://maps.google.com/?q=8943 NE Going Street, Oregon, Portland, 97220"
        rel="noreferrer"
      >
        8943 NE Going Street, Portland, OR 97220
      </a> */}
    </Section>
  );
};

export default CuarentaDias;
