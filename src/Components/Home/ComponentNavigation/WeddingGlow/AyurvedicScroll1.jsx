import React from 'react'
import { MdStars } from "react-icons/md";
import '../ACscrolls.css'
import ViewPopUp from '../ViewPopUp'

const AyurvedicScroll1 = () => {
  return (
    <div className='pt-1' id='ayur'>
              <h3 className='fw-bold'>Ayurvedic Facial</h3>
            <div className='scroll1'><img src="./Assets/ayur1.jpg" alt="" /></div>
            <div className='pt-1'>
            <div className=' '>
                <div className='d-flex p-2 scrolll '>
                    <div className='textdiv'>
                        <p className='pt-2 scroll2Text' style={{ color: "green" }}>PACKAGE</p>
                        <h6 style={{ fontWeight: "900" }}>Kumkumadi ubtan glow facial</h6>
                        <p className='scroll2Text'><MdStars style={{ color: "blueviolet" }} /> 4.84 (456k reviews)</p>
                        <p className='scroll2Text'>Starts at 1299/-</p>
                    </div>
                    <div className='btndiv'>
                        <button className='scrollbtn'>Add</button>
                    </div>
                </div>
                <div className='empty' />
                <div className='p-2 scrolll' style={{ lineHeight: "20px" }}>
                    <ul className='scroll1ul' style={{ fontSize: "13px" }} >
                        <li>Kumkumadi deeply nourish & cleanse the skin </li>
                        <li>Including ultrasonic spatula cleansing with shoulder, back & legs</li>
                    </ul>
                    <ViewPopUp />
                </div>
            </div>
        </div>
        </div>
  )
}

export default AyurvedicScroll1
