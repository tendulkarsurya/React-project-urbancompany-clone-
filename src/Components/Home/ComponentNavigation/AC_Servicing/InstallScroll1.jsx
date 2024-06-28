import React from 'react'
import { MdStars } from "react-icons/md";
import '../ACscrolls.css'
import ViewPopUp from '../ViewPopUp'

const InstallScroll1 = () => {
  return (
    <div id='INS'>
      <h3 className='fw-bold'>Install & uninstall</h3>
      <div className='pt-1 d-flex'>
            <div className='scroll3div' style={{ width: "70%" }}>
                <div className='p-2 scrolll '>
                    <div className='textdiv'>
                        <p className='pt-2 scroll2Text' style={{ color: "green" }}>30-DAYS WARRANTY</p>
                        <h6 style={{ fontWeight: "900" }}>AC install</h6>
                        <p className='scroll2Text'><MdStars style={{ color: "blueviolet" }} /> 4.77 (75.2K reviews)</p>
                        <p className='scroll2Text'>Starts at 1299/-</p>
                    </div>

                </div>
                <div className='empty' style={{ width: "90%" }} />
                <div className='p-2 scrolll' style={{ lineHeight: "2opx" }}>
                    <ul className='scroll1ul' style={{ fontSize: "13px" }} >
                        <li>Installation of indoor & outdoor units with free gas check</li>
                        <li>Procurement of spare parts</li>
                    </ul>
                    <ViewPopUp />                </div>
            </div>
            <div>
                <div className='anti-rust'>
                    <img className='serviceScrollimg' src="./Assets/installsc1.jpg" alt="" />
                </div>
                <div className='btndiv'>
                    <button className='scrollbtn2'>Add</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InstallScroll1
  