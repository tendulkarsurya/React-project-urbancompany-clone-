import React from 'react'
import { MdStars } from "react-icons/md";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../ACservicingLeft.css'
const ACservicingLeft = () => {
    return (
        <div className='stick'>
            <div >
                <h2 >AC Service & Repair</h2>
                <p><MdStars style={{color:"blueviolet"}} /> 4.83 (8.2 M bookings)</p>
            </div>
            <div className=' p-2 mt-2  ACimageDiv'>
                <div>
                  <p style={{ fontWeight: "500", fontSize: "19px" }}>select a service </p><hr />
                </div>
                <div className='d-flex '>
                    <Row md={3} className='anch' >
                        <a href="#ACS" className='text-decoration-none ' style={{ color: "black" }}>
                            <Col className='leftimgs'><img src="./Assets/servicing1.jpg" alt="" />
                            <p className='text' >service</p></Col></a>
                        <a href="#GAS" className='text-decoration-none' style={{ color: "black" }}>
                            <Col className='leftimgs'><img src="./Assets/servicing2.jpg" alt="" />
                            <p className='text'>Gas repair</p></Col></a>
                        <a href="#INS" className='text-decoration-none' style={{ color: "black" }}>
                            <Col className='leftimgs'><img src="./Assets/servicing3.jpg" alt="" />
                             <p className='text'>install & uninstall</p></Col></a>
                    </Row>
                </div>
                
            </div>
        </div>
    )
}

export default ACservicingLeft
