import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const AddCar = (props) => {
  const [car, setCar] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(car);
    return false;
  };

  const handleChange = (e) =>
    setCar({ ...car, [e.target.name]: e.target.value });

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
        <Form.Label column sm={2}>
          Name
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleChange}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalModel">
        <Form.Label column sm={2}>
          Model
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            name="model"
            type="text"
            placeholder="Model"
            onChange={handleChange}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Save</Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default AddCar;
