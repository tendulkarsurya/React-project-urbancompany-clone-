import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import AOS from "aos";
import "aos/dist/aos.css";

const Lifestyle_service = () => {
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 900,
            easing: "linear",
        });
    }, []);
    return (
        <div className='ac_services_main displaycontroll display-ls' id='lifestyle'>
            <div className='ac_service_text'>
                <h2>Personal & Lifestyle Services</h2>
                <p>Elevate your lifestyle with our diverse range of personal services, designed to enrich your daily experiences.
                    Explore our curated selection of offerings, tailored to help you achieve balance, fulfillment, and enjoyment.</p>
            </div>
            <div className='ac_service_cards' data-aos="fade-up">
                <Row xs={1} md={4} className="g-2 ">
                    
                        {Array.from({ length: 1 }).map((_, idx) => (
                            <Col key={idx}>
                                <Card className='card'>
                                    <Card.Img className='card_animation' variant="top" src="./Assets/lifestyle-service-1.jpg" />
                                    <Card.Body>
                                        <Card.Title>
                                            Dance Teacher</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    
                    
                        {Array.from({ length: 1 }).map((_, idx) => (
                            <Col key={idx}>
                                <Card className='card'>
                                    <Card.Img className='card_animation' variant="top" src="./Assets/lifestyle-service-2.jpg" />
                                    <Card.Body>
                                        <Card.Title>
                                            Swimming </Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    
                    
                        {Array.from({ length: 1 }).map((_, idx) => (
                            <Col key={idx}>
                                <Card className='card'>
                                    <Card.Img className='card_animation' variant="top" src="./Assets/lifestyle-service-3.jpg" />
                                    <Card.Body>
                                        <Card.Title>
                                            Guitar Classes</Card.Title>

                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    
                    
                        {Array.from({ length: 1 }).map((_, idx) => (
                            <Col key={idx}>
                                <Card className='card'>
                                    <Card.Img className='card_animation' variant="top" src="./Assets/lifestyle-service-4.jpg" />
                                    <Card.Body>
                                        <Card.Title>
                                            Keyboard </Card.Title>
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
                            Zumba Class</Col>
                        <Col xs={6} className='grids'>Dietitian</Col>
                        <Col className='grids'>Yoga Teacher</Col>
                    </Row>
                    <Row md={4} className='grid_rows'>
                        <Col className='grids'>Hair style
                        </Col>
                        <Col xs={6} className='grids'>Facials</Col>
                        <Col className='grids'>Physiotherapy</Col>
                    </Row>
                    <Row md={4} className='grid_rows'>
                        <Col className='grids'>Fitness Trainer
                        </Col>
                        <Col xs={6} className='grids'>Salon For Women</Col>
                        <Col className='grids'>Waxing</Col>
                    </Row>
                    <Row md={4} className='grid_rows'>
                        <Col className='grids'>Pedicure</Col>
                        <Col xs={6} className='grids'>Psychologists
                        </Col>
                        <Col className='grids'>Makeup Artist</Col>
                    </Row>
                    <Row md={4} className='grid_rows'>
                        <Col className='grids'>Hair Cut
                        </Col>
                        <Col xs={6} className='grids'>Manicure
                        </Col>
                        <Col className='grids'>Bridal Makeup</Col>
                    </Row>
                    <Row md={4} className='grid_rows'>
                        <Col className='grids'>Nail Extension</Col>
                    </Row>

                </Container>
            </div>
        </div>
    )
}

export default Lifestyle_service
