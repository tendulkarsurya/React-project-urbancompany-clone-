
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FormExample() {
  return (
    <Navbar className="bg-body-tertiary justify-content-evenly"  id='navbar1'>
      {/* <Form inline>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Form> */}
      {/* <div className='Navbar1_logo'>
        <a href="/" className="tail-text">
          <img src="../Assets/logo.jpg" alt="Logo" id='logo1' className="logo" />
        </a>
      </div> */}
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Login</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}

export default FormExample;
