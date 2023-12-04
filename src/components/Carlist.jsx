// import React, { useState } from "react";
import Table from "react-bootstrap/Table";
const Carlist = (props) => {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Sr.</th>
          <th>Name</th>
          <th>Model</th>
          <th>Qunatity</th>
        </tr>
      </thead>
      <tbody>
        {props.list.map((car, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{car.name}</td>
            <td>{car.model}</td>
            <td>{car.quantity}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default Carlist;
