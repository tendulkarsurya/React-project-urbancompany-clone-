import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';


const Home_Maintenance = () => {
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 900,
            easing: "linear",
        });
    }, []);
    return (
        <div className='ac_services_main display-hm displaycontroll' id='home'>
            <div className='ac_service_text'>
                <h2>Home Maintenance & Repair</h2>
                <p>Ensure your home stays in top condition with our reliable home maintenance and repair services. Our skilled professionals
                    tackle everything from minor fixes to major overhauls, keeping your living space safe and comfortable.</p>
            </div>
            <div className='ac_service_cards' data-aos="fade-up">
                <Row xs={2} md={4} className="g-2 ">
                    
                        {Array.from({ length: 1 }).map((_, idx) => (
                            <Col key={idx}>
                                <Card className='card'>
                                    <Card.Img className='card_animation' variant="top" src="./Assets/home-service1.jpg" />
                                    <Card.Body>
                                        <Card.Title>
                                            Plumbers</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                   
                    
                        {Array.from({ length: 1 }).map((_, idx) => (
                            <Col key={idx}>
                                <Card className='card'>
                                    <Card.Img className='card_animation' variant="top" src="./Assets/home-service2.jpg" />
                                    <Card.Body>
                                        <Card.Title>
                                            Electricians</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                   
                    
                        {Array.from({ length: 1 }).map((_, idx) => (
                            <Col key={idx}>
                                <Card className='card'>
                                    <Card.Img className='card_animation' variant="top" src="./Assets/home-service3.jpg" />
                                    <Card.Body>
                                        <Card.Title>
                                            Carpenters</Card.Title>

                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                   
                    
                        {Array.from({ length: 1 }).map((_, idx) => (
                            <Col key={idx}>
                                <Card className='card'>
                                    <Card.Img className='card_animation' variant="top" src="./Assets/home-service4.jpg" />
                                    <Card.Body>
                                        <Card.Title>
                                            Mosquito Net</Card.Title>
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
                        <Col className='grids'> <Link to='/ServiceNavigation' className='servicebtns'>Bird Net</Link></Col>
                        <Col xs={6} className='grids'><Link to='/ServiceNavigation' className='servicebtns'>Sofa Repair</Link></Col>
                        <Col className='grids'><Link to='/ServiceNavigation' className='servicebtns'>Wood Polish</Link></Col>
                    </Row>
                    <Row md={4} className='grid_rows'>
                        <Col className='grids'><Link to='/ServiceNavigation' className='servicebtns'>Ceiling Cloth Hanger Installation</Link></Col>
                        <Col xs={6} className='grids'><Link to='/ServiceNavigation' className='servicebtns'>Invisible Gril</Link></Col>
                        <Col className='grids'><Link to='/ServiceNavigation' className='servicebtns'>Pigeon Net</Link></Col>
                    </Row>

                </Container>
            </div>
        </div>
    )
}

export default Home_Maintenance
