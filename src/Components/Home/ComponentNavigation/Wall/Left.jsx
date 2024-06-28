import React from 'react'
import { MdStars } from "react-icons/md";
import { TiTick } from "react-icons/ti";


const Left = () => {
    return (
        <div className='stick'>
            <div >
                <h2 >Wall decor (Panels)</h2>
                <p><MdStars style={{ color: "blueviolet" }} /> 4.81 (6.5 M bookings)</p>
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

export default Left
