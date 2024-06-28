import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import AOS from "aos";
import "aos/dist/aos.css";

const Pest_service = () => {
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 900,
            easing: "linear",
        });
    }, []);
    return (
        <div className='ac_services_main displaycontroll display-ps' id='pest'  >
            <div className='ac_service_text' >
                <h2 >Pest Control & Fumigation</h2>
                <p>Safeguard your home from unwanted intruders with our effective pest control and fumigation solutions. Our expert technicians eliminate infestations and create a safe, pest-free environment for you and your family.</p>
            </div>
            <div className='ac_service_cards' data-aos="fade-up" >
                <Row xs={1} md={4} className="g-2 ">
                    
                        {Array.from({ length: 1 }).map((_, idx) => (
                            <Col key={idx}>
                                <Card className='card'>
                                    <Card.Img className='card_animation' variant="top" src="./Assets/pest-control-1.jpg" />
                                    <Card.Body>
                                        <Card.Title>Pest Control Services</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    
                    
                        {Array.from({ length: 1 }).map((_, idx) => (
                            <Col key={idx}>
                                <Card className='card'>
                                    <Card.Img className='card_animation' variant="top" src="./Assets/pest-control-2.jpg" />
                                    <Card.Body>
                                        <Card.Title>
                                            Bed Bug Control

                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    
                    
                        {Array.from({ length: 1 }).map((_, idx) => (
                            <Col key={idx}>
                                <Card className='card'>
                                    <Card.Img className='card_animation' variant="top" src="./Assets/pest-control-3.jpg" />
                                    <Card.Body>
                                        <Card.Title> Cockroach Control </Card.Title>

                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    
                    
                        {Array.from({ length: 1 }).map((_, idx) => (
                            <Col key={idx}>
                                <Card className='card'>
                                    <Card.Img className='card_animation' variant="top" src="./Assets/pest-control-4.jpg" />
                                    <Card.Body>
                                        <Card.Title>Termite Control Treatment</Card.Title>
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
                        <Col className='grids'>
                            Ant Control Treatment</Col>
                        <Col xs={6} className='grids'>Mosquito Control Treatment</Col>
                        <Col className='grids'>Rodent Control Treatment</Col>
                    </Row>
                    <Row md={4} className='grid_rows'>
                        <Col className='grids'>Honeybee/Beehive Control</Col>
                        <Col xs={6} className='grids'>General Pest Control</Col>
                        <Col className='grids'>Virus Fumigation</Col>
                    </Row>
                    <Row md={4} className='grid_rows'>
                        <Col className='grids'>Home Sanitization</Col>
                    </Row>

                </Container>
            </div>
        </div>
    )
}

export default Pest_service
