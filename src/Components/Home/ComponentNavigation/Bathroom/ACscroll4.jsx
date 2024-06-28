import React from 'react'
import { MdStars } from "react-icons/md";
import ViewPopUp from '../ViewPopUp'


const ACscroll4 = () => {
    return (
        <div className='pt-1 d-flex'>
            <div className='scroll3div' style={{ width: "70%" }}>
                <div className='p-2 scrolll '>
                    <div className='textdiv'>
                        <p className='pt-2 scroll2Text' style={{ color: "green" }}>30-DAYS WARRANTY</p>
                        <h6 style={{ fontWeight: "900" }}>AC service lite</h6>
                        <p className='scroll2Text'><MdStars style={{ color: "blueviolet" }} /> 4.84 (154.6K reviews)</p>
                        <p className='scroll2Text'>Starts at 440/-</p>
                    </div>
                </div>
                <div className='empty' style={{ width: "90%" }} />
                <div className='p-2 scrolll' style={{ lineHeight: "2opx" }}>
                    {/* <ul className='scroll1ul' style={{ fontSize: "13px" }} >
                        <li>Prevents Frequent gas leakages through a unique anti-rust spray </li>
                        <li>Applicable on both window and split ACs</li>
                    </ul> */}
                    <p style={{ fontSize: "13px" }}>Basic cleaning with water jet technology</p>
                    <ViewPopUp />
                </div>
            </div>
            <div>
                <div className='anti-rust'>
                    <img className='serviceScrollimg' src="./Assets/scroll3.jpg" alt="" />
                </div>
                <div className='btndiv'>
                    <button className='scrollbtn2'>Add</button>
                </div>
            </div>
        </div>
    )
}

export default ACscroll4
