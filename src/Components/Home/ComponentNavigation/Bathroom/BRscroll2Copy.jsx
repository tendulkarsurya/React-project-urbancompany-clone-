import React from 'react'
import { MdStars } from "react-icons/md";
import ViewPopUp from '../ViewPopUp'

const BRscroll2 = () => {
    return (
        <div className='pt-1'>
            <div className=' '>
                <div className='d-flex p-2 scrolll '>
                    <div className='textdiv'>
                        <p className='pt-2 scroll2Text' style={{ color: "green" }}>PACKAGE</p>
                        <h6 style={{ fontWeight: "900" }}>Cleaning -3 bathroom pack</h6>
                        <p className='scroll2Text'><MdStars style={{ color: "blueviolet" }} /> 4.82 (489.6K reviews)</p>
                        <p className='scroll2Text'> RS . 1037/-</p>
                    </div>
                    <div className='btndiv'>
                        <button className='scrollbtn'>Add</button>
                    </div>
                </div>
                <div className='empty' />
                <div className='p-2 scrolll' style={{ lineHeight: "20px" }}>
                    <ul className='scroll1ul' style={{ fontSize: "13px" }} >
                        <li>All areas cleaned by hand: toilet pot, tiles, basin, exhaust, etc.</li>
                        <li>Dirt & stain removal for spotless shine at only ₹302/bathroom</li>
                    </ul>
                    <ViewPopUp />
                </div>
            </div>
        </div>

    )
}

export default BRscroll2
