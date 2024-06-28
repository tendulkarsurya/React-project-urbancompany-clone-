import React, { useEffect } from 'react'
import "./Contactus.css"
import GetInTouch from './Components/GetInTouch'
import Queries from './Components/Queries'
import Footerf from '../Footer/Footerf'
import Form from './Components/Form'

const Contactus = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <div className='contactMain '>
           <div className=''>
           <GetInTouch />
            <Queries />
            {/* <Lorem /> */}
            <Form />
            <Footerf />
           </div>

        </div>
    )
}

export default Contactus