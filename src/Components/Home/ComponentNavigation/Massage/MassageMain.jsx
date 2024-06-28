import React, { useEffect } from 'react'
import { Container } from "react-bootstrap"
import Footerf from "../../../Footer/Footerf"
import Left from "./Left";
import Right from "./Right";
import MainVideo from "./MainVideo";
import Content from './Content';
import '../ACscrolls.css'



const MassageMain = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
      },[])
    return (
        <div>
            <Container>
                <div className="row">
                    <div className="col-md-3 pt-4 border">
                        <Left />
                    </div>
                    <div className="col-md-9 p-2 border" >
                        <MainVideo />
                        <div className="row p-2 middleScroll" >
                            <div className="col-md-7 p-3 ROO  border" id='BestsellerPackages' >
                                <div >
                                    <p className="h2 ">Bestseller Packages</p>
                                    <p>
                                        {/* <MdOutlineStar /> 4.74 (2.2K){" "} */}
                                    </p>
                                </div>
                                <Content />
                            </div>
                            <div className="col-md-5 rightReviews">
                                <Right />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Footerf />

        </div>
    )
}

export default MassageMain