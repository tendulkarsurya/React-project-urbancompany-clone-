import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Feedback from './Feedback'
import  './ServiceNavigation.css'
import FindMyPro from './FindMyPro'
import FeedbackLast from './FeedbackLast'
import Footerf from '../../../Footer/Footerf'
import Triangle_Home from './Triangle_Home'
import './Triangle_home.css'
const ServiceNavigation = (props) => {
    console.log(props.datapop);
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <div className='serviceNavigation'>
            <Container>
                <div className="row ">
                    <Triangle_Home/>
                    <div className="col-md-7 ">
                        <Feedback but = {props.datapop}/>
                        <FeedbackLast/>
                    </div>
                    <div className="col-md-4 ">
                        <FindMyPro/>
                    </div>
                </div>
            </Container>
            <Footerf/>
        </div>
    )
}

export default ServiceNavigation
