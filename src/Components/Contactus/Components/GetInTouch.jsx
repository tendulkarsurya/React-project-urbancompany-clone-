import React from 'react'
import { Container } from 'react-bootstrap'
import { SiGitconnected } from "react-icons/si";


const GetInTouch = () => {
    return (
        <div className='hearder_main_contactus p-2'>
            <Container className='hearder_sub_main_con'>
                <h1>Stay in Touch</h1>
                <SiGitconnected className='con_ico' />
                <p>Have any questions? Reach out to us from our contact form and we will get back to you shortly.</p>
            </Container>
        </div>
    )
}

export default GetInTouch