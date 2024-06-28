import React from 'react'
import { MdOutlineStar } from "react-icons/md";
import { MdCurrencyRupee } from "react-icons/md";

const Content = () => {
    return (
        <div>
            <div className='d-flex  justify-content-around' >
                <div className=''>
                    <h5>At-home consultation</h5>
                    <p> <MdOutlineStar /> 4.74 (2.2K)</p>
                    <p> <span><MdCurrencyRupee /> 49  </span> 60Min </p>
                </div>
                <div className='btndiv'>
                    <button className='scrollbtn2' >Add</button>
                </div>

            </div>
            <div className='Wall_dec_cent_UC_box-img'>
                <div className='overflow-hidden rounded' >
                    <img className='wall_img_cent' src="/Assets/wall1.webp" alt="" />
                </div>
                <div>
                    <img className='wall_img_cents' src="/Assets/wall2.webp" alt="" />
                </div>
                <div>
                    <img className='wall_img_cents' src="/Assets/wall3.webp" alt="" />
                </div>
                <div>
                    <img className='wall_img_cent' src="/Assets/wall4.webp" alt="" />
                </div>
                <div className='overflow-hidden rounded'>
                    <img className='wall_img_cent' src="/Assets/wall5.webp" alt="" />
                </div>
                <div>
                    <img className='wall_img_cent' src="/Assets/wall6.webp" alt="" />
                </div>
                <div>
                    <img className='wall_img_cent' src="/Assets/wall7.webp" alt="" />
                </div>
                <div>
                    <img className='wall_img_cents' src="/Assets/wall8.webp" alt="" />
                </div>
                <div>
                    <img className='wall_img_cents' src="/Assets/wall9.webp" alt="" />
                </div>
                <div>
                    <img className='wall_img_cents' src="/Assets/wall10.webp" alt="" />
                </div>

            </div>
        </div>
    )
}

export default Content