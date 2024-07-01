import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';


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
                <Row xs={2} md={4} className="g-2 ">
                    
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
                            <Link to='/ServiceNavigation' className='servicebtns'>Zumba Class</Link></Col>
                        <Col xs={6} className='grids'><Link to='/ServiceNavigation' className='servicebtns'>Dietitian</Link></Col>
                        <Col className='grids'><Link to='/ServiceNavigation' className='servicebtns'>Yoga Teacher</Link></Col>
                    </Row>
                    <Row md={4} className='grid_rows'>
                        <Col className='grids'><Link to='/ServiceNavigation' className='servicebtns'>Hair style</Link>
                        </Col>
                        <Col xs={6} className='grids'><Link to='/ServiceNavigation' className='servicebtns'>Facials</Link></Col>
                        <Col className='grids'><Link to='/ServiceNavigation' className='servicebtns'>Physiotherapy</Link></Col>
                    </Row>
                    <Row md={4} className='grid_rows'>
                        <Col className='grids'><Link to='/ServiceNavigation' className='servicebtns'>Fitness Trainer</Link>
                        </Col>
                        <Col xs={6} className='grids'><Link to='/ServiceNavigation' className='servicebtns'>Salon For Women</Link></Col>
                        <Col className='grids'><Link to='/ServiceNavigation' className='servicebtns'>Waxing</Link></Col>
                    </Row>
                    <Row md={4} className='grid_rows'>
                        <Col className='grids'><Link to='/ServiceNavigation' className='servicebtns'>Pedicure</Link></Col>
                        <Col xs={6} className='grids'><Link to='/ServiceNavigation' className='servicebtns'>Psychologists</Link>
                        </Col>
                        <Col className='grids'><Link to='/ServiceNavigation' className='servicebtns'>Makeup Artist</Link></Col>
                    </Row>
                    <Row md={4} className='grid_rows'>
                        <Col className='grids'><Link to='/ServiceNavigation' className='servicebtns'>Hair Cut</Link>
                        </Col>
                        <Col xs={6} className='grids'><Link to='/ServiceNavigation' className='servicebtns'>Manicure</Link>
                        </Col>
                        <Col className='grids'><Link to='/ServiceNavigation' className='servicebtns'>Bridal Makeup</Link></Col>
                    </Row>
                    <Row md={4} className='grid_rows'>
                        <Col className='grids'><Link to='/ServiceNavigation' className='servicebtns'>Nail Extension</Link></Col>
                    </Row>

                </Container>
            </div>
        </div>
    )
}

export default Lifestyle_service
