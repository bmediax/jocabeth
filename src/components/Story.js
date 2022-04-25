import * as storyStyles from "../styles/story.module.scss";

import { AiFillHeart } from "react-icons/ai";
import React from "react";
import Section from "./Section";

const Story = () => {
  return (
    <Section
      title="Obituario / Obituary"
      type="intro"
      id="story"
      className={storyStyles.section}
    >
      <p>
        Jocabeth Teodoro - Garcia nacio in Marquelia, Guerrero, fue hija de Cira
        Garcia y Clemente Teodoro y tenia un hermano Abel Teodoro. Convivio con
        tia Susana Garcia como una hermana.
      </p>

      <p>
        Contrajo matrimonio con Victor Moreno y tuvieron dos hijos, Brian Moreno
        - Teodoro and David Moreno - Teodoro.
      </p>

      <p>
        Fue una persona que no la detenia los obstaculos, como por ejemplo el
        lupus, que es una enfermedad cronica comparada al cancer. Incluso con
        barreras lingüísticas y culinarias por su amor a su familia y el
        aprendizaje se convirtió en experta. Tomo clases de zumba para obtener
        un certificado para poder ayudar a sus conocidas a mantener un estilo de
        vida saludable y tambien empezo a dar clases de corte y confección para
        poder ayudar a la comunidad.
      </p>

      <p>
        Le gustaba ayudar y participar en diferentes organizaciones, mientras le
        permitia su estado de salud. Joca siempre busco la forma de estar bien
        fisicamente y mentalmente. Ella siempre mantenia una dieta saludable, le
        gustaba mucho hacer ejercicio, escuchar musica y platicas
        motivacionales.
      </p>

      <p>
        "Siempre te recordaremos por haber sido una persona de buen corazon
        apoyando y amando a tu familia en todo momento, por tu valentia en la
        lucha contra lupus hasta el ultimo momento."{" "}
        <AiFillHeart
          style={{ color: "var(--color-purple)", display: "inline-block" }}
        />
      </p>

      <hr
        style={{
          height: "3px",
          background: "#d9d9d9",
          marginBlock: "clamp(10px, 2vw, 30px)",
        }}
      />
      <p>
        Jocabeth Teodoro - Garcia was born in Marquelia, Guerrero, Mexico; she
        was the daughter of Cira Garcia and Clemente Teodoro and had a brother
        named Abel Teodoro. Jocabeth was very close with her aunt Susana Garcia
        like a sister.
      </p>
      <p>
        She was married to Victor Moreno and had two sons, Brian Moreno -
        Teodoro and David Moreno - Teodoro.
      </p>
      <p>
        Jocabeth was a person who was not detained by any obstacles, like with
        Lupus, which is a chronic condition compared to Cancer. Even with
        linguistic and culinary barriers, her love for her family and learning
        made her an expert. She took Zumba classes to obtain her certification
        to help the people around her maintain a healthy life style. She also
        started cut and confection classes to help the community.
      </p>

      <p>
        While her health condition allowed her, she enjoyed helping and
        participating in different organizations. Joca always found a way to be
        good physically and mentally. She always maintained a healthy diet; she
        loved doing exercise and listening to motivational music/talks.
      </p>

      <p>
        "We will always remember you for being a person with a big heart,
        supporting and loving your family every moment, for being valiant in the
        fight against lupus until the very last moments."{" "}
        <AiFillHeart
          style={{ color: "var(--color-purple)", display: "inline-block" }}
        />
      </p>
    </Section>
  );
};
export default Story;
