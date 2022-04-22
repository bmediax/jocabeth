import * as tableStyles from "../styles/scheduleTable.module.scss";

import React from "react";
import { Table } from "react-bootstrap";

const ScheduleTable = () => (
  <div id={tableStyles.table}>
    <h2>Schedule / Horario</h2>
    <Table
      bordered
      hover
      responsive
      style={{
        marginInline: "auto",
        paddingBlock: "30px",
      }}
    >
      <tbody>
        <tr>
          <td>9:30 am</td>
          <td>Empiezo de celebracion en Omega Funeral & Cremation Services</td>
          <td>Start Celebration at Omega Funeral & Cremation Services</td>
        </tr>
        <tr>
          <td>10:00 am</td>
          <td>Misa de cuerpo presente</td>
          <td>Holy Mass of present Body</td>
        </tr>
        <tr>
          <td>11:00 am</td>
          <td>Personas que quiran compartir unas palabras</td>
          <td>People who wish to share a few words</td>
        </tr>
        <tr>
          <td>12:00 pm</td>
          <td>Servicio de el Pastor Otoniel Romero</td>
          <td>Service by Pastor Otoniel Romero</td>
        </tr>
        <tr>
          <td>1:00 pm</td>
          <td>Personas que quieran compartir unas palabras</td>
          <td>People who wish to share a few words</td>
        </tr>
        <tr>
          <td>2:30 pm</td>
          <td>Partida al cementerio</td>
          <td>Head to Cementary</td>
        </tr>
        <tr>
          <td>3:00 pm</td>
          <td>Servicio en Historic Columbia Cementery</td>
          <td>Funeral Service at the Historic Columbia Cementery</td>
        </tr>
        <tr>
          <td colSpan="3">
            <p style={{padding:"0", margin:"0", fontWeight:"500"}}>
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
            </p>
          </td>
        </tr>
      </tbody>
    </Table>
  </div>
);

export default ScheduleTable;
