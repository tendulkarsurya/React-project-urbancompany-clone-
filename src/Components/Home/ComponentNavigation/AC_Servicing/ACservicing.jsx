import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import ACservicingLeft from './ACservicingLeft'
import ACservicingRight from './ACservicingRight'
import ACscroll1 from './ACscroll1'
import ACscroll2 from './ACscroll2'
import ACscroll3 from './ACscroll3'
import ACscroll4 from './ACscroll4'
import GasrefillScroll1 from './GasrefillScroll1'
import Gasrefillscroll2 from './Gasrefillscroll2'
import InstallScroll1 from './InstallScroll1'
import InstallScroll2 from './InstallScroll2'
import ACrightReview from './ACrightReview'
import Footerf from '../../../Footer/Footerf'
import Content from './Content'

const ACservicing = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  

  return (
    <div>
      <Container >
        <div className="row">
          <div className='col-md-3 pt-4 border'>
            <ACservicingLeft></ACservicingLeft>
          </div>
          <div className='col-md-9 p-2 border'>
            <ACservicingRight></ACservicingRight>
            <div className='row p-2 middleScroll'>
              <div className="col-md-7 p-3 tScroll border">
                {/* <ACscroll1></ACscroll1>
                <ACscroll2></ACscroll2>
                <hr />
                <ACscroll3></ACscroll3>
                <hr />
                <ACscroll4></ACscroll4>
                <hr />
                <GasrefillScroll1></GasrefillScroll1>
                <hr />
                <Gasrefillscroll2 />
                <hr />
                <InstallScroll1></InstallScroll1>
                <hr />
                <InstallScroll2 /> */}
                <Content/>
              </div>
              <div className="col-md-5 rightReviews ">
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

export default ACservicing
