import React from 'react'
import ACscroll2 from './ACscroll2'
import ACscroll3 from './ACscroll3'
import ACscroll4 from './ACscroll4'
import GasrefillScroll1 from './GasrefillScroll1'
import Gasrefillscroll2 from './Gasrefillscroll2'
import InstallScroll1 from './InstallScroll1'
import InstallScroll2 from './InstallScroll2'

const Content = () => {
  return (
    <div>
        <ACscroll2/><hr />
        <ACscroll3/><hr />
        <ACscroll4/><hr />
        <GasrefillScroll1/><hr />
        <Gasrefillscroll2/><hr />
        <InstallScroll1/><hr />
        <InstallScroll2/>
    </div>
  )
}

export default Content



// import React from 'react'
// import { MdStars } from "react-icons/md";
// import "./../content.css"


// import Data from '../Data'
// const Content = () => {
//     return (
//         <div className='Main_Content_Container'>
//             {Data.ACserviceData.map((product) => (

//                 <div key={product.id} className='Product-Main-Container border p-2 mt-2 '>
//                     <div className='Product-left-container '>
//                         <p className='h3 '> {product.name} </p>
//                         <p className='m-0'><MdStars className='Product_icon_rating' /> {product.rating}  </p>
//                         <p className='m-0'> <b> ₹ {product.price} </b> </p>

//                         <hr className='hrw' />
//                         <div className='Product-left-container_details m-0' >
//                             <p className='h6 m-0 '>Details : </p>
//                             <ol className='list_style-' style={{ listStyle: 'circle', fontSize: '13px' }}>
//                                 <li> {product.details[0].data1} </li>
//                                 <li> {product.details[0].data2} </li>
//                             </ol>
//                         </div>


//                     </div>
//                     <div className='Product-right-container'>
//                         <img src={product.img} className='img_all' height={120} width={130} alt="" />
//                         <button className='right-container-but'>Add to Cart</button>
//                     </div>

//                 </div>
//             ))}

//         </div>
//     )
// }

// export default Content