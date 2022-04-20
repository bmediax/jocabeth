import * as sectionStyles from "../styles/section.module.scss";

import React from "react";

const Section = ({ title, children, type, id }) => {
  return (
    <section id={id} className={`${sectionStyles.section} ${type}-section`}>
      <h1 className={sectionStyles.title}>{title}</h1>
      <div className={sectionStyles.content}>{children}</div>
    </section>
  );
};

export default Section;
