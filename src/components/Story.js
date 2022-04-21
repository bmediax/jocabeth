import * as storyStyles from "../styles/story.module.scss";

import React from "react";
import Section from "./Section";

const Story = () => {
  return (
    <Section
      title="JOCABETH’S STORY / LA HISTORY DE JOCABETH"
      type="intro"
      className={storyStyles.section}
    >
      <p>
        On Friday, April 15th, Jocabeth Teodoro - Garcia had medical
        complications that resulted in her passing away.
      </p>

      <p>
        Jocabeth, for those that knew her, was an extraordinarily strong woman
        who was fighting lupus for over 15 years and was active in her
        community. She inspired many people and made strives to keep moving
        forward.
      </p>
      <p>
        Since then, she's been involved and organizing Zumba classes, involved
        in helping and sharing her experiences with people who've also had
        chronic conditions, and joining a bible study.
      </p>
    </Section>
  );
};
export default Story;
