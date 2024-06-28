import React from 'react'
import { Container } from 'react-bootstrap'

const About_Vision = () => {
  return (
    <div>
       <div className='about_vision'>
                {/* <h2>OUR VISION</h2> */}
                <Container className='con'>
                    <div className='vision_container row-md-4 pt-3'>
                        <div className='vision_container_textarea col-md-6 '>
                            <div className='vision_text_div'>
                                <h5>OUR VISION</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laboriosam porro obcaecati quis, eligendi debitis sunt impedit assumenda ipsam ratione quas reprehenderit molestiae provident eveniet dolorum modi saepe? Totam, quod!
                                    Quis, fugit optio nulla praesentium placeat modi qui voluptatibus accusamus voluptates laudantium! Odit, est ipsa eum architecto voluptatum, debitis unde laboriosam cumque dolorum velit mollitia expedita? In veniam ratione nam.
                                    In ipsum omnis laborum quis ex molestias labore, aut architecto! Qui, saepe vero provident ex sint beatae, consectetur quidem ipsam eum doloremque dolores facilis! Eum consequatur omnis tempore beatae quidem?
                                    debitis quaerat error obcaecati aperiam in. Veniam et est nemo optio ipsa, harum commodi!</p>
                            </div>
                        </div>
                        <div className='vision_container_img col-md-5'>
                            <div className='vision_img_div'>
                                <img src="../Assets/our-vision-1.jpg" alt=" vision-image" />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
    </div>
  )
}

export default About_Vision
