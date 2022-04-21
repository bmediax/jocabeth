import * as sectionStyles from "../styles/section.module.scss";

import React from "react";

const Section = ({ title, children, type, id }) => {
  const isTitle = (titleData) => {
    if (titleData === "" || titleData === undefined) {
      return "";
    } else {
      return <h1 className={sectionStyles.title}>{title}</h1>;
    }
  };
  return (
    <section id={id} className={`${sectionStyles.section} ${type}-section`}>
      {isTitle(title)}
      <div className={sectionStyles.content}>{children}</div>
    </section>
  );
};

export default Section;
