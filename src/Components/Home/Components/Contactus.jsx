import React from "react";
import Container from "react-bootstrap/Container";
import { LiaConnectdevelop } from "react-icons/lia";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const Contactus = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Container className="p-4 container_contaus">
        <LiaConnectdevelop className="inconsty" />
        <h2>Are you a skilled professional?</h2>
        <p>
          Elevate your business by joining TechEon as a Service Expert.
          Highlight your expertise, engage with homeowners, and expand your
          reach. Become a member now!
        </p>
        <button class="btn btn-primary" onClick={handleShow}>
          Become a Partner
        </button>
      </Container  >
      <Modal show={show} onHide={handleClose} size="md">
        <Modal.Header closeButton>
          <Modal.Title>Partner Request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Name"
                autoFocus
              />
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"

              />

              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                placeholder=""

              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Contactus;