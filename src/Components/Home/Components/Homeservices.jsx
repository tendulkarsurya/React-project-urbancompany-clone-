import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CiStar } from "react-icons/ci";
import { GrGroup } from "react-icons/gr";
import { Link } from 'react-router-dom';

const Homeservices = () => {
    return (
        <div>
            <div className=' p-2  homeService' >
                <Container className='servicecontainer' style={{ border: "1px solid gray" }} >
                    <h5 className='mt-2' >What are you looking for?</h5>
                    <Row md={3} className='p-1 m-1 mt-4 imgFirstrow'>
                        <Col className='img1 p-1 '>
                            <Link to='/Ro' style={{textDecoration:"none", color:'black'}}>
                                <div className=' images'>
                                    <img src="./Assets/service1.jpg" alt="" height={60} width={60} />
                                </div>
                                <p> water purifier</p>
                            </Link>
                        </Col>
                        <Col className=' img1 p-1'>
                        <Link to='/Bathroom' style={{textDecoration:"none", color:'black'}}>
                                <div className=' images'>
                                    <img src="./Assets/service2.jpg" alt="" height={60} width={60} />
                                </div>
                                <p>Electrician & plumber</p>
                                </Link>
                        </Col>
                        <Col className=' img1 p-1'>
                        <Link to='/ACservicing' style={{textDecoration:"none", color:'black'}}>
                                <div className=' images'>
                                    <img src="./Assets/service3.jpg" alt="" height={60} width={60} />
                                </div>
                                <p>Cleaning service</p>
                                </Link>
                        </Col>
                    </Row>
                    <Row md={3} className=' m-1 mt-3  imgFirstrow'>
                        <Col className=' img1 p-1'>
                        <Link to='/WeddingGlow' style={{textDecoration:"none", color:'black'}}>
                                <div className=' images'>
                                    <img src="./Assets/service4.jpg" alt="" height={60} width={60} />
                                </div>
                                <p> women saloon & spa</p>
                                </Link>
                        </Col>
                        <Col className=' img1 p-1'>
                        <Link to='/Massage' style={{textDecoration:"none", color:'black'}}>
                                <div className=' images'>
                                    <img src="./Assets/service5.jpg" alt="" height={60} width={60} />
                                </div>
                                <p>Men salon & massage</p>
                                </Link>
                        </Col>
                        <Col className=' img1 p-1'>
                        <Link to='/ACservicing' style={{textDecoration:"none", color:'black'}}>
                                <div className=' images'>
                                    <img src="./Assets/service6.jpg" alt="" height={60} width={60} />
                                </div>
                                <p>AC & Appliance</p>
                                </Link>
                        </Col>
                    </Row>
                    <Row md={2} className=' m-1 mt-3  imgFirstrow'>
                        <Col className=' img2 p-1'>
                        <Link to='/Wall' style={{textDecoration:"none", color:'black'}}>
                                <div className=' images-2'>
                                    <p>Wall decore</p>
                                    <img src="./Assets/service7.jpg" alt="" height={60} width={60} />
                                </div>
                                </Link>
                        </Col>
                        <Col className=' img2 p-1'>
                        <Link to='/Wall' style={{textDecoration:"none", color:'black'}}>
                                <div className=' images-2'>
                                    <p>Painting & waterproof</p>
                                    <img src="./Assets/service8.jpg" alt="" height={60} width={60} />
                                </div>
                                </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='rating p-4 gap-3'>
                {/* <p> <CiStar className='fs-1'/> 4.8 Service Rating</p>
                <p> <CiStar className='fs-1'/>5M+ Customers Globally</p> */}
                <span className='span ' > <CiStar className='fs-1' /> 4.8 <p>Service Rating</p></span>
                <span className='span'> <GrGroup className='fs-1' /> 5M+ <p>Customers Globally</p></span>
            </div>
        </div>
    )
}

export default Homeservices
