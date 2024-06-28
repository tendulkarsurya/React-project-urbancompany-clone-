import React from 'react'
import { MdStars } from "react-icons/md";
import '../ACscrolls.css'
import ViewPopUp from '../ViewPopUp'

const CleanupScroll2 = () => {
  return (
    <div className='pt-1'>
    <div className='scroll1'><img src="./Assets/cleanup2.jpg" alt="" /></div>
    <div className='pt-1'>
        <div className=' '>
            <div className='d-flex p-2 scrolll '>
                <div className='textdiv'>
                    <p className='pt-2 scroll2Text' style={{ color: "green" }}>PACKAGE</p>
                    <h6 style={{ fontWeight: "900" }}>Elysian pinacolada fruit cleanup</h6>
                    <p className='scroll2Text'><MdStars style={{ color: "blueviolet" }} /> 4.74 (73k reviews)</p>
                    <p className='scroll2Text'>Starts at 859/-</p>
                </div>
                <div className='btndiv'>
                    <button className='scrollbtn'>Add</button>
                </div>
            </div>
            <div className='empty' />
            <div className='p-2 scrolll' style={{ lineHeight: "20px" }}>
            <p style={{ fontSize: "13px" }}>Allantoin & avacado oil replenish the skin while boosting hydration</p>
            <ViewPopUp />
            </div>
        </div>
    </div>
</div>
  )
}

export default CleanupScroll2
