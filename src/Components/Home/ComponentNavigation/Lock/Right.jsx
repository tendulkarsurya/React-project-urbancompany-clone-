import React from 'react'
import { BiSolidOffer } from "react-icons/bi";
import { MdLocalOffer } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import RightNavigation from '../RightNavigation';

const Right = () => {
    return (
        <div className='p-2 stick'>
            <div className='border p-3 mt-3 rytreview ' style={{ borderRadius: "10px" }}>
                <RightNavigation/>
            </div>

            <div className='border p-3 mt-3 rytreview ' style={{ lineHeight: "9px", borderRadius: "10px" }}>
                <p> <BiSolidOffer style={{ color: "green" }} /> Bye more save more</p>
                <p> <MdLocalOffer style={{ color: "green" }} /> Rs100 off on 2nd item</p>
                <a className='text-decoration-none' style={{ color: "blueviolet", fontWeight: '500' }} href="#"> view more offers</a>
            </div>
            <div className='border p-3 mt-3 rytreview d-flex ' style={{ lineHeight: "5px", borderRadius: "10px" }}>
                <div >
                    <h5>UC Promise</h5>
                    <p className='Wall_dec_left_UC_box' ><TiTick /> Verified Professionals</p>
                    <p className='Wall_dec_left_UC_box'><TiTick /> Hassel Free Booking</p>
                    <p className='Wall_dec_left_UC_box'><TiTick /> Transparent Pricing</p>
                </div>
                <div className='p-1 d-flex align-items-center justify-content-center'>
                    <img src="/Assets/ucpl.webp" alt="554surya" />
                </div>
            </div>

        </div>
    )
}

export default Right
