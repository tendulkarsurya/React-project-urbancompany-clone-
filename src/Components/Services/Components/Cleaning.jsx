import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import AOS from "aos";
import "aos/dist/aos.css";
const Cleaning = () => {

    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 900,
            easing: "linear",
        });
    }, []);

    return (
        <div className='ac_services_main display-c displaycontroll' id='cleaning'>
            <div className='ac_service_text' >
                <h2>Cleaning Services</h2>
                <p>Experience pristine living spaces with our top-notch cleaning services, tailored to meet your unique needs. Trust our skilled professionals to transform your home into a haven of cleanliness and comfort.</p>
            </div>
            <div className='ac_service_cards' data-aos="fade-up">
                <Row xs={1} md={4} className="g-2 ">
                    
                        {Array.from({ length: 1 }).map((_, idx) => (
                            <Col key={idx}>
                                <Card className='card'>
                                    <Card.Img className='card_animation' variant="top" src="./Assets/cleaning-1.jpg" />
                                    <Card.Body>
                                        <Card.Title>House Cleaning</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    
                    
                        {Array.from({ length: 1 }).map((_, idx) => (
                            <Col key={idx}>
                                <Card className='card'>
                                    <Card.Img className='card_animation' variant="top" src="./Assets/cleaning-2.jpg" />
                                    <Card.Body>
                                        <Card.Title>Bathroom Cleaning</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    
                    
                        {Array.from({ length: 1 }).map((_, idx) => (
                            <Col key={idx}>
                                <Card className='card'>
                                    <Card.Img className='card_animation' variant="top" src="./Assets/cleaning-3.jpg" />
                                    <Card.Body>
                                        <Card.Title> Sofa & Pillow Cleaning</Card.Title>

                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    
                    
                        {Array.from({ length: 1 }).map((_, idx) => (
                            <Col key={idx}>
                                <Card className='card'>
                                    <Card.Img className='card_animation' variant="top" src="./Assets/cleaning-4.jpg" />
                                    <Card.Body>
                                        <Card.Title>
                                            Water Tank Cleaning
                                        </Card.Title>
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
                            Floor Cleaning</Col>
                        <Col xs={6} className='grids'>Kitchen Cleaning</Col>
                        <Col className='grids'>Swimming Pool Cleaning</Col>
                    </Row>
                    <Row md={4} className='grid_rows'>
                        <Col className='grids'>Sump Cleaning</Col>
                        <Col xs={6} className='grids'>Office Cleaning</Col>
                        <Col className='grids'>Commercial Sofa Cleaning</Col>
                    </Row>
                    <Row md={4} className='grid_rows'>
                        <Col className='grids'>Septic Tank Cleaning Services</Col>
                        <Col xs={6} className='grids'>Carpet Cleaning</Col>
                        <Col className='grids'>Mattress Cleaning</Col>
                    </Row>
                    <Row md={4} className='grid_rows'>
                        <Col className='grids'>Deep House Cleaning</Col>
                        <Col xs={6} className='grids'>Daily Cleaning (Maids)</Col>
                        <Col className='grids'>Dry Cleaning</Col>
                    </Row>
                    <Row md={4} className='grid_rows'>
                        <Col className='grids'>Window Cleaning</Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Cleaning
