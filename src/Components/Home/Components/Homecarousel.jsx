import React, { useEffect } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Homecarousel.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Homecarousel = () => {
    useEffect(() => {
        AOS.init({
            once: true,
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);
    return (
        <div className='carouselmain pt-4' data-aos="fade-up">
            <Carousel responsive={responsive}>
                <div className='bbb'>
                    <Link to='/ACservicing'>
                    <img className='caro' src="./Assets/carousel1.jpg" alt="" />
                    </Link>
                </div>
                <div className='bbb'>
                    <Link to='/Bathroom'>
                    <img className='caro' src="./Assets/carousel2.jpg" alt="" />
                    </Link>
                </div>
                <div className='bbb'>
                    <Link to='Wall'>
                    <img className='caro' src="./Assets/carousel3.jpg" alt="" />
                    </Link>
                </div>
                <div className='bbb'>
                    <Link to='/WeddingGlow'>
                    <img className='caro' src="./Assets/carousel4.jpg" alt="" />
                    </Link>
                </div>
                <div className='bbb'>
                    <Link to='/Massage'>
                    <img className='caro' src="./Assets/carousel5.jpg" alt="" />
                    </Link>
                </div>
                <div className='bbb'>
                    <Link to='/Ro'>
                    <img className='caro' src="./Assets/carousel7.jpg" alt="" />
                    </Link>
                </div>
                <div className='bbb'>
                    <Link to='Lock'>
                    <img className='caro' src="./Assets/carousel8.jpg" alt="" />
                    </Link>
                </div>
            </Carousel>

        </div>
    )
}

export default Homecarousel
