import * as tableStyles from "../styles/scheduleTable.module.scss";

import React from "react";
import { Table } from "react-bootstrap";

const ScheduleTable = () => (
  <div id={tableStyles.table}>
    <h2>Schedule Table</h2>
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
  </div>
);

export default ScheduleTable;
