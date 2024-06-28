import React from 'react'
import { MdStars } from "react-icons/md";


const Left = () => {
    return (
        <div className='stick'>
            <div >
                <h2 >Native Water Purifier</h2>
                <p><MdStars style={{ color: "blueviolet" }} /> 4.81 (6.5 M bookings)</p>
            </div>
            <div className='d-grid gap-3 m-2 ' >
                <button className='left_below_but text-truncate'>Compare Native RO vs others</button>
                <button onClick={()=>window.scrollTo(0,0)} className='left_below_but_ser' >View Services</button>
            </div>

        </div>
    )
}

export default Left
