import React from 'react'
import { MdStars } from "react-icons/md";
import ViewPopUp from '../ViewPopUp'


const Content = () => {
    return (
        <div id='ACS'>
            <div>
                <h3 className='fw-bold'>Door Lock</h3>

                <div>
                    <div className='scroll1'><img src="./Assets/Lock1.webp" alt="" /></div>
                    <div className='pt-1'>
                        <div className=' '>
                            <div className='d-flex p-2 scrolll '>
                                <div className='textdiv'>
                                    <p className='pt-2 scroll2Text' style={{ color: "green" }}>FREE INSTALLATION</p>
                                    <h6 style={{ fontWeight: "900" }}>Native L1 Professional  </h6>
                                    <p className='scroll2Text'><MdStars style={{ color: "blueviolet" }} /> 4.82 (489.6K reviews)</p>
                                    <p className='scroll2Text'>₹13,499 </p>
                                </div>
                                <div className='btndiv'>
                                    <button className='scrollbtn'>Add</button>
                                </div>
                            </div>
                            <div className='empty' />
                            <div className='p-2 scrolll' style={{ lineHeight: "2opx" }}>
                                <ul className='scroll1ul' style={{ fontSize: "13px" }} >
                                    <li>View, recognise & give access to familiar faces with the new camera feature</li>
                                    <li>3-year unconditional warranty & 24x7 on-call & on-site support</li>
                                </ul>
                                <ViewPopUp />
                                </div>
                        </div>
                    </div>
                </div><hr />
                <div>
                    <div className='scroll1'>
                        <img src="./Assets/Lock2.webp" alt="" />
                    </div>
                    <div className='pt-1'>
                        <div className=' '>
                            <div className='d-flex p-2 scrolll '>
                                <div className='textdiv'>
                                    <p className='pt-2 scroll2Text' style={{ color: "green" }}>99.99% ACCURACY</p>
                                    <h6 style={{ fontWeight: "900" }}>Native A1 - Fingerprint</h6>
                                    <p className='scroll2Text'><MdStars style={{ color: "blueviolet" }} /> 4.82 (489.6K reviews)</p>
                                    <p className='scroll2Text'>₹4,999 </p>
                                </div>
                                <div className='btndiv'>
                                    <button className='scrollbtn' disabled>Add</button>
                                </div>
                            </div>
                            <div className='empty' />
                            <div className='p-2 scrolll' style={{ lineHeight: "2opx" }}>
                                <ul className='scroll1ul' style={{ fontSize: "13px" }} >
                                    <li>Upgrade your existing lock with fingerprint / passcode access and auto-locking</li>
                                    <li>2-year unconditional warranty & 100% fitment guarantee</li>
                                </ul>
                                <ViewPopUp />
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content