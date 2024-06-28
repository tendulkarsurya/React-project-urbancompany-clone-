import React from 'react'
import { MdStars } from "react-icons/md";
import '../ACscrolls.css'
import ViewPopUp from '../ViewPopUp'

const FacialScroll1 = () => {
  return (
    <div className='pt-1' id='facial'>
              <h3 className='fw-bold'>Facial</h3>
            <div className='scroll1'><img src="./Assets/facial1.jpg" alt="" /></div>
            <div className='pt-1'>
            <div className=' '>
                <div className='d-flex p-2 scrolll '>
                    <div className='textdiv'>
                        <p className='pt-2 scroll2Text' style={{ color: "green" }}>PACKAGE</p>
                        <h6 style={{ fontWeight: "900" }}>Aroma magic instant glow facial</h6>
                        <p className='scroll2Text'><MdStars style={{ color: "blueviolet" }} /> 4.84 (456k reviews)</p>
                        <p className='scroll2Text'>Starts at 999/-</p>
                    </div>
                    <div className='btndiv'>
                        <button className='scrollbtn'>Add</button>
                    </div>
                </div>
                <div className='empty' />
                <div className='p-2 scrolll' style={{ lineHeight: "20px" }}>
                    <ul className='scroll1ul' style={{ fontSize: "13px" }} >
                        <li>Vitamin A,C & E illuminate & vibrant complexion</li>
                        <li>Including ultrasonic spatula cleansing with shoulder & legs</li>
                    </ul>
                    <ViewPopUp />
                </div>
            </div>
        </div>
        </div>
  )
}

export default FacialScroll1
