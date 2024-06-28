import React, { useEffect } from 'react'
import Header from './Components/Header'
// import ServiceTop from './Components/ServiceTop'
import "./services.css"
import Footerf from '../Footer/Footerf'
// import ServiceContainer from './Components/Servicepack/ServiceContainer'
import Service_container from './Components/Service_container'
import Service_top from './Components/Service_top'

const Services = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <div>
            <Service_top></Service_top>
            <Header />
            <Service_container></Service_container>
            <Footerf />
        </div>
    )
}

export default Services