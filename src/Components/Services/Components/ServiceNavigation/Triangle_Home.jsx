import React from 'react'
import './Triangle_home.css'
// import { CiSearch } from "react-icons/ci";
import Form from 'react-bootstrap/Form';
import { FaCheck } from "react-icons/fa";
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Triangle_Home = () => {
    return (
        <div>
            <Container>
                <div className="triangle_home_main">
                    <div>
                        <h1>Connect with cleaning to make life easier</h1>
                    </div>
                    <div className='home_list'>
                        <Form.Select id='form' aria-label="Default select example">
                            <option>where do you need a service?</option>
                            <option value="1">Chennai</option>
                            <option value="2">Banglore</option>
                            <option value="3">Hydrabad</option>
                            <option value="1">Coimbatore</option>
                            <option value="2">Madurai</option>
                            <option value="3">Kolkata</option>
                            <option value="1">Mumbai</option>
                            <option value="2">Pune</option>
                            <option value="3">Delhi</option>
                        </Form.Select>
                    </div>
                    <div className='home_para'>
                        <p> <FaCheck /> Verified and Vetted professionals</p>
                        <p> <FaCheck /> Trusted and reviewed by millions</p>
                        <p> <FaCheck /> Secure quick free quotations</p>
                    </div>
                    <div className='home_span'>
                        {/* <span >5000+ service experts</span>
                        <span>400K+ 5 star reviews</span>
                        <span>800K+ services completed</span> */}
                        <Row className='row_last' md={2}>
                            <Col className='col_last'>5000+ service experts</Col>
                            <Col xs={1} className='col_last'>400K+ 5 star reviews</Col>
                            <Col className='col_last' id='Col_800'>800K+ services completed</Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Triangle_Home
