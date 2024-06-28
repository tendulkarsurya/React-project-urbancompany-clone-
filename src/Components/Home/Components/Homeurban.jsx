import React from 'react'
import Homeleft from './Homeleft'
const Homeurban = () => {
    return (
        <div >
    
            <div className='row'>
                <div className='col-md-5 mt-4 '>
                    <Homeleft></Homeleft>
                </div>
                <div className='col-md-7 '>
                    <div className='rytimage m-4 mt-4'>
                        <img src="./Assets/Home_service1.jpg" alt="" height={600} width={600} />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Homeurban
