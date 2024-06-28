import React from 'react'
import { MdStars } from "react-icons/md";
import ViewPopUp from '../ViewPopUp'


const HeadScroll1 = () => {
    return (
        <div id='SSD'>
            <h3 className='fw-bold'>Bathroom Cleaning</h3>
            <div className='pt-1 d-flex'>
                <div className='scroll3div' style={{ width: "70%" }}>
                    <div className='p-2 scrolll '>
                        <div className='textdiv'>
                            {/* <p className='pt-2 scroll2Text' style={{ color: "green" }}>RS . 399 PER BATTHROOM </p> */}
                            <h6 style={{ fontWeight: "900" }}>Classic bathroom cleaning</h6>
                            <p className='scroll2Text'><MdStars style={{ color: "blueviolet" }} /> 4.80 (345.6K reviews)</p>
                            <p className='scroll2Text'>399/-   60min</p>
                        </div>

                    </div>
                    <div className='empty' style={{ width: "90%" }} />
                    <div className='p-2 scrolll lead ' style={{ lineHeight: "2opx" }}>
                        <ul className='scroll1ul lead' style={{ fontSize: "13px" }} >
                            <li>Dirt & black stain removal from toilet pot, tiles, floor, basin, exhaust, etc.</li>
                            <li>Book this service every month for a clean, spotless & hygienic bathroom </li>
                        </ul>
                        <ViewPopUp />
                        </div>
                </div>
                
                <div>
                    <div className='anti-rust'>
                        <img className='serviceScrollimg' src="./Assets/brsc2.webp" alt="" />
                    </div>
                    <div className='btndiv'>
                        <button className='scrollbtn2'>Add</button>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default HeadScroll1
