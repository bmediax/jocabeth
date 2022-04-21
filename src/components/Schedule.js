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
      <blockquote>
        Por peticion de el Esposo e Hijos se les pide de fabor no tomar fotos y
        video. Guardemos este triste acontecimento en nuestras memorias. <br></br><br></br>At
        the request of the Husband and Children, they are kindly asked not to
        take photos and video. Let's keep this sad event in our memories
      </blockquote>
      <Container fluid={true}>
        <Row>
          <Col>
            {/* Table with the Schedule */}
            <ScheduleTable />
          </Col>
        </Row>
        <Row className={scheduleStyles.locationsSection}>
          <Col xs={12} sm={12} md={6}>
            <InfoCard
              title="Omega Funeral & Cremation Services"
              link="https://g.page/omegafuneralandcremationservice?share"
              linkText={"223 SE 122nd Ave. Portland, OR 97233"}
              mapSrc="https://maps.google.com/maps?q=223%20SE%20122nd%20Ave.%20Portland,%20OR%2097233&t=&z=17&ie=UTF8&iwloc=&output=embed"
            />
          </Col>
          <Col xs={12} sm={12} md={6}>
            <InfoCard
              title="Historic Columbia Cementery"
              link="https://goo.gl/maps/bu9zQiyeKG9vRdMZ9"
              linkText={"1151 N Columbia Blv. Portland, OR 97211"}
              mapSrc="https://maps.google.com/maps?q=1151%20N%20Columbia%20Blv.%20Portland,%20OR%2097211&t=&z=17&ie=UTF8&iwloc=&output=embed"
            />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default Schedule;
