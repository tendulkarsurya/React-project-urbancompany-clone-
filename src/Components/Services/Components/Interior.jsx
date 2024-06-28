import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import AOS from "aos";
import "aos/dist/aos.css";

const Interior = () => {
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 900,
            easing: "linear",
        });

    }, []);
    return (
        <div className='ac_services_main display-i displaycontroll' id='interior'>
            <div className='ac_service_text'>
                <h2>Interior Design & Renovation</h2>
                <p>Elevate your living space with our exquisite interior design and renovation services, tailored to your unique tastes.
                    Our expert designers and craftsmen bring your dream home to life, blending style and functionality seamlessly.</p>
            </div>
            <div className='ac_service_cards' data-aos="fade-up">
                <Row xs={1} md={4} className="g-2 ">
                    
                        {Array.from({ length: 1 }).map((_, idx) => (
                            <Col key={idx}>
                                <Card className='card'>
                                    <Card.Img className='card_animation' variant="top" src="./Assets/interior-service1.jpg" />
                                    <Card.Body>
                                        <Card.Title>
                                            Modular Kitchen</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    
                    
                        {Array.from({ length: 1 }).map((_, idx) => (
                            <Col key={idx}>
                                <Card className='card'>
                                    <Card.Img className='card_animation' variant="top" src="./Assets/interior-service2.jpg" />
                                    <Card.Body>
                                        <Card.Title>
                                            Interior Designers</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    
                    
                        {Array.from({ length: 1 }).map((_, idx) => (
                            <Col key={idx}>
                                <Card className='card'>
                                    <Card.Img className='card_animation' variant="top" src="./Assets/interior-service3.jpg" />
                                    <Card.Body>
                                        <Card.Title>
                                            House Interior & Renovation</Card.Title>

                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    
                    
                        {Array.from({ length: 1 }).map((_, idx) => (
                            <Col key={idx}>
                                <Card className='card'>
                                    <Card.Img className='card_animation' variant="top" src="./Assets/interior-service4.jpg" />
                                    <Card.Body>
                                        <Card.Title>House Painting & Design</Card.Title>
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
                            Lighting Services</Col>
                        <Col xs={6} className='grids'>Wallpaper Covering</Col>
                        <Col className='grids'>False Ceiling</Col>
                    </Row>
                    <Row md={4} className='grid_rows'>
                        <Col className='grids'>Waterproofing Services</Col>
                        <Col xs={6} className='grids'>Furniture Assembly</Col>
                        <Col className='grids'>Texture Painting</Col>
                    </Row>
                    <Row md={4} className='grid_rows'>
                        <Col className='grids'>Office Painting</Col>
                        <Col xs={6} className='grids'>Landscaping
                        </Col>
                        <Col className='grids'>Bathroom Renovation</Col>
                    </Row>
                    <Row md={4} className='grid_rows'>
                        <Col className='grids'>Kitchen Renovation</Col>
                        <Col xs={6} className='grids'>Aluminium Fabrication</Col>
                        <Col className='grids'>Steel Fabrication Service</Col>
                    </Row>
                    <Row md={4} className='grid_rows'>
                        <Col className='grids'>Home Renovation
                        </Col>
                        <Col xs={6} className='grids'>Marble Polishing
                        </Col>
                        <Col className='grids'>Window Blinds Installation</Col>
                    </Row>
                    <Row md={4} className='grid_rows'>
                        <Col className='grids'>Tile Fitting Service
                        </Col>
                        <Col xs={6} className='grids'>Glass Fabrication Service
                        </Col>
                        <Col className='grids'>Gardening Services</Col>
                    </Row>

                </Container>
            </div>
        </div>
    )
}

export default Interior
