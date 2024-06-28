import React from 'react'
import { MdStars } from "react-icons/md";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../ACservicingLeft.css'
const WeddingGlowLeft = () => {
  return (
    <div className='stick'>
            <div >
                <h2 >Salon Prime</h2>
                <p><MdStars style={{color:"blueviolet"}} /> 4.83 (8.2 M bookings)</p>
            </div>
            <div className='  mt-2  imageDiv'>
                <div>
                  <p style={{ fontWeight: "500", fontSize: "19px" }}>select a service </p><hr />
                </div>
                <div className='d-flex '>
                    <Row md={3} className='anch' >
                        <a href="#package" className='text-decoration-none ' style={{ color: "black" }}>
                            <Col className='leftimgs'><img src="./Assets/wedding1.jpg" alt="" />
                            <p className='text' >Packing & Beatsellers</p></Col></a>
                        <a href="#wax" className='text-decoration-none' style={{ color: "black" }}>
                            <Col className='leftimgs'><img src="./Assets/wedding2.jpg" alt="" />
                            <p className='text'>Waxing</p></Col></a>
                        <a href="#pedicure" className='text-decoration-none' style={{ color: "black" }}>
                            <Col className='leftimgs'><img src="./Assets/wedding3.jpg" alt="" />
                             <p className='text'>Pedicure Manicure</p></Col></a>
                        <a href="#facial" className='text-decoration-none ' style={{ color: "black" }}>
                            <Col className='leftimgs'><img src="./Assets/wedding4.jpg" alt="" />
                            <p className='text' >Facials</p></Col></a>
                        <a href="#ayur" className='text-decoration-none' style={{ color: "black" }}>
                            <Col className='leftimgs'><img src="./Assets/wedding5.jpg" alt="" />
                            <p className='text'>Ayurvedic Facials</p></Col></a>
                        <a href="#cleanup" className='text-decoration-none' style={{ color: "black" }}>
                            <Col className='leftimgs'><img src="./Assets/wedding6.jpg" alt="" />
                             <p className='text'>Cleanup</p></Col></a>
                    </Row>
                </div>
                
            </div>
        </div>
  )
}

export default WeddingGlowLeft
