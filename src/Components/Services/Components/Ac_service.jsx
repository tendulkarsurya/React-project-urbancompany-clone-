import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

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
                <Row xs={2} md={4} className="g-2 ">

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
                    <Row xs={1} md={4} className='grid_rows'>
                    <Col className='grids'>  <Link to='/ServiceNavigation' className='servicebtns'>Water Purifier Service</Link></Col>
                        <Col xs={6} className='grids'><Link to='/ServiceNavigation' className='servicebtns'>Home Automation Services</Link></Col>
                        <Col className='grids'> <Link to='/ServiceNavigation' className='servicebtns'>TV Repair LED/LCD</Link></Col>
                    </Row>
                    <Row xs={1} md={4} className='grid_rows'>
                        <Col className='grids'><Link to='/ServiceNavigation' className='servicebtns'>TV Wall Mount Installation</Link></Col>
                       <Col xs={6} className='grids'> <Link to='/ServiceNavigation'className='servicebtns'>Laptop Repair</Link></Col>
                       <Col className='grids'> <Link to='/ServiceNavigation' className='servicebtns'>CCTV Cameras and Installation</Link></Col>
                    </Row>
                    <Row xs={1} md={4} className='grid_rows'>
                       <Col className='grids'> <Link to='/ServiceNavigation' className='servicebtns'>Inverter Service</Link></Col>
                       <Col xs={6} className='grids'> <Link to='/ServiceNavigation' className='servicebtns'>AC Installation</Link></Col>
                       <Col className='grids'> <Link to='/ServiceNavigation' className='servicebtns'>Geyser Service</Link></Col>
                    </Row>
                    <Row xs={1} md={4} className='grid_rows'>
                       <Col className='grids'> <Link to='/ServiceNavigation' className='servicebtns'>Geyser Installation</Link></Col>
                       <Col xs={6} className='grids'> <Link to='/ServiceNavigation' className='servicebtns'>Gas Pipeline Installation</Link></Col>
                       <Col className='grids'> <Link to='/ServiceNavigation' className='servicebtns'>AC Gas Refill or Topup</Link></Col>
                    </Row>
                    <Row xs={1} md={4} className='grid_rows'>
                       <Col className='grids'> <Link to='/ServiceNavigation' className='servicebtns'>Dishwasher Installation</Link></Col>
                       <Col xs={6} className='grids'> <Link to='/ServiceNavigation' className='servicebtns'>Chimney Installation</Link></Col>
                       <Col className='grids'> <Link to='/ServiceNavigation' className='servicebtns'>Chimney Service</Link></Col>
                    </Row>
                    <Row xs={1} md={4} className='grid_rows'>
                       <Col className='grids'> <Link to='/ServiceNavigation' className='servicebtns'>Gas Geyser Repair</Link></Col>
                       <Col xs={6} className='grids'>     <Link to='/ServiceNavigation' className='servicebtns'>Air Cooler Service</Link></Col>
                       <Col className='grids'> <Link to='/ServiceNavigation' className='servicebtns'>Water Purifier Installation</Link></Col>
                    </Row>

                </Container>
            </div>
        </div>
    )
}

export default Ac_service
