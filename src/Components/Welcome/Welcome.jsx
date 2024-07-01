import React from 'react'
import "../Welcome/Welcome.css"
import { BsEyeFill } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { useRef } from 'react';

const Welcome = () => {
    let main = useRef()


    function eyechange1() {

        let change = document.querySelectorAll('input')

        if (change[2].getAttribute('type') === 'password') {

            change[2].setAttribute('type', 'text')
        } else {
            change[2].setAttribute('type', 'password')
        }

    }
    function eyechange2() {

        let change = document.querySelectorAll('input')

        if (change[5].getAttribute('type') === 'password') {

            change[5].setAttribute('type', 'text')
        } else {
            change[5].setAttribute('type', 'password')
        }

    }

    function changeview(params) {
        main.current.style.transform = "rotateX(180deg)"

    }
    function changevieworg(params) {
        main.current.style.transform = "rotateX(0deg)"

    }
    return (
        <div className='main_welcome_page'>


            <div className='Mainpage' ref={main}>

                <div className='login'>
                    <h3 className='p-3'>
                        Log In
                    </h3>

                    <form action="">
                        <div className='userName'>
                            <FaRegUser />  <input type="text" placeholder='Enter UserName' required />
                        </div>
                        <div className='Password'>
                            <MdPassword /> <input type="password" placeholder='Enter Password' required />
                            <span className='eye'>
                                <BsEyeFill onClick={eyechange1} />
                            </span>
                        </div>

                        <div className='buttons_welcome'>
                            <button className='butn1'>Login</button>
                            <button onClick={changeview} className='butn2' type='button'>Register</button>
                        </div>
                    </form>

                </div>
                <div className='signup'>
                    <h3 className='p-3'>Sign Up</h3>

                    <form action="">

                        <div className='userName'>
                            <FaRegUser />  <input type="text" placeholder='Enter UserName' required />
                        </div>
                        <div className='Emain'>
                            <MdOutlineAlternateEmail />  <input type="email" placeholder='Enter Mail' required />
                        </div>
                        <div className='Password'>
                            <MdPassword /> <input type="password" placeholder='Enter Password' required />
                            <span className='eye'>
                                <BsEyeFill onClick={eyechange2} />
                            </span>
                        </div>

                        <div className='buttons_welcome'>
                            <button className='butn1'>Signup</button>
                            <button onClick={changevieworg} className='butn2' type='button'>Already Member</button>
                        </div>
                    </form>
                </div>

            </div>


        </div>
    )
}

export default Welcome