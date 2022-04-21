import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.scss";

import * as React from "react";

import { Col, Container, Row } from "react-bootstrap";

import Header from "../components/header";
import Section from "../components/Section";
import Seo from "../components/seo";
import Table from "react-bootstrap/Table";
import ThankU from "../components/ThankU";

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <Header />
    <Section title="JOCABETH’S STORY / LA HISTORY DE JOCABETH" type="intro">
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
    <Section title="Schedule / Horario" type="schedule" id="schedule">
      <blockquote>
        Por respeto al esposo y hijos de jocabeth no se dejara sacar fotos
        durante el...
      </blockquote>
      <Container fluid={true}>
        <Row>
          <Col>
            <Table
              bordered
              hover
              responsive
              style={{
                maxWidth: "750px",
                marginInline: "auto",
                paddingBlock: "30px",
              }}
            >
              <tbody>
                <tr>
                  <td>9:00 am</td>
                  <td>Empiezo de celebracion</td>
                </tr>
                <tr>
                  <td>10:00 am</td>
                  <td>Misa de cuerpo presente</td>
                </tr>
                <tr>
                  <td>11:00 am</td>
                  <td>Talk</td>
                </tr>
                <tr>
                  <td>12:00 pm</td>
                  <td>Service by Pastor Hociel Romero</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6}>
            <div className="infoCard">
              <h3>Omega Funeral & Cremation Services</h3>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://g.page/omegafuneralandcremationservice?share"
              >
                223 SE 122nd Ave. Portland, OR 97233
              </a>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <div className="infoCard">
              <h3>Historic Columbia Cementery</h3>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://goo.gl/maps/bu9zQiyeKG9vRdMZ9"
              >
                1151 N Columbia Blv. Portland, OR 97211
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
    <ThankU />
  </>
);

export default IndexPage;
