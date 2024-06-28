import React from "react";
import "../Nav/Nav.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import offcanvasNavbar from 'react-bootstrap/Offcanvas'
import offcanvasNavbarLabel from 'react-bootstrap/Offcanvas'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
const Header = () => {

    return (
        <div
            className="headers"
            style={{
                position: "sticky",
                top: "0px",
                zIndex: "9999999",
                backgroundColor: "green",
            }}
        >
            {["xl"].map((expand) => (
                <Navbar
                    key={expand}
                    expand={expand}
                    style={{ padding: "0px", background: "white" }}
                >
                    <Container fluid style={{ padding: "5px 20px" }}>
                        <div className="d-flex gap-2 bg-logo-color" >
                            <a href="/" className="tail-text">
                                <img src="../Assets/logo.png" alt="Logo" className="logo" />
                            </a>

                        </div>
                        <Navbar.Toggle
                            aria-controls={offcanvasNavbar - expand - `${expand}`}
                        />
                        <Navbar.Offcanvas
                            id={offcanvasNavbar - expand - `${expand}`}
                            aria-labelledby={offcanvasNavbarLabel - expand - `${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton></Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav
                                    className="justify-content-end flex-grow-1 pe-3"
                                    style={{ alignItems: "center" }}
                                >
                                    <Nav.Link href="/" className="tail-text md-2">
                                        HOME
                                    </Nav.Link>



                                    {/* <Nav.Link href="/aboutus" className="tail-text">
                                        ABOUT US
                                    </Nav.Link>
                                   
                                    <Nav.Link href="/services" className="tail-text">
                                        SERCIVES
                                    </Nav.Link>
                                    <Nav.Link href="/contactus" className="tail-text">
                                        CONTACT US
                                    </Nav.Link> */}
                                    <Form inline>
                                        <Row>
                                            <Col xs="auto mt-1">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Search"
                                                   style={{width:'100%'}}
                                                    className=" mr-sm-2"
                                                />
                                            </Col>
                                            <Col xs="auto mt-1 ">
                                          
                                                <Link to='/welcome' className=""><Button>Login</Button></Link>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </div>
    )
}

export default Header