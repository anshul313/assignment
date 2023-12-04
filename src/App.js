import { useState } from "react";
import "./App.css";
import AddCar from "./components/AddCar";
import Carlist from "./components/Carlist";
import { Button, Modal } from "react-bootstrap";

function App() {
  const [carlist, setcarlist] = useState([
    // {
    //   name: "dummy",
    //   model: "dummy",
    //   quantity: 3,
    // },
  ]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const createNewCar = (car) => {
    console.log(car);
    if (
      carlist.find((elem) => car.name == elem.name && car.model == elem.model)
    ) {
      setcarlist(
        carlist.map((c) => {
          if (c.name == car.name && c.model == car.model) {
            c.quantity += 1;
          }
          return c;
        })
      );
    } else {
      setcarlist([...carlist, { ...car, quantity: 1 }]);
    }
    handleClose();
  };

  return (
    <div className="App">
      <div style={{ float: "right" }}>
        <Button color="info" onClick={handleShow}>
          Add New
        </Button>
      </div>
      <Carlist list={carlist} />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Car</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddCar onSubmit={createNewCar} />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default App;
