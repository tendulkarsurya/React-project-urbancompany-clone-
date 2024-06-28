import React from 'react'
import { MdStars } from "react-icons/md";
import ViewPopUp from '../ViewPopUp'


const Kc = () => {
    return (
        <div id='kCkC'>
            <h3 className='fw-bold'>Kitchen Cleaning</h3>
            <div className='pt-1 d-flex'>
                <div className='scroll3div' style={{ width: "70%" }}>
                    <div className='p-2 scrolll '>
                        <div className='textdiv'>
                            <p className='pt-2 scroll2Text' style={{ color: "green" }}>BESTSELLER</p>
                            <h6 style={{ fontWeight: "900" }}>Move-in kitchen cleaning</h6>
                            <p className='scroll2Text'><MdStars style={{ color: "blueviolet" }} /> 4.77 (75.2K reviews)</p>
                            <p className='scroll2Text'>Starts at 1059/-</p>
                        </div>

                    </div>
                    <div className='empty' style={{ width: "90%" }} />
                    <div className='p-2 scrolll' style={{ lineHeight: "2opx" }}>
                        <ul className='scroll1ul' style={{ fontSize: "13px" }} >
                            <li>Oil & grease stain removal from walls, slabs, cabinets, stove, sink etc.</li>
                            <li>Cabinets cleaned inside. Removal & placing back items not included</li>
                        </ul>
                        <ViewPopUp />
                        </div>
                </div>
                <div>
                    <div className='anti-rust'>
                        <img className='serviceScrollimg' src="./Assets/brsk1.webp" alt="" />
                    </div>
                    <div className='btndiv'>
                        <button className='scrollbtn2'>Add</button>
                    </div>
                </div>
            </div>
            <hr />

            <div>
                {/* <h3 className='fw-bold'>Super saver deals</h3> */}

                <div className='scroll1'><video src="./Assets/common.mp4" width={550} controls alt="" /></div>
                <div className=' '>
                    <div className='d-flex p-2 scrolll '>
                        <div className='textdiv'>
                            <p className='pt-2 scroll2Text' style={{ color: "green" }}>BESTSELLER</p>
                            <h6 style={{ fontWeight: "900" }}>Complete kitchen cleaning</h6>
                            <p className='scroll2Text'><MdStars style={{ color: "blueviolet" }} /> 4.82 (489.6K reviews)</p>
                            <p className='scroll2Text'> RS . 1799/-</p>
                        </div>
                        <div className='btndiv'>
                            <button className='scrollbtn'>Add</button>
                        </div>
                    </div>
                    <div className='empty' />
                    <div className='p-2 scrolll' style={{ lineHeight: "2opx" }}>
                        <ul className='scroll1ul' style={{ fontSize: "13px" }} >
                            <li>Oil & grease stain removal from walls, slabs, cabinets, stove, sink etc.</li>
                            <li>Includes removal & placing back items & cleaning inside cabinets</li>
                        </ul>
                        <ViewPopUp />
                        </div>
                </div>
            </div>
            <hr />
            <div className='pt-1 d-flex'>
                <div className='scroll3div' style={{ width: "70%" }}>
                    <div className='p-2 scrolll '>
                        <div className='textdiv'>
                            {/* <p className='pt-2 scroll2Text' style={{ color: "green" }}>RS . 399 PER BATTHROOM </p> */}
                            <h6 style={{ fontWeight: "900" }}>Chimney cleaning</h6>
                            <p className='scroll2Text'><MdStars style={{ color: "blueviolet" }} /> 4.80 (345.6K reviews)</p>
                            <p className='scroll2Text'>599/-   1Hr  30min</p>
                        </div>

                    </div>
                    <div className='empty' style={{ width: "90%" }} />
                    <div className='p-2 scrolll lead ' style={{ lineHeight: "2opx" }}>
                        <ul className='scroll1ul lead' style={{ fontSize: "13px" }} >
                            <li>Degreasing and stain removal of one chimney's exteriors</li>
                            <li>Mesh and filter deep cleaning </li>
                        </ul>
                        <ViewPopUp />
                        </div>
                </div>
                <div>
                    <div className='anti-rust'>
                        <img className='serviceScrollimg' src="./Assets/brsk2.webp" alt="" />
                    </div>
                    <div className='btndiv'>
                        <button className='scrollbtn2'>Add</button>
                    </div>
                </div>
            </div>
            <hr />
            <div className='pt-1 d-flex'>
                <div className='scroll3div' style={{ width: "70%" }}>
                    <div className='p-2 scrolll '>
                        <div className='textdiv'>
                            {/* <p className='pt-2 scroll2Text' style={{ color: "green" }}>RS . 399 PER BATTHROOM </p> */}
                            <h6 style={{ fontWeight: "900" }}>Fridge deep cleaning </h6>
                            <p className='scroll2Text'><MdStars style={{ color: "blueviolet" }} /> 4.80 (345.6K reviews)</p>
                            <p className='scroll2Text'>349/- </p>
                        </div>

                    </div>
                    <div className='empty' style={{ width: "90%" }} />
                    <div className='p-2 scrolll lead ' style={{ lineHeight: "2opx" }}>
                        <ul className='scroll1ul lead' style={{ fontSize: "13px" }} >
                            <li>Deep cleaning of one fridge's interiors and exteriors</li>
                            <li>Dry cleaning of the back side </li>
                        </ul>
                        <ViewPopUp />
                        </div>
                </div>
                <div>
                    <div className='anti-rust'>
                        <img className='serviceScrollimg' src="./Assets/brsk3.webp" alt="" />
                    </div>
                    <div className='btndiv' id='Mini'  >
                        <button className='scrollbtn2'>Add</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Kc