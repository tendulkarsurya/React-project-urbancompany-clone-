import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';


const Pet = () => {
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 900,
            easing: "linear",
        });
    }, []);
    return (
        <div className='ac_services_main display-p displaycontroll' id='pet'>
            <div className='ac_service_text'>
                <h2>Pet Services</h2>
                <p>Pet services cater to the unique needs of your furry companions, ensuring their well-being, happiness, and health. Trust in dedicated professionals
                    to provide personalized care, training, and grooming for your beloved pets in a safe and nurturing environment.</p>
            </div>
            <div className='ac_service_cards ' data-aos="fade-up">
                <Row xs={2} md={4} className="g-2 ">
                    
                        {Array.from({ length: 1 }).map((_, idx) => (
                            <Col key={idx}>
                                <Card className='card'>
                                    <Card.Img className='card_animation' variant="top" src="./Assets/pet-service1.jpg" />
                                    <Card.Body>
                                        <Card.Title>Pet Grooming</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    
                    
                        {Array.from({ length: 1 }).map((_, idx) => (
                            <Col key={idx}>
                                <Card className='card'>
                                    <Card.Img className='card_animation' variant="top" src="./Assets/pet-service2.jpg" />
                                    <Card.Body>
                                        <Card.Title>Pet Training</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    
                    
                        {Array.from({ length: 1 }).map((_, idx) => (
                            <Col key={idx}>
                                <Card className='card'>
                                    <Card.Img className='card_animation' variant="top" src="./Assets/pet-service3.jpg" />
                                    <Card.Body>
                                        <Card.Title>Pet Walking</Card.Title>

                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    
                    
                        {Array.from({ length: 1 }).map((_, idx) => (
                            <Col key={idx}>
                                <Card className='card'>
                                    <Card.Img className='card_animation' variant="top" src="./Assets/pet-service4.jpg" />
                                    <Card.Body>
                                        <Card.Title>Pet Boarding</Card.Title>
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
                            <Link to='/ServiceNavigation' className='servicebtns'>Pet Care</Link></Col>
                        <Col xs={6} className='grids'><Link to='/ServiceNavigation' className='servicebtns'>Vets</Link></Col>
                    </Row>


                </Container>
            </div>
        </div>
    )
}

export default Pet;
