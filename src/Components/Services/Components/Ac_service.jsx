import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import AOS from "aos";
import "aos/dist/aos.css";

const Ac_service = () => {
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 900,
            easing: "linear",
        });

    }, []);
    return (
        <div className='ac_services_main display-ac displaycontroll' id='ac'>
            <div className='ac_service_text' >
                <h2>AC Services & Repair</h2>
                <p>Keep your electronics and appliances running smoothly with our comprehensive repair and maintenance services.
                    Trust our skilled technicians to efficiently diagnose and resolve issues, ensuring peak performance and longevity.</p>
            </div>
            <div className='ac_service_cards' data-aos="fade-up">
                <Row xs={1} md={4} className="g-2 ">
                    
                        {Array.from({ length: 1 }).map((_, idx) => (
                            <Col key={idx}>
                                <Card className='card'>
                                    <Card.Img className='card_animation' variant="top" src="./Assets/ac_service1.jpg" />
                                    <Card.Body>
                                        <Card.Title>AC service</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
               
                        {Array.from({ length: 1 }).map((_, idx) => (
                            <Col key={idx}>
                                <Card className='card'>
                                    <Card.Img className='card_animation' variant="top" src="./Assets/ac_service2.jpg" />
                                    <Card.Body>
                                        <Card.Title>Refrigerator</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                   
                  
                        {Array.from({ length: 1 }).map((_, idx) => (
                            <Col key={idx}>
                                <Card className='card'>
                                    <Card.Img className='card_animation' variant="top" id='cardHeight' src="./Assets/ac_service3.jpg" />
                                    <Card.Body>
                                        <Card.Title >Washing </Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                   
                        {Array.from({ length: 1 }).map((_, idx) => (
                            <Col key={idx}>
                                <Card className='card'>
                                    <Card.Img className='card_animation' variant="top" src="./Assets/ac_service4.jpg" />
                                    <Card.Body>
                                        <Card.Title>Gas Stove </Card.Title>
                                        {/* <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                    </Card.Text> */}
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                   
                </Row>
            </div>
            <div className='ac_service_grid'>
                <Container className='ac_grid_container'>
                    <Row md={4} className='grid_rows'>
                        <Col className='grids'>Water Purifier Service</Col>
                        <Col xs={6} className='grids'>Home Automation Services</Col>
                        <Col className='grids'>TV Repair LED/LCD</Col>
                    </Row>
                    <Row md={4} className='grid_rows'>
                        <Col className='grids'>TV Wall Mount Installation</Col>
                        <Col xs={6} className='grids'>Laptop Repair</Col>
                        <Col className='grids'>CCTV Cameras and Installation</Col>
                    </Row>
                    <Row md={4} className='grid_rows'>
                        <Col className='grids'>Inverter Service</Col>
                        <Col xs={6} className='grids'>AC Installation</Col>
                        <Col className='grids'>Geyser Service</Col>
                    </Row>
                    <Row md={4} className='grid_rows'>
                        <Col className='grids'>Geyser Installation</Col>
                        <Col xs={6} className='grids'>Gas Pipeline Installation</Col>
                        <Col className='grids'>AC Gas Refill or Topup</Col>
                    </Row>
                    <Row md={4} className='grid_rows'>
                        <Col className='grids'>Dishwasher Installation</Col>
                        <Col xs={6} className='grids'>Chimney Installation</Col>
                        <Col className='grids'>Chimney Service</Col>
                    </Row>
                    <Row md={4} className='grid_rows'>
                        <Col className='grids'>Gas Geyser Repair</Col>
                        <Col xs={6} className='grids'>Air Cooler Service</Col>
                        <Col className='grids'>Water Purifier Installation</Col>
                    </Row>

                </Container>
            </div>
        </div>
    )
}

export default Ac_service
