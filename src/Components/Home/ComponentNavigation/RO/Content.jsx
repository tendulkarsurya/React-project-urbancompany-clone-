import React from 'react'
import { MdStars } from "react-icons/md";
import ViewPopUp from '../ViewPopUp'


const Content = () => {
    return (
        <div id='ACS'>
            <div>
                <h3 className='fw-bold'>MODELS </h3>

                <div>
                    <div className='scroll1'><img src="./Assets/ro1.webp" alt="" /></div>
                    <div className='pt-1'>
                        <div className=' '>
                            <div className='d-flex p-2 scrolll '>
                                <div className='textdiv'>
                                    <p className='pt-2 scroll2Text' style={{ color: "green" }}>FREE INSTALLATION</p>
                                    <h6 style={{ fontWeight: "900" }}>Native M2  </h6>
                                    <p className='scroll2Text'><MdStars style={{ color: "blueviolet" }} /> 4.82 (489.6K reviews)</p>
                                    <p className='scroll2Text'>₹18,999  </p>
                                </div>
                                <div className='btndiv'>
                                    <button className='scrollbtn'>Add</button>
                                </div>
                            </div>
                            <div className='empty' />
                            <div className='p-2 scrolll' style={{ lineHeight: "2opx" }}>
                                <ul className='scroll1ul' style={{ fontSize: "13px" }} >
                                    <li>10-stage purifier with smart monitoring to keep track of water & filter quality</li>
                                    <li>2-year unconditional warranty on all filters with free replacement & spare parts</li>
                                </ul>
                                <ViewPopUp />
                                </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    <div className='scroll1'>
                        <img src="./Assets/ro2.webp" alt="" />
                    </div>
                    <div className='pt-1'>
                        <div className=' '>
                            <div className='d-flex p-2 scrolll '>
                                <div className='textdiv'>
                                    <p className='pt-2 scroll2Text' style={{ color: "green" }}>FREE INSTALLATION</p>
                                    <h6 style={{ fontWeight: "900" }}>Native M1 with Copper</h6>
                                    <p className='scroll2Text'><MdStars style={{ color: "blueviolet" }} /> 4.82 (489.6K reviews)</p>
                                    <p className='scroll2Text'>₹14,499 </p>
                                </div>
                                <div className='btndiv'>
                                    <button className='scrollbtn' disabled>Add</button>
                                </div>
                            </div>
                            <div className='empty' />
                            <div className='p-2 scrolll' style={{ lineHeight: "2opx" }}>
                                <ul className='scroll1ul' style={{ fontSize: "13px" }} >
                                    <li>10 stage purifier boosted with alkaline, minerals & charged with copper</li>
                                    <li>2-year unconditional warranty on all filters with free replacement & spare parts</li>
                                </ul>
                                <ViewPopUp />
                                </div>
                        </div>
                    </div>
                </div><hr />
                <div>
                    <div className='scroll1'><img src="./Assets/ro3.webp" alt="" /></div>
                    <div className='pt-1'>
                        <div className=' '>
                            <div className='d-flex p-2 scrolll '>
                                <div className='textdiv'>
                                    <p className='pt-2 scroll2Text' style={{ color: "green" }}>FREE INSTALLATION</p>
                                    <h6 style={{ fontWeight: "900" }}>Native M1  </h6>
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
                                    <li>9-stage purifier boosted with alkaline & minerals</li>
                                    <li>2-year unconditional warranty on all filters with free replacement & spare parts</li>
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