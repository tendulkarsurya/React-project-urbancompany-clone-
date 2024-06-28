import React from 'react'
import { MdStars } from "react-icons/md";
import '../ACscrolls.css'
import ViewPopUp from '../ViewPopUp'

const PedicureScroll3 = () => {
    return (
        <div className='pt-1'>
            <div className='scroll1'><img src="./Assets/maincure2.jpg" alt="" /></div>
            <div className='pt-1 d-flex'>
                <div className='scroll3div' style={{ width: "70%" }}>
                    <div className='p-2 scrolll '>
                        <div className='textdiv'>
                            <p className='pt-2 scroll2Text' style={{ color: "green" }}>PACKAGE</p>
                            <h6 style={{ fontWeight: "900" }}>Elysian British Rose Manicure</h6>
                            <p className='scroll2Text'><MdStars style={{ color: "blueviolet" }} /> 4.67 (66.3K reviews)</p>
                            <p className='scroll2Text'>Starts at 799</p>
                        </div>

                    </div>
                    <div className='empty' style={{ width: "90%" }} />
                    <div className='p-2 scrolll' style={{ lineHeight: "20px" }}>
                        <p style={{ fontSize: "13px" }}>Rose salt soak, scrub, cream massage, mask for soft</p>
                        <ViewPopUp />
                        </div>
                </div>
                <div>
                    <div className='anti-rust'>
                        <img className='serviceScrollimg' src="./Assets/maincure1.jpg" alt="" />
                    </div>
                    <div className='btndiv'>
                        <button className='scrollbtn2'>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PedicureScroll3
