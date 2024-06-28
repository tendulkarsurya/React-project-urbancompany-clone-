import React from 'react'
import { Container } from 'react-bootstrap'

const Queries = () => {
    return (
        <div className='Queries_Main '>
            <Container className='Queries_Sub'>
                <div className="col-md-5 overflow-hidden ">
                    <img className='Quer_img  ' src="../Assets/careus.jpg" alt="" />

                </div>
                <div className="col-md-7 Quer_body">
                    <p className='h3'>Have any queries</p>
                    <p className=''>Your opinion matters!! Tell us what you think.</p>
                    <p className=''>
                        TechEon is committed to helping people to make their life
                        easier. If you have any questions about our products or
                        services, please contact us on the phone number mentioned or
                        send us a message here. We're here to assist you!!
                    </p>
                </div>
            </Container>
        </div>
    )
}

export default Queries