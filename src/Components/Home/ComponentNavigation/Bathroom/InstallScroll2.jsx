import React from 'react'
import { MdStars } from "react-icons/md";
import ViewPopUp from '../ViewPopUp'


const InstallScroll2 = () => {
    return (
        <div className='pt-1 d-flex'>
            <div className='scroll3div' style={{ width: "70%" }}>
                <div className='p-2 scrolll '>
                    <div className='textdiv'>
                        <p className='pt-2 scroll2Text' style={{ color: "green" }}>30-DAYS WARRANTY</p>
                        <h6 style={{ fontWeight: "900" }}>AC uninstall</h6>
                        <p className='scroll2Text'><MdStars style={{ color: "blueviolet" }} /> 4.99 (99.3K reviews)</p>
                        <p className='scroll2Text'>Starts at 999/-</p>
                    </div>

                </div>
                <div className='empty' style={{ width: "90%" }} />
                <div className='p-2 scrolll ' style={{ lineHeight: "2opx" }}>
                    <p style={{ fontSize: "13px" }}>Unistallation of indoor & outdoor units</p>
                    <ViewPopUp />
                </div>
            </div>
            <div>
                <div className='anti-rust'>
                    <img className='serviceScrollimg' src="./Assets/installsc2.jpg" alt="" />
                </div>
                <div className='btndiv'>
                    <button className='scrollbtn2'>Add</button>
                </div>
            </div>
        </div>
    )
}

export default InstallScroll2
