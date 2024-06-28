import React from 'react'
import { MdStars } from "react-icons/md";
import '../ACscrolls.css'
import ViewPopUp from '../ViewPopUp'

const WaxingScroll2 = () => {
  return (
    <div className='pt-1 d-flex'>
            <div className='scroll3div' style={{ width: "70%" }}>
                <div className='p-2 scrolll '>
                    <div className='textdiv'>
                        <p className='pt-2 scroll2Text' style={{ color: "green" }}>PACKAGE</p>
                        <h6 style={{ fontWeight: "900" }}>Full arms & underarms waxing</h6>
                        <p className='scroll2Text'><MdStars style={{ color: "blueviolet" }} /> 4.87 (179.3K reviews)</p>
                        <p className='scroll2Text'>Starts at 409/-</p>
                    </div>

                </div>
                <div className='empty' style={{ width: "90%" }} />
                <div className='p-2 scrolll' style={{ lineHeight: "20px" }}>
                    <p style={{ fontSize: "13px" }}>Roll-on, RICA peel-off & honey wax avaliable</p>
                    <ViewPopUp />
                </div>
            </div>
            <div>
                <div className='anti-rust'>
                    <img className='serviceScrollimg' src="./Assets/waxing1.jpg" alt="" />
                </div>
                <div className='btndiv'>
                    <button className='scrollbtn2'>Add</button>
                </div>
            </div>
        </div>
  )
}

export default WaxingScroll2
