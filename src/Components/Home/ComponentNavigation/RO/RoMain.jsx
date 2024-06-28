import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Footerf from "../../../Footer/Footerf";
import Left from "./Left";
import MainVideo from "./MainVideo";
import Right from "./Right";
import Content from "./Content";
import '../ACscrolls.css'




const RoMain = () => {
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
                    <div className="col-md-9 p-2 border">
                        <MainVideo />
                        <div className="row p-2 middleScroll">
                            <div className="col-md-7 p-3 tScroll border" id="model">
                                <Content />

                            </div>
                            <div className="col-md-5 rightReviews ">
                                <Right />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Footerf />
        </div>
    );
};

export default RoMain;
