import React, { useRef, useEffect, useState } from "react";
import "./from.css";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const phoneRef = useRef(null)
  const messageRef = useRef(null)

  useEffect(() => {
    AOS.init({ duration: "900" });
  }, [])

  const sendMessage = () => {
    if (name === '') {
      nameRef.current.style.display = 'block';
    }
    else if (email === '') {
      emailRef.current.style.display = 'block'
    }
    else if (phone === '') {
      phoneRef.current.style.display = 'block'
    }
    else if (message === '') {
      messageRef.current.style.display = 'block'
    }
    else {
      alert('message sent....')
    }
  }

  return (
    <div className="p-2">
      <div className="contactus row " data-aos='fade-up'>
        <div className="left col-md-7 border p-3 m-3">
          <h3>Stay In Touch</h3>
          <br />
          <label htmlFor="">Full Name</label>
          <input type="text" name="" id="" placeholder="Enter full name" value={name} onChange={(e) => {
            setName(e.target.value)
            if (e.target.value !== '') {
              nameRef.current.style.display = 'none'
            }
          }} />
          <span className="errmsg" ref={nameRef} >Enter valid name</span>
          <br />
          <label htmlFor="">Email Address</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (e.target.value !== '') {
                emailRef.current.style.display = 'none'
              }
            }}
          />
          <span className="errmsg" ref={emailRef}>Enter valid email</span>
          <br />
          <label htmlFor="">Enter Phone Number</label>
          <input type="text" name="" id="" placeholder="Phone Number"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.phone)
              if (e.target.value !== '') {
                phoneRef.current.style.display = 'none'
              }
            }}
          />
          <span className="errmsg" ref={phoneRef}>Enter valid phone number</span>
          <br />
          <label htmlFor="">Message</label>
          <textarea name="" id="" placeholder="Enter Message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value)
              if (e.target.value !== '') {
                messageRef.current.style.display = 'none'
              }
            }}
          ></textarea>
          <span className="errmsg" ref={messageRef}>Enter valid message</span>
          <button type="button" class="btn btn-primary submitBtn" onClick={sendMessage}>
            Submit
          </button>
        </div>
        <div className="right col-md-4 pt-2">
          <div className="contactdetails" data-aos='fade-up'>
            <IoLocationOutline />
            <div >
              <h5>Address</h5>
              <p>
                TechEon Online Services Pvt Ltd,
                xyz, A, MVR XYZ Building,
                2nd Floor, xyz Layout, Horamavu Main Road,
                Bangalore - 560043
              </p>
            </div>

          </div>

          <div className="contactdetails" data-aos='fade-up'>
            <MdOutlineMailOutline />
            <div>
              <h5>Email Us</h5>
              <p>
                TechEoncontact@xyz.com
              </p>
            </div>

          </div>

          <div className="contactdetails" data-aos='fade-up'>
            <IoCallOutline />
            <div>
              <h5>Call Us</h5>
              <p>
              987-6543-210
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
