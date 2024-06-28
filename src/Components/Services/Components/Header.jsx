import React from 'react'
import { Container } from 'react-bootstrap'
import { IoPersonCircleOutline } from "react-icons/io5";
import CountUp from 'react-countup'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className='hearder_main'>
            <Container className='hearder_sub_main '>
                <div className='col-md-5 box'>
                    <div className='para'>
                        <h1>Expanding your service business made easy</h1>
                        <p className='blockquote-footer' >Register today, become a trusted partner in our network, and start receiving valuable leads instantly.</p>
                        <Link to="/contactus"><button className='button_hearder'>Join TechEon Now</button></Link>
                    </div>
                </div>
                <div className='col-md-7 box '>
                    <img src="../Assets/header.png" alt="partner" />
                    <div className="img_count">
                        <IoPersonCircleOutline className='rec_ico' />
                        <div>
                            <p className='h4'><CountUp className='countval' delay={2} end={55278} /> + </p>
                            <p className='h6'> Happy partners </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header