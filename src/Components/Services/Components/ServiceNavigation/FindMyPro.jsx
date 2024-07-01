import React from 'react'

const FindMyPro = () => {
  return (
    <div className='p-3 findMyPro_Stick '>
      <div className='border p-3' style={{borderRadius:"5px"}}>
        <h5>Where do you need Pest Exterminators?</h5> <hr />
        <p>Give us a few details and we can match you</p>
        <input className='border' type="text" placeholder='Select city'  style={{width:"100%"}}/>
        <button className='findMyProbtn'>Find My Pro</button>
        <p>Or call us at : 9876-543-210</p>
      </div>
    </div>
  )
}

export default FindMyPro
