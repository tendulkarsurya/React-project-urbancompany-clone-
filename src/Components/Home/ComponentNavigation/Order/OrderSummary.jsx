import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { MdStars } from "react-icons/md";
import './OrderSummary.css'
const OrderSummary = () => {

   useEffect(()=>{
    window.scrollTo(0,0);
   },[])
     
    
    return (
        <div>
            <div>
                <Container>
                    <div className=' p-2 orderMain'>
                        <div className='border p-1 m-1' style={{borderRadius:"8px"}}>
                            <h4>Order Summmary</h4>
                        </div>
                        <div className='border p-2 m-1 delivery' style={{borderRadius:"8px"}}>
                            <h6>Deliver to:</h6>
                            <p style={{ width: "40%" }}>
                                TechEon Online Services Pvt Ltd,
                                xyz, A, MVR XYZ Building,
                                2nd Floor, xyz Layout, Horamavu Main Road,
                                Bangalore - 560043.
                            </p>
                            <p>9876543210</p>
                        </div>
                        <div className='d-flex orderDetails' style={{width:"100%"}}>
                            <div className='border p-2 mt-2 m-1 productView ' style={{width:"50%",borderRadius:"8px"}}>
                                <h6 style={{fontWeight:"700"}}>Order:</h6>
                                <div className='orderCheck'>
                                    <div className='orderimg'>
                                        <img className='serviceScrollimg' src="./Assets/scroll2.jpg" alt="" />
                                        <div className='border pkgbtn'>
                                            <p>PKG:</p>
                                            <button>1</button>
                                        </div>
                                    </div>
                                    <div>
                                        <p>AC Service</p>
                                        <p className='scroll2Text'><MdStars style={{ color: "blueviolet" }} /> Rating:4.82</p>
                                        <p>price: 50% <strike>₹1998</strike> ₹999</p>
                                    </div>
                                </div>
                            </div>

                            <div className='border p-3 mt-2 m-1 priceBroder' style={{width:"50%",borderRadius:"8px"}}>
                                <div><h6 style={{ fontWeight: "700" }}>Price Details</h6></div>
                                <div className='paymentCost'>
                                    <div>
                                        <p>Total Price</p>
                                        <p>Discount</p>
                                        <p>Delivery Charges</p>
                                    </div>
                                    <div>
                                        <p>₹1998</p>
                                        <p>-₹999</p>
                                        <p>₹99</p>
                                    </div>
                                </div> <hr />
                                <div className='paymentCost' style={{ fontWeight: "700" }}>
                                    <p>Total</p>
                                    <p>₹1098</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ textAlign: "end" }} className='mt-2 m-2'>
                            <button className='continuebtn' onClick={()=>alert("order is placed")}>Continue</button>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default OrderSummary
