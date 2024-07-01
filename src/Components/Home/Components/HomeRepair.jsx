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
        items: 3
    }
};
const HomeRepair = () => {
    return (
        <div>
            <div>
                <h2 className='pt-1 ps-2'> Quick Home Repair</h2>
            </div>
            <Carousel responsive={responsive}>
                <div className='p-3 repairCaro'>
                    <div className='imageDiv'><img className='' src="./Assets/home-repair1.jpg" alt="" /></div>
                    <p>Drill & hang (wall decor)</p>
                </div>
                <div className='p-3 repairCaro'>
                    <div className='imageDiv'><img className='' src="./Assets/home-repair2.jpg" alt="" /></div>
                    <p>Fan repair</p>
                </div>
                <div className='p-3 repairCaro'>
                    <div className='imageDiv'><img className='' src="./Assets/home-repair3.jpg" alt="" /></div>
                    <p>Switch & socket Replacement</p>
                </div>
                <div className='p-3 repairCaro'>
                    <div className='imageDiv'><img className='' src="./Assets/home-repair4.jpg" alt="" /></div>
                    <p>Cupboard hinge Service</p>
                </div>
                <div className='p-3 repairCaro'>
                    <div className='imageDiv'><img className='' src="./Assets/home-repair5.jpg" alt="" /></div>
                    <p>Door lock repair</p>
                </div>
                <div className='p-3 repairCaro'>
                    <div className='imageDiv'><img className='' src="./Assets/home-repair6.jpg" alt="" /></div>
                    <p>curtain rod installation</p>
                </div>
                <div className='p-3 repairCaro'>
                    <div className='imageDiv'><img className='' src="./Assets/home-repair7.jpg" alt="" /></div>
                    <p>Switchboard Repair</p>
                </div>
                <div className='p-3 repairCaro'>
                    <div className='imageDiv'><img className='' src="./Assets/home-repair8.jpg" alt="" /></div>
                    <p>Wooden shelf installation</p>
                </div>
                <div className='p-3 repairCaro'>
                    <div className='imageDiv'><img className='' src="./Assets/home-repair9.jpg" alt="" /></div>
                    <p>Tubelight Repair</p>
                </div>
            </Carousel>
        </div>
    )
}

export default HomeRepair
