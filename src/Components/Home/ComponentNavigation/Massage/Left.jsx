import React from 'react'
import { MdStars } from "react-icons/md"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Left = () => {
    return (

        <div className='stick'>
            <div >
                <h2 >Massage for Men</h2>
                <p><MdStars style={{ color: "blueviolet" }} /> 4.81 (6.5 M bookings)</p>
            </div>
            <div className=' p-2 mt-2  imageDiv'>
                <div>
                    <p style={{ fontWeight: "500", fontSize: "19px" }}>Select a service </p><hr />
                </div>
                <div className='d-flex '>
                    <Row md={3} className='anch' >

                        <a href="#BestsellerPackages" className='text-decoration-none ' style={{ color: "black" }}>
                            <Col className='leftimgs'><img src="./Assets/mass1.webp" alt="" />
                                <p className='text' >Bestseller Packages</p></Col></a>
                        <a href="#PainRelief" className='text-decoration-none' style={{ color: "black" }}>
                            <Col className='leftimgs'><img src="./Assets/mass2.webp" alt="" />
                                <p className='text'>Pain Relief</p></Col></a>
                        <a href="#StressRelief" className='text-decoration-none' style={{ color: "black" }}>
                            <Col className='leftimgs'><img src="./Assets/mass3.webp" alt="" />
                                <p className='text'>Stress Relief</p></Col></a>
                    </Row>

                </div>
                <div className="">
                    <Row md={3} className='anch' >

                        <a href="#Postworkout" className='text-decoration-none ' style={{ color: "black" }}>
                            <Col className='leftimgs'><img src="./Assets/mass4.webp" alt="" />
                                <p className='text' >Post workout</p></Col></a>
                        <a href="#Add-ons" className='text-decoration-none ' style={{ color: "black" }}>
                            <Col className='leftimgs'><img src="./Assets/mass5.webp" alt="" />
                                <p className='text' >Add-ons</p></Col></a>
                    </Row>

                </div>

            </div>
        </div>
    )
}

export default Left