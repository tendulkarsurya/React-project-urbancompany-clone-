import React, { useEffect } from 'react'
import Footerf from '../Footer/Footerf'
import About_Mission from './Components/About_Mission'
import About_Vision from './Components/About_Vision'
import './About.css'
import About2 from './Components/About2'
import About_Top from './Components/About_Top'
const About = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <div className='AboutusMain'>
            <About_Top/>
            <About_Mission />
            <About_Vision />
            <About2 />
            <Footerf />
        </div>
    )
}

export default About