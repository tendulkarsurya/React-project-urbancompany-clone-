import React from 'react'
import { MdStars } from "react-icons/md";
import '../ACscrolls.css'
import ViewPopUp from '../ViewPopUp'


const GasrefillScroll1 = () => {
  return (
    <div id='GAS'>
      <h3 className='fw-bold'>Repair & gas refill</h3>
      <div className='pt-1 d-flex'>
            <div className='scroll3div' style={{ width: "70%" }}>
                <div className='p-2 scrolll '>
                    <div className='textdiv'>
                        <p className='pt-2 scroll2Text' style={{ color: "green" }}>30-DAYS WARRANTY</p>
                        <h6 style={{ fontWeight: "900" }}>AC repair (split/window)</h6>
                        <p className='scroll2Text'><MdStars style={{ color: "blueviolet" }} /> 4.80 (345.6K reviews)</p>
                        <p className='scroll2Text'>Starts at 299/-</p>
                    </div>

                </div>
                <div className='empty' style={{ width: "90%" }} />
                <div className='p-2 scrolll' style={{ lineHeight: "2opx" }}>
                    <ul className='scroll1ul' style={{ fontSize: "13px" }} >
                        <li>Detailed issue diagnosis with same day resolution</li>
                        <li>visit charges of 299/- will be adjusted in the final bill</li>
                    </ul>
                    <ViewPopUp />
                     </div>
            </div>
            <div>
                <div className='anti-rust'>
                    <img className='serviceScrollimg' src="./Assets/gasrefill1.jpg" alt="" />
                </div>
                <div className='btndiv'>
                    <button className='scrollbtn2'>Add</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GasrefillScroll1
