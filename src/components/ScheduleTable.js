import * as tableStyles from "../styles/scheduleTable.module.scss";

import React from "react";
import { Table } from "react-bootstrap";

const ScheduleTable = () => (
  <div id={tableStyles.table}>
    <h2>Schedule</h2>
    <Table
      bordered
      hover
      responsive
      style={{
        marginInline: "auto",
        paddingBlock: "30px",
      }}
    >
      <thead>
        <tr>
          <th>Time</th>
          <th>Spanish</th>
          <th>English</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>9:00 am</td>
          <td>Empiezo de celebracion</td>
          <td>Start Celebration</td>
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
          <td>Servicio de el Pastor Hociel Romero</td>
          <td>Service by Pastor Hociel Romero</td>
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
          <td>Servicio en el cementerio</td>
          <td>Funeral Service at the Cementary</td>
        </tr>
      </tbody>
    </Table>
  </div>
);

export default ScheduleTable;
