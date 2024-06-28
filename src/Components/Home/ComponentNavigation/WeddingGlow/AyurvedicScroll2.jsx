import React from 'react'
import { MdStars } from "react-icons/md";
import '../ACscrolls.css'
import ViewPopUp from '../ViewPopUp'

const AyurvedicScroll2 = () => {
  return (
    <div className='pt-1'>
            <div className='scroll1'><img src="./Assets/ayur2.jpg" alt="" /></div>
            <div className='pt-1'>
                <div className=' '>
                    <div className='d-flex p-2 scrolll '>
                        <div className='textdiv'>
                            <p className='pt-2 scroll2Text' style={{ color: "green" }}>PACKAGE</p>
                            <h6 style={{ fontWeight: "900" }}>Ashwagantha tan removal facial</h6>
                            <p className='scroll2Text'><MdStars style={{ color: "blueviolet" }} /> 4.64 (133k reviews)</p>
                            <p className='scroll2Text'>Starts at 1299/-</p>
                        </div>
                        <div className='btndiv'>
                            <button className='scrollbtn'>Add</button>
                        </div>
                    </div>
                    <div className='empty' />
                    <div className='p-2 scrolll' style={{ lineHeight: "20px" }}>
                    <p style={{ fontSize: "13px" }}>Ashwagantha extracts helps remove tanning & pigmentation</p>
                    <ViewPopUp />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default AyurvedicScroll2
