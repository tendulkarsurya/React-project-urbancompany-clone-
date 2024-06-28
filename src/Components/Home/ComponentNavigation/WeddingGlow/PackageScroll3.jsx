import React from 'react'
import { MdStars } from "react-icons/md";
import '../ACscrolls.css'
import ViewPopUp from '../ViewPopUp'

const PackageScroll3 = () => {
  return (
    <div className='pt-1'>
            <div className=' '>
                <div className='d-flex p-2 scrolll '>
                    <div className='textdiv'>
                        <p className='pt-2 scroll2Text' style={{color:"green"}}>PACKAGE</p>
                        <h6 style={{fontWeight:"900"}}>Wax & Glow</h6>
                        <p className='scroll2Text'><MdStars style={{color:"blueviolet"}}  /> 4.85 (919.6K reviews)</p>
                        <p className='scroll2Text'>Starts at 1199/-</p>
                    </div>
                    <div className='btndiv'>
                        <button className='scrollbtn'>Add</button>
                    </div>
                </div>
                <div className='empty' />
                <div className='p-2 scrolll' style={{lineHeight:"20px"}}>              
                    <p style={{ fontSize: "13px" }}>Facial: Gloviate lighitening facial</p>
                    <ViewPopUp />
                </div>
            </div>
        </div>
  )
}

export default PackageScroll3
