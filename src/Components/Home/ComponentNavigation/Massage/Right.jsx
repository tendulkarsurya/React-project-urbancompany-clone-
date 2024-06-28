import React from 'react'
import { BiSolidOffer } from "react-icons/bi";
import { MdLocalOffer } from "react-icons/md";
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

        </div>
    )
}

export default Right
