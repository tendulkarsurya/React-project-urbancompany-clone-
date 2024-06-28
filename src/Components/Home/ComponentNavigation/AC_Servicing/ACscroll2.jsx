import React, { useState } from 'react'
import { MdStars } from "react-icons/md";
import '../ACscrolls.css'
import ViewPopUp from '../ViewPopUp'

const ACscroll2 = () => {

    return (
        <div className='pt-1'>
            <div className=' '>
                <div className='d-flex p-2 scrolll '>
                    <div className='textdiv'>
                        <p className='pt-2 scroll2Text' style={{color:"green"}}>30-DAYS WARRANTY</p>
                        <h6 style={{fontWeight:"900"}}>Power Saver AC Service</h6>
                        <p className='scroll2Text'><MdStars style={{color:"blueviolet"}}  /> 4.82 (489.6K reviews)</p>
                        <p className='scroll2Text'>Starts at 600/-</p>
                    </div>
                    <div className='btndiv'>
                    <button className='scrollbtn'>Add</button>
                       
                    </div>
                </div>
                <div className='empty' />
                <div className='p-2 scrolll' style={{lineHeight:"2opx"}}>
                    <ul className='scroll1ul' style={{fontSize:"13px"}} >
                        <li>Advanceded Foem-jet technology</li>
                        <li>Deep jet cleaning of outdoor unit</li>
                    </ul>
                    <ViewPopUp />
                </div>
            </div>
        </div>
        
    )
}

export default ACscroll2
