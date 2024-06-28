import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import '../ComponentNavigation/ACscrolls.css'
import { Link } from 'react-router-dom';


const RightNavigation = () => {

    let[count,setCount]=useState(0)

    let change=()=>{
        if (count > 0) {
            setCount(count - 1);
          }
    }
    let change1=()=>{
        setCount(count+1)
    }

    return (
        <div>
            <div>
                <h4>Cart</h4>
                <div className='increment'>
                    <p> AC service</p>
                    <div className='border valuesbtn'>
                        <button className='minus' onClick={change}><FaMinus /></button>
                        <p >{count}</p>
                        <button className='plus' onClick={change1}><FaPlus /></button>
                    </div>
                    <p >₹ <b>{999 * count }</b></p>
                </div><hr />
                <div>
                <Link to='/cart'><button className='viewCart'>View Cart</button></Link>
                    
                </div>
            </div>
        </div>
    )
}

export default RightNavigation
