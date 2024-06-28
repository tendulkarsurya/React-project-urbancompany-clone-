import React from 'react'
import { MdStars } from "react-icons/md";
import ViewPopUp from '../ViewPopUp'


const GasrefillScroll1 = () => {
    return (
        <div id='SSD'>
            <h3 className='fw-bold'>Super saver deals</h3>
            <div className='pt-1 d-flex'>
                <div className='scroll3div' style={{ width: "70%" }}>
                    <div className='p-2 scrolll '>
                        <div className='textdiv'>
                            <p className='pt-2 scroll2Text' style={{ color: "green" }}>PACKAGE </p>
                            <h6 style={{ fontWeight: "900" }}>Classic cleaning - 2 bathroom pack</h6>
                            <p className='scroll2Text'><MdStars style={{ color: "blueviolet" }} /> 4.80 (345.6K reviews)</p>
                            <p className='scroll2Text'>Starts at 718/-</p>
                        </div>

                    </div>
                    <div className='empty' style={{ width: "90%" }} />
                    <div className='p-2 scrolll lead ' style={{ lineHeight: "20px" }}>
                        <ul className='scroll1ul lead' style={{ fontSize: "13px" }} >
                            <li>Hand cleaning of all areas: toilet pot, tiles, basin, exhaust etc.</li>
                            <li>Dirt & stain removal for spotless shine at only ₹359/bathroom </li>
                        </ul>
                        <ViewPopUp />
                        </div>
                </div>
                <div>
                    <div className='anti-rust'>
                        <img className='serviceScrollimg' src="./Assets/brsc1.webp" alt="" />
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
