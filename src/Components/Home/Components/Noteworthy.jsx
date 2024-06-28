import React from 'react'
import './HomeRepair.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
};
const Noteworthy = () => {
  return (
    <div>
            <div>
                <h2 className='pt-1 ps-2'> New & Noteworthy</h2>
            </div>
            <Carousel responsive={responsive}>
                <div className='p-3 repairCaro'>
                    <div className='imageDiv'><img className='' src="./Assets/net1.jpg" alt="" /></div>
                    <p>Native Water purifier</p>
                </div>
                <div className='p-3 repairCaro'>
                    <div className='imageDiv'><img className='' src="./Assets/net2.jpg" alt="" /></div>
                    <p>Wall Decor (panels)</p>
                </div>
                <div className='p-3 repairCaro'>
                    <div className='imageDiv'><img className='' src="./Assets/net3.jpg" alt="" /></div>
                    <p>Home Painting</p>
                </div>
                <div className='p-3 repairCaro'>
                    <div className='imageDiv'><img className='' src="./Assets/net4.jpg" alt="" /></div>
                    <p>Native Smart Locks</p>
                </div>
                <div className='p-3 repairCaro'>
                    <div className='imageDiv'><img className='' src="./Assets/net5.jpg" alt="" /></div>
                    <p>Ayurvedic Spa</p>
                </div>
                <div className='p-3 repairCaro'>
                    <div className='imageDiv'><img className='' src="./Assets/net6.jpg" alt="" /></div>
                    <p>Hair Studio for Women</p>
                </div>
                <div className='p-3 repairCaro'>
                    <div className='imageDiv'><img className='' src="./Assets/net7.jpg" alt="" /></div>
                    <p>AC Service & Repair</p>
                </div>
            </Carousel>
        </div>
  )
}

export default Noteworthy
