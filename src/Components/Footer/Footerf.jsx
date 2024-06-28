import React from 'react'
import './Footer.css'
import { Container } from 'react-bootstrap'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from 'react-router-dom';



const Footerf = () => {
    return (
        <div className='footer'>
            <Container>
                <div className='footer_container'>
                    <div className='footer_about'>
                        <div>
                            <h3>About TechEon</h3>
                            <p>TechEon, the leading home services market network, connects homeowners with quality home improvement,
                                repair and maintenance professionals to take care of all your home service needs.</p>
                        </div>
                        <div>
                            <ol className='footer_ol'>
                                <li >
                                    <a href="#"><FaXTwitter className='social_icons' id='twitter' /></a>
                                </li>
                                <li><a href="#"><FaFacebookSquare className='social_icons' id='facebook' /></a></li>
                                <li>
                                    <a href="#"><FaInstagram className='social_icons' id='insta' /></a>
                                </li>
                                <li>
                                    <a href="#"><IoLogoYoutube className='social_icons' id='youtube' /></a>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className='footer_quick'>
                        <div>
                            <h3>Quick Links</h3>
                        </div>
                        <div>
                            <ol className='footer_quick_ol'>
                                <li className='quick_listss'><Link className='Link_remove_footer' to='/' >Home</Link></li>
                                <li className='quick_listss'><Link className='Link_remove_footer' to='/about' >About Us</Link></li>
                                <li className='quick_listss'><Link className='Link_remove_footer' to='/services' >Services</Link></li>
                                <li className='quick_listss'><Link className='Link_remove_footer' to='/contactus' >Contact Us</Link></li>
                            </ol>
                        </div>
                    </div>
                    <div className='footer_more'>
                        <div>
                            <h3>Learn more</h3>
                        </div>
                        <div>
                            <ul className='more_ul'>
                                <li className='quick_listss'>
                                    <a href="#">Designs</a>
                                </li>
                                <li className='quick_listss'>
                                    <a href="#">Reviews</a>
                                </li>
                                <li className='quick_listss'>
                                    <a href="#">Privacy policy</a>
                                </li>
                                <li className='quick_listss'>
                                    <a href="#">Professinals</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer_contact'>
                        <h3>Contact Details</h3>
                        <p>TechEon123@gmail.com</p>
                        <p>9876543210</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footerf
