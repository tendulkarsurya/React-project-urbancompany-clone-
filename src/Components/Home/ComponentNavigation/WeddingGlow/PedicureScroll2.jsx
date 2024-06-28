import React from 'react'
import { MdStars } from "react-icons/md";
import '../ACscrolls.css'
import ViewPopUp from '../ViewPopUp'

const PedicureScroll2 = () => {
    return (
        <div className='pt-1'>
            <div className='scroll1'><img src="./Assets/pedicure-m1.jpg" alt="" /></div>
            <div className=' '>
                <div className='d-flex p-2 scrolll '>
                    <div className='textdiv'>
                    <p className='pt-2 scroll2Text' style={{ color: "green" }}>PACKAGE</p>
                        <h6 style={{ fontWeight: "900" }}>Crystal rose pedicure </h6>
                        <p className='scroll2Text'><MdStars style={{ color: "blueviolet" }} /> 4.81 (4.6K reviews)</p>
                        <p className='scroll2Text'>Starts at 799/-</p>
                    </div>
                    <div className='btndiv'>
                        <button className='scrollbtn'>Add</button>
                    </div>
                </div>
                <div className='empty' />
                <div className='p-2 scrolll' style={{ lineHeight: "20px" }}>
                    <ul className='scroll1ul' style={{ fontSize: "13px" }} >
                        <li>Olive oil & jojoba oil provide intense & long lasting hydration</li>
                        <li>Includes crystal soak treatment with in 20-min foot massage</li>
                    </ul>
                    <ViewPopUp />
                </div>
            </div>
        </div>
    )
}

export default PedicureScroll2
