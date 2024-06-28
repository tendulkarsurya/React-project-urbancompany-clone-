import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import BRservicingLeft from './BRservicingLeft'
import BRservicingRight from './BRservicingRight'
import BRscroll1 from './BRscroll1'
import BRscroll2 from './BRscroll2'
import GasrefillScroll1 from './GasrefillScroll1'
import ACrightReview from './ACrightReview'
import Footerf from '../../../Footer/Footerf'
import Brtp from './Brtp'
import Kc from './Kc'
import MiniSer from './MiniSer'
import '../ACscrolls.css'
const BathRoomServicing = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div>
      <Container >
        <div className="row">
          <div className='col-md-3 pt-4 border'>
            <BRservicingLeft />
          </div>
          <div className='col-md-9 p-2 border'>
            <BRservicingRight />
            <div className='row p-2 middleScroll'>
              <div className="col-md-7 p-3 tScroll border">
                <GasrefillScroll1 /><hr />
                <BRscroll2 /><hr />
                <BRscroll1 />
                <hr />
                <Brtp />
                <hr />
                <Kc />
                <hr />
                <MiniSer />
              </div>
              <div className="col-md-5 rightReviews">
                <ACrightReview />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footerf />
    </div>
  )
}

export default BathRoomServicing
