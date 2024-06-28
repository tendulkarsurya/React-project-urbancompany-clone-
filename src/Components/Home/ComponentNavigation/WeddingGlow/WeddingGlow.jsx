import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import WeddingGlowLeft from './WeddingGlowLeft'
import WeddingGlowRight from './WeddingGlowRight'
import WeddingReview from './WeddingReview'
import Footerf from '../../../Footer/Footerf'
import Content from './Content'


const WeddingGlow = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div className='navigationSlide'>
      <Container>
        <div className="row">
          <div className='col-md-3 pt-4  border'>
            <WeddingGlowLeft></WeddingGlowLeft>
          </div>
          <div className='col-md-9 p-2 border'>
            <WeddingGlowRight></WeddingGlowRight>
            <div className="row p-2 middleScroll">
              <div className="col-md-7 p-3 tScroll border">
                
                <Content/>
              </div>
              <div className="col-md-5 rightReviews ">
                <WeddingReview/>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footerf/>
    </div>
  )
}

export default WeddingGlow
