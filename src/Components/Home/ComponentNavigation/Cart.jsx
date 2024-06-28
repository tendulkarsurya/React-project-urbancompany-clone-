// import React, { useState } from 'react'

// const Cart = () => {

//     let [cartItems,setCartItems]=useState([]);

//     let addToCart=(item)=>{
//         setCartItems([...cartItems,item]);
//     }

//   return (
//     <div>
//       <h3>Cart</h3>
//       {cartItems.length === 0 ?(
//         <p>your cart is empty</p>
//       ):(
//         <ul>
//             {cartItems.map((item,index)=>{
//                 <li key={index}>{item.name}</li>
//             })}
//         </ul>
//       )}
//     </div>
//   )
// }

// export default Cart




import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { RiDiscountPercentFill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import '../ComponentNavigation/ACscrolls.css'
import { FaCreditCard } from "react-icons/fa";
import { PiBank } from "react-icons/pi";
import { FaCcAmazonPay } from "react-icons/fa";
import { SiPaychex, SiPayhip, SiPayoneer, SiPaytm, SiPhonepe } from 'react-icons/si';
import { Link } from "react-router-dom";




const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Container>
        <div className="row">
          <div className='col-md-5 m-3 cartDiv '>
            <div className='border p-3 m-2 account'>
              <p style={{ fontWeight: "600" }}>Account</p>
              <p>To book the service, please login or sign up</p>
              <a href="">
                <Link to='/welcome'>
                  <button className='loginbtn'>Login</button>
                </Link>
              </a>
            </div>
          </div>
          <div className='col-md-6 p-3 pt-0'>
            <div className='border p-3 m-2 textBorder'>
              <h4>Cart items</h4>
              <div className='increment'>
                <p> AC service</p>
                <div className='border valuesbtn mt-2'>
                  <button className='minus'><FaMinus /></button>
                  <p >1</p>
                  <button className='plus'><FaPlus /></button>
                </div>
                <p>₹999</p>
              </div>
            </div>
            <div className='border p-3 m-2 d-flex textBorder'>
              <div><RiDiscountPercentFill style={{ color: "green", height: "60px", width: "40px" }} /></div>
              <div>
                <ul className='cartOffer '>
                  <li>Coupons & offers</li>
                  <li>Login/signup to view offers</li>
                </ul>
              </div>
            </div>
            <div className='border p-3 m-2 textBorder'>
              <div><h6 style={{ fontWeight: "700" }}>Payment Summary</h6></div>
              <div className='paymentCost'>
                <div>
                  <p>Item total</p>
                  <p>Taxes and Fee</p>
                </div>
                <div>
                  <p>₹999</p>
                  <p>₹99</p>
                </div>
              </div> <hr />
              <div className='paymentCost' style={{ fontWeight: "700" }}>
                <p>Total</p>
                <p>₹1098</p>
              </div>
            </div>
            <div className='border p-3 m-2 textBorder'>
              <h5>Payment Options</h5>
              <ul className='payOptions'>
                <a href="" style={{ textDecoration: "none", color: "black" }}>
                  <li><FaCreditCard style={{ color: "#6CA41B", height: "20px", width: "20px" }} /> Debit/Credit card</li>
                </a>
                <a href="" style={{ textDecoration: "none", color: "black" }}>
                  <li><PiBank style={{ color: "blue", height: "20px", width: "20px" }} /> Net Banking</li>
                </a>
                <a href="" style={{ textDecoration: "none", color: "black" }}>
                  <li> <FaCcAmazonPay style={{ height: "20px", width: "20px" }} /> Amazon pay</li>
                </a>
                <a href="" style={{ textDecoration: "none", color: "black" }}>
                  
                  <li><SiPhonepe style={{ color: "#5B2398", height: "20px", width: "20px" }} /> UPI</li>
                </a>
              </ul>
              <div style={{ textAlign: "end" }}>
                <Link to='/OrderSummary'><button className='paybtn'>Pay</button></Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Cart

