import React from 'react'
import { MdStars } from "react-icons/md";
import '../ACscrolls.css'

import ViewPopUp from '../ViewPopUp'

const ACscroll3 = () => {
    return (
        <div className='pt-1 d-flex'>
            <div className='scroll3div' style={{ width: "70%" }}>
                <div className='p-2 scrolll '>
                    <div className='textdiv'>
                        <p className='pt-2 scroll2Text' style={{ color: "green" }}>30-DAYS WARRANTY</p>
                        <h6 style={{ fontWeight: "900" }}>Anti-rust deep clean AC sercive</h6>
                        <p className='scroll2Text'><MdStars style={{ color: "blueviolet" }} /> 4.86 (66.6K reviews)</p>
                        <p className='scroll2Text'>Starts at 990/-</p>
                    </div>
                </div>
                <div className='empty' style={{ width: "90%" }} />
                <div className='p-2 scrolll' style={{ lineHeight: "2opx" }}>
                    <ul className='scroll1ul' style={{ fontSize: "13px" }} >
                        <li>Prevents Frequent gas leakages through a unique anti-rust spray </li>
                        <li>Applicable on both window and split ACs</li>
                    </ul>
                    <ViewPopUp />
                </div>
            </div>
            <div>
                <div className='anti-rust'>
                    <img className='serviceScrollimg' src="./Assets/scroll2.jpg" alt="" />
                </div>
                <div className='btndiv'>
                    {/* <button className='scrollbtn2'>Add</button> */}
                    <button className='scrollbtn2'>Add</button>   
                </div>
            </div>
        </div>
    )
}

export default ACscroll3
