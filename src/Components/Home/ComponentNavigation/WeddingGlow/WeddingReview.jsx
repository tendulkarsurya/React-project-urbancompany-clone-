import React from 'react'
import { TiTick } from "react-icons/ti";
import { BiSolidOffer } from "react-icons/bi";
import { MdLocalOffer } from "react-icons/md";
import '../ACscrolls.css'
import RightNavigation from '../RightNavigation';


const WeddingReview = () => {
  return (
    <div className='p-2 stick'>
            <div className='border p-3 mt-3 rytreview ' style={{ borderRadius: "10px" }}>
            <RightNavigation/>
            </div>
            <div className='border p-3 mt-3 rytreview ' style={{ lineHeight: "9px", borderRadius: "10px" }}>
                <p> <BiSolidOffer style={{ color: "green" }} /> 20% off on kotak Silk cards</p>
                <p> <MdLocalOffer style={{ color: "green" }} /> 20% off upto INR 350</p>
                <a className='text-decoration-none' style={{ color: "blueviolet", fontWeight: '500' }} href="#"> view more offers</a>
            </div>
            <div className='border p-3 mt-3 rytreview' style={{ lineHeight: "5px", borderRadius: "10px" }}>
                <h4>UC Promise</h4>
                <p><TiTick /> 4.5+ Rated Beauticians</p>
                <p><TiTick /> Luxury salon Experience</p>
                <p><TiTick /> Premium Branded products</p>
            </div>
        </div>
  )
}

export default WeddingReview
