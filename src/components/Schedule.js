import * as scheduleStyles from '../styles/schedule.module.scss';

import { Col, Container, Row } from "react-bootstrap";

import InfoCard from "./InfoCard";
import React from "react";
import ScheduleTable from "./ScheduleTable";
import Section from "./Section";

const Schedule = () => {
  return (
    <Section title="Schedule / Horario" type="schedule" id="schedule">
      <blockquote>
        Por respeto al esposo y hijos de jocabeth no se dejara sacar fotos
        durante el...
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
            />
          </Col>
          <Col xs={12} sm={12} md={6}>
            <InfoCard
              title="Historic Columbia Cementery"
              link="https://goo.gl/maps/bu9zQiyeKG9vRdMZ9"
              linkText={"1151 N Columbia Blv. Portland, OR 97211"}
            />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default Schedule;
