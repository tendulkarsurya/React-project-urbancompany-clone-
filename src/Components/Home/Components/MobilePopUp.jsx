import React from 'react'
import { useState } from 'react';
import { useTypewriter } from 'react-simple-typewriter'
import Modal from 'react-bootstrap/Modal';
import { MdLocationSearching } from "react-icons/md";

import Cityname from './Cityname';


const MobilePopUp = (props) => {
    console.log(props.data);
    const [show, setShow] = useState(props.data);
    const [cityname, setcityname] = useState(Cityname)
    const [val, setval] = useState("")
    const handleClose = () => setShow(false);

    const [textvalue] = useTypewriter({
        words: Cityname,
        deleteSpeed: 35,
        typeSpeed: 45,
        loop: true
    })

    function searchActive(e) {
        setval(e.target.value)
        setcityname(Cityname.filter((city) =>
            city.toLowerCase().includes(val.toLowerCase())
        ))
    }


    return (
        <>


            <Modal show={show}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Search your place</Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <div class="model_flot_search">
                        <img src='/Assets/location.gif' className=" m-1 icon " />
                        <input
                            type="text"
                            class="search_bar"
                            required=""
                            style={{ width: "100%" }}
                            placeholder={textvalue}
                            // onKeyDown={textchange}
                            // onFocusCapture={foucsechange}
                            autoFocus
                            onBlur={(e) => {
                                //   foucsechange(e);
                                //   foucsechangelol(e);
                            }}
                            onChange={searchActive}
                        />


                    </div>
                    <hr className='m-0' />
                    <div className='d-flex flex-column cityname-div text-start  ' >
                        {cityname.map((items) => (
                            <a href="" className=" text-uppercase p-1 text-decoration-none text-black" key={items.id}> {items}</a>
                        ))}
                    </div>
                    <hr className='m-0' />


                </Modal.Body>
                {/* <Modal.Footer>
          
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer> */}
            </Modal>
        </>
    )
}

export default MobilePopUp