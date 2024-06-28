import React from 'react'
import { MdStars } from "react-icons/md";
import HeadScroll1 from './headScroll1 copy';
import ViewPopUp from '../ViewPopUp'


const Brtp = () => {
    return (
        <div id='BRT'>
            <HeadScroll1 />

            <div>
                <div>
                    {/* <h3 className='fw-bold'>Super saver deals</h3> */}

                    <div className='scroll1'><video src="./Assets/common.mp4" width={550} controls alt="" /></div>
                    <div className=' '>
                        <div className='d-flex p-2 scrolll '>
                            <div className='textdiv'>
                                <p className='pt-2 scroll2Text' style={{ color: "green" }}>BESTSELLER</p>
                                <h6 style={{ fontWeight: "900" }}>Move-In bathroom cleaning</h6>
                                <p className='scroll2Text'><MdStars style={{ color: "blueviolet" }} /> 4.82 (489.6K reviews)</p>
                                <p className='scroll2Text'> RS . 399/-  1Hr 20Min</p>
                            </div>
                            <div className='btndiv'>
                                <button className='scrollbtn'>Add</button>
                            </div>
                        </div>
                        <div className='empty' />
                        <div className='p-2 scrolll' style={{ lineHeight: "2opx" }}>
                            <ul className='scroll1ul' style={{ fontSize: "13px" }} >
                                <li>Paint, rust, stain removal from toilet pot, tiles, floor basin, exhaust, etc.</li>
                                <li>Rigorous cleaning with scrubbing machine. Ideal for relocating.</li>
                            </ul>
                            <ViewPopUp />
                            </div>
                    </div>
                </div>
                <hr />
                <div>
                    <div>
                        {/* <h3 className='fw-bold'>Super saver deals</h3> */}

                        <div className='scroll1'><video src="./Assets/common.mp4" width={550} controls alt="" /></div>
                        <div className=' '>
                            <div className='d-flex p-2 scrolll '>
                                <div className='textdiv'>
                                    <p className='pt-2 scroll2Text' style={{ color: "green" }}>BESTSELLER</p>
                                    <h6 style={{ fontWeight: "900" }}>Intense bathroom cleaning</h6>
                                    <p className='scroll2Text'><MdStars style={{ color: "blueviolet" }} /> 4.82 (489.6K reviews)</p>
                                    <p className='scroll2Text'> RS . 499/-  1Hr 20Min</p>
                                </div>
                                <div className='btndiv'>
                                    <button className='scrollbtn'>Add</button>
                                </div>
                            </div>
                            <div className='empty' />
                            <div className='p-2 scrolll' style={{ lineHeight: "2opx" }}>
                                <ul className='scroll1ul' style={{ fontSize: "13px" }} >
                                    <li>Hard water stains & dirt in tile grouting removal with scrubbing machine</li>
                                    <li>Intense cleaning of toilet pot, tiles, floor, basin, exhaust, etc.</li>
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

export default Brtp