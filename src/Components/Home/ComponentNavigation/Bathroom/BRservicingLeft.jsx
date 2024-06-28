import React from 'react'
import { MdStars } from "react-icons/md";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ACservicingLeft = () => {
    return (
        <div className='stick'>
            <div >
                <h2 >Bathroom & Kitchen Cleaning</h2>
                <p><MdStars style={{ color: "blueviolet" }} /> 4.81 (6.5 M bookings)</p>
            </div>
            <div className=' p-2 mt-2  imageDiv'>
                <div>
                    <p style={{ fontWeight: "500", fontSize: "19px" }}>Select a service </p><hr />
                </div>
                <div className='d-flex '>
                    <Row md={3} className='anch' >

                        <a href="#SSD" className='text-decoration-none ' style={{ color: "black" }}>
                            <Col className='leftimgs'><img src="./Assets/bathleft1.jpg"  alt="" />
                                <p className='text' >SuperSaver deals</p></Col></a>
                        <a href="#BRT" className='text-decoration-none' style={{ color: "black" }}>
                            <Col className='leftimgs'><img src="./Assets/brs2.webp" height={65} width={65}  alt="" />
                                <p className='text'>Bathroom Cleaning</p></Col></a>
                        <a href="#kCkC" className='text-decoration-none' style={{ color: "black" }}>
                            <Col className='leftimgs'><img src="./Assets/brs3.webp" height={65} width={65}  alt="" />
                                <p className='text'>Kitchen Cleaning</p></Col></a>

                        <a href="#Mini" className='text-decoration-none ' style={{ color: "black" }}>
                            <Col className='leftimgs'><img src="./Assets/brs4.webp" height={65} width={65}  alt="" />
                                <p className='text' >Mini Services</p></Col></a>
                    </Row>

                </div>
                {/* <div className="">
                    <Row md={3} className='anch' >

                        <a href="#Mini" className='text-decoration-none ' style={{ color: "black" }}>
                            <Col className='leftimgs'><img src="./Assets/brs4.webp" alt="" />
                                <p className='text' >Mini Services</p></Col></a>
                    </Row>

                </div> */}

            </div>
        </div>
    )
}

export default ACservicingLeft
