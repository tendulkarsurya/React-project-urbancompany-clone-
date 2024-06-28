import React from 'react'
import { MdStars } from "react-icons/md";
import '../ACscrolls.css'
import ViewPopUp from '../ViewPopUp'

const PackageScroll1 = () => {
  return (
    <div className='pt-1 ' id='package'>
       <h3 className='fw-bold'>Packing & Beatsellers</h3>
            <div className=' '>
                <div className='d-flex p-2 scrolll '>
                    <div className='textdiv'>
                        <p className='pt-2 scroll2Text' style={{color:"green"}}>PACKAGE</p>
                        <h6 style={{fontWeight:"900"}}>Full chocolate | Full chocolate waxing</h6>
                        <p className='scroll2Text'><MdStars style={{color:"blueviolet"}}  /> 4.82 (919.6K reviews)</p>
                        <p className='scroll2Text'>Starts at 1140/-</p>
                    </div>
                    <div className='btndiv'>
                        <button className='scrollbtn'>Add</button>
                    </div>
                </div>
                <div className='empty' />
                <div className='p-2 scrolll' style={{lineHeight:"20px"}}>              
                    <p style={{ fontSize: "13px" }}>Roll on waxing: chocolate full arms, under arms, full legs</p>
                    <ViewPopUp />
                </div>
            </div>
        </div>
  ) 
}

export default PackageScroll1
