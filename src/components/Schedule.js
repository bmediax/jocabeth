import * as scheduleStyles from "../styles/schedule.module.scss";

import { Col, Container, Row } from "react-bootstrap";

import InfoCard from "./InfoCard";
import React from "react";
import ScheduleTable from "./ScheduleTable";
import Section from "./Section";

const Schedule = () => {
  return (
    <Section
      title="Servicio Funerario / Funeral Service"
      type="schedule"
      id="schedule"
    >
      <Container fluid={true} className={scheduleStyles.importantSection}>
        <Row>
          <Col md={12}>
            <h2>Importante / Important</h2>
          </Col>
          <Col md={12}>
            <blockquote>
              Por peticion de el Esposo e Hijos se les pide de fabor no tomar
              fotos y video. Guardemos este triste acontecimento en nuestras
              memorias.
              <br></br>
              <br></br>At the request of the husband and children, they kindly
              ask not to take photos and video. Let's keep this sad event in our
              memories.
            </blockquote>
          </Col>
          <Col md={12}>
            <blockquote>
              Se les recomienda que usen cubreboca y hand sanitizer. Pero si
              tiene sintomas de covid le pedimos que se quede en casa por el
              bien de los demas.
              <br></br>
              <br></br>
              We recommend that you use face masks and hand sanitizer. But if
              you have symptoms of covid we ask you to stay home for the good of
              others.
            </blockquote>
          </Col>
          <Col md={12}>
            <blockquote>
              {/* Si trae un niño, esté atento a ellos ya que queremos sé respetuoso
              con los que estan presente. */}
              El funeral puede ser un evento muy traumatica para nuestros
              pequenos se les recomienda que queden en casa, pero si desean
              traerlos cuiden de ellos y hablen con ellos sobre lo que esta
              pasando.
              <br></br>
              <br></br>
              The funeral can be a very traumatic event for our little ones, it
              is recommended that they stay home, but if you want to bring them,
              take care of them and talk to them about what is happening.
              {/* If you are bringing a child, please be attentive to them as we
              want to remain respectful to those who are present. */}
            </blockquote>
          </Col>
        </Row>
      </Container>
      <Container fluid={true} className={scheduleStyles.scheduleSection}>
        <Row>
          <Col>
            {/* Table with the Schedule */}
            <ScheduleTable />
            {/* <p class={scheduleStyles.invitation}>
              Despues del funeral se les invita a un Rosario y cena en la casa
              de la familia Moreno Teodoro.{" "}
              <a href="https://goo.gl/maps/XSAx4NnegatVMeKN8">
                8943 NE GOING ST. Portland, OR.
              </a>
              <br></br>
              After the burial we invite you to a Rosary and dinner at the house
              of the Moreno Teodoro family.{" "}
              <a href="https://goo.gl/maps/XSAx4NnegatVMeKN8">
                8943 NE GOING ST. Portland, OR.
              </a>
            </p> */}
          </Col>
        </Row>
        <Row className={scheduleStyles.locationsSection}>
          <Col xs={12} sm={12} md={6}>
            <InfoCard
              title="Omega Funeral & Cremation Services"
              link="https://g.page/omegafuneralandcremationservice?share"
              linkText="223 SE 122nd Ave. Portland, OR 97233"
              mapSrc="https://maps.google.com/maps?q=223%20SE%20122nd%20Ave.%20Portland,%20OR%2097233&t=&z=17&ie=UTF8&iwloc=&output=embed"
            />
          </Col>
          <Col xs={12} sm={12} md={6}>
            <InfoCard
              title="Historic Columbia Cementery"
              link="https://goo.gl/maps/bu9zQiyeKG9vRdMZ9"
              linkText="1151 N Columbia Blv. Portland, OR 97211"
              mapSrc="https://maps.google.com/maps?q=1151%20N%20Columbia%20Blv.%20Portland,%20OR%2097211&t=&z=17&ie=UTF8&iwloc=&output=embed"
            />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default Schedule;
