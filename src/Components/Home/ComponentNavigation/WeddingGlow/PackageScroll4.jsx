import React from 'react'
import { MdStars } from "react-icons/md";
import '../ACscrolls.css'
import ViewPopUp from '../ViewPopUp'

const PackageScroll4 = () => {
  return (
    <div className='pt-1'>
            <div className=' '>
                <div className='d-flex p-2 scrolll '>
                    <div className='textdiv'>
                        <p className='pt-2 scroll2Text' style={{ color: "green" }}>PACKAGE</p>
                        <h6 style={{ fontWeight: "900" }}>Medicure & Pedicure </h6>
                        <p className='scroll2Text'><MdStars style={{ color: "blueviolet" }} /> 4.83 (914.6K reviews)</p>
                        <p className='scroll2Text'>Starts at 1599/-</p>
                    </div>
                    <div className='btndiv'>
                        <button className='scrollbtn'>Add</button>
                    </div>
                </div>
                <div className='empty' />
                <div className='p-2 scrolll' style={{ lineHeight: "20px" }}>
                    <ul className='scroll1ul' style={{ fontSize: "13px" }} >
                        <li>Manicure: Elysian British Rose Manicure</li>
                        <li>Pedicure: Crystal Rose Pedicure</li>
                    </ul>
                    <ViewPopUp />
                </div>
            </div>
        </div>
  )
}

export default PackageScroll4
