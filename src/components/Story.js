import * as storyStyles from "../styles/story.module.scss";

import React from "react";
import Section from "./Section";

const Story = () => {
  return (
    <Section
      title="LA HISTORIA DE JOCABETH / JOCABETH’S STORY"
      type="intro"
      id="story"
      className={storyStyles.section}
    >
      <p>
        El viernes 15 de abril, Jocabeth Teodoro - García tuvo complicaciones
        médicas que resultaron en su fallecimiento.
      </p>
      <p>
        Jocabeth, para quienes la conocían, era una mujer poderosa que había
        estado luchando contra el lupus durante más de 15 años y era activa en
        su comunidad. Ella inspiró a muchas personas y se esforzó por seguir
        adelante.
      </p>
      <p>
        Desde entonces, ha estado involucrada en la organización de clases de
        Zumba, ayudando y compartiendo sus experiencias con personas que también
        han tenido enfermedades crónicas y uniéndose a un estudio bíblico.
      </p>
      <hr
        style={{
          height: "3px",
          background: "#d9d9d9",
          marginBlock: "clamp(10px, 2vw, 30px)",
        }}
      />
      <p>
        On Friday, April 15th, Jocabeth Teodoro - Garcia had medical
        complications that resulted in her passing away.
      </p>
      <p>
        Jocabeth, for those that knew her, was a powerful woman who had been
        fighting lupus for over 15 years and was active in her community. She
        inspired many people and made strives to keep moving forward.
      </p>
      <p>
        Since then, she's been involved in organizing Zumba classes, helping and
        sharing her experiences with people who've also had chronic conditions
        and joining a bible study.
      </p>
    </Section>
  );
};
export default Story;
