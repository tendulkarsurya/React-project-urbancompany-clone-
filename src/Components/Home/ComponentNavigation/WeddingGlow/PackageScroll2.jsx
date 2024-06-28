import React from 'react'
import { MdStars } from "react-icons/md";
import '../ACscrolls.css'
import ViewPopUp from '../ViewPopUp'

const PackageScroll2 = () => {
    return (
        <div className='pt-1'>
            <div className=' '>
                <div className='d-flex p-2 scrolll '>
                    <div className='textdiv'>
                        <p className='pt-2 scroll2Text' style={{ color: "green" }}>PACKAGE</p>
                        <h6 style={{ fontWeight: "900" }}>Complete honey waxing </h6>
                        <p className='scroll2Text'><MdStars style={{ color: "blueviolet" }} /> 4.84 (910.6K reviews)</p>
                        <p className='scroll2Text'>Starts at 899/-</p>
                    </div>
                    <div className='btndiv'>
                        <button className='scrollbtn'>Add</button>
                    </div>
                </div>
                <div className='empty' />
                <div className='p-2 scrolll' style={{ lineHeight: "20px" }}>
                    <ul className='scroll1ul' style={{ fontSize: "13px" }} >
                        <li>Waxing: Full arms, Full Legs(no bikini and no brazilian)</li>
                        <li>Facial Hair Removal: Threading:Eyebrow, Threading:Upper lip</li>
                    </ul>
                    <ViewPopUp />
                </div>
            </div>
        </div>
        
    )
}

export default PackageScroll2
