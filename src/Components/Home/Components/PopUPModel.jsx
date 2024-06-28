import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PopUPModel() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        More
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Our Services</Modal.Title>
        </Modal.Header>
        <Modal.Body> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam adipisci maiores vero sunt tempore? Aliquam itaque asperiores nobis commodi consequuntur suscipit nisi quibusdam, nesciunt iste, beatae inventore accusamus animi voluptate!</Modal.Body>
        {/* <Modal.Footer>
          
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default PopUPModel;