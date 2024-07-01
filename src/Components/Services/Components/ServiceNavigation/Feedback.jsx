import React from 'react'
import { FaStar } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";
import { MdVerifiedUser } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'

const Feedback = (props) => {
    let data = props.but
    let navee = useNavigate()

    function chechers() {
        navee("/contactus")
    }
    return (
        <div>
            <div className='mt-2'>
                <h3>Top 10 exterminators</h3>
            </div>
            <div className='border mt-4 feedbackMain' style={{ borderRadius: "5px" }} >
                <div className='d-flex ' >
                    <div className='p-3 feedbackimg'>
                        <img src="./Assets/feedback.jpg" alt="" />
                    </div>
                    <div className='ps-4 pt-4 feedbackHead' style={{ lineHeight: "20px" }}>
                        <h5>Green Earth Pest Control Services</h5>
                        <p style={{ color: "#16A34A", fontWeight: "600" }}>Exceptional 4.9 <FaStar /> (783)</p>
                        <div className='feedbackPara' >
                            <p><MdVerifiedUser style={{ color: "green" }} /> 1344 home services completed</p>
                            <p> <TbTargetArrow style={{ color: "green" }} /> 12 Years In Business</p>
                            <p><FaLocationDot style={{ color: "green" }} /> Serves in Hyderabad</p>
                            <p className='custfeedback' >Pratyush Kashyap says, "excellent service ..."</p>
                        </div>
                    </div>
                </div>


                <footer className=' p-3' style={{ textAlign: "end", backgroundColor: "#EFF6FF", }}>
                    <button className='feedbackContact' onClick={chechers}  >Contact</button>
                </footer>
            </div>

            <div className='border mt-4 feedbackMain' style={{ borderRadius: "5px" }} >
                <div className='d-flex ' >
                    <div className='p-3 feedbackimg'>
                        <img src="./Assets/feedback3.jpg" alt="" />
                    </div>
                    <div className='ps-4 pt-4 feedbackHead' style={{ lineHeight: "20px" }}>
                        <h5>Sri Laxmi Enterprises</h5>
                        <p style={{ color: "#16A34A", fontWeight: "600" }}>Exceptional 4.4 <FaStar /> (132)</p>
                        <div className='feedbackPara' >
                            <p><MdVerifiedUser style={{ color: "green" }} /> 2845 home services completed</p>
                            <p> <TbTargetArrow style={{ color: "green" }} /> 6 Years In Business</p>
                            <p><FaLocationDot style={{ color: "green" }} /> Serves in Hyderabad</p>
                            <p className='custfeedback' >Ramya says, "over priced..." </p>
                        </div>
                    </div>
                </div>


                <footer className=' p-3' style={{ textAlign: "end", backgroundColor: "#EFF6FF", }}>
                    <button className='feedbackContact' onClick={chechers} >Contact</button>
                </footer>
            </div>

            <div className='border mt-4 feedbackMain' style={{ borderRadius: "5px" }} >
                <div className='d-flex ' >
                    <div className='p-3 feedbackimg'>
                        <img src="./Assets/feedback1.jpg" alt="" />
                    </div>
                    <div className='ps-4 pt-4 feedbackHead' style={{ lineHeight: "20px" }}>
                        <h5>Mishra Enterprises- Pune</h5>
                        <p style={{ color: "#16A34A", fontWeight: "600" }}>Exceptional 4.2 <FaStar /> (43)</p>
                        <div className='feedbackPara' >
                            <p><MdVerifiedUser style={{ color: "green" }} /> 1090 home services completed</p>
                            <p> <TbTargetArrow style={{ color: "green" }} /> 22 Years In Business</p>
                            <p><FaLocationDot style={{ color: "green" }} /> Serves in Pune</p>
                            <p className='custfeedback' >Amit Vishwa says, "Satisfied with service. He described the options nicely. The final renovated sofa is very comfortable..."</p>
                        </div>
                    </div>
                </div>


                <footer className=' p-3' style={{ textAlign: "end", backgroundColor: "#EFF6FF", }}>
                    <button className='feedbackContact' onClick={chechers} >Contact</button>
                </footer>
            </div>

            <div className='border mt-4 feedbackMain' style={{ borderRadius: "5px" }} >
                <div className='d-flex ' >
                    <div className='p-3 feedbackimg'>
                        <img src="./Assets/feedback5.jpg" alt="" />
                    </div>
                    <div className='ps-4 pt-4 feedbackHead' style={{ lineHeight: "20px" }}>
                        <h5> H2O Fitnesss Club</h5>
                        <p style={{ color: "#16A34A", fontWeight: "600" }}>Exceptional 5 <FaStar /> (7)</p>
                        <div className='feedbackPara' >
                            <p><MdVerifiedUser style={{ color: "green" }} /> 43 home services completed</p>
                            <p> <TbTargetArrow style={{ color: "green" }} /> 5 Years In Business</p>
                            <p><FaLocationDot style={{ color: "green" }} /> Serves in Pune</p>
                            <p className='custfeedback' >Vipul Tanvade says, "excellent service ..."</p>
                        </div>
                    </div>
                </div>


                <footer className=' p-3' style={{ textAlign: "end", backgroundColor: "#EFF6FF", }}>
                    <button className='feedbackContact' onClick={chechers} >Contact</button>
                </footer>
            </div>

            <div className='border mt-4 feedbackMain' style={{ borderRadius: "5px" }} >
                <div className='d-flex ' >
                    <div className='p-3 feedbackimg'>
                        <img src="./Assets/feedback4.jpg" alt="" />
                    </div>
                    <div className='ps-4 pt-4 feedbackHead' style={{ lineHeight: "20px" }}>
                        <h5>Tushar Electrical Works</h5>
                        <p style={{ color: "#16A34A", fontWeight: "600" }}>Exceptional 4.8 <FaStar /> (123)</p>
                        <div className='feedbackPara' >
                            <p><MdVerifiedUser style={{ color: "green" }} /> 1277 home services completed</p>
                            <p> <TbTargetArrow style={{ color: "green" }} /> 24 Years In Business</p>
                            <p><FaLocationDot style={{ color: "green" }} /> Serves in Mumbai</p>
                            <p className='custfeedback' >Rahul says, "Absolutely awesome and quick service, professional was very polite and did his job cleanly..."</p>
                        </div>
                    </div>
                </div>


                <footer className=' p-3' style={{ textAlign: "end", backgroundColor: "#EFF6FF", }}>
                    <button className='feedbackContact' onClick={chechers} >Contact</button>
                </footer>
            </div>

            <div className='border mt-4 feedbackMain' style={{ borderRadius: "5px" }} >
                <div className='d-flex ' >
                    <div className='p-3 feedbackimg'>
                        <img src="./Assets/feedback2.jpg" alt="" />
                    </div>
                    <div className='ps-4 pt-4 feedbackHead' style={{ lineHeight: "20px" }}>
                        <h5>Mahalaxmi Cleaning Services</h5>
                        <p style={{ color: "#16A34A", fontWeight: "600" }}>Exceptional 4.8 <FaStar /> (893)</p>
                        <div className='feedbackPara' >
                            <p><MdVerifiedUser style={{ color: "green" }} /> 9323 home services completed</p>
                            <p> <TbTargetArrow style={{ color: "green" }} /> 12 Years In Business</p>
                            <p><FaLocationDot style={{ color: "green" }} /> 8 Years In Business</p>
                            <p className='custfeedback' >Akhlak says, "It’s awesome service provided by Mahalaxmi cleaning services...."</p>
                        </div>
                    </div>
                </div>
                <footer className=' p-3' style={{ textAlign: "end", backgroundColor: "#EFF6FF", }}>
                    <button className='feedbackContact' onClick={chechers} >Contact</button>
                </footer>
            </div>

            <div className='border mt-4 feedbackMain' style={{ borderRadius: "5px" }} >
                <div className='d-flex ' >
                    <div className='p-3 feedbackimg'>
                        <img src="./Assets/feedback6.jpg" alt="" />
                    </div>
                    <div className='ps-4 pt-4 feedbackHead' style={{ lineHeight: "20px" }}>
                        <h5>Asteer Pet Boarding Centre</h5>
                        <p style={{ color: "#16A34A", fontWeight: "600" }}>Exceptional 5 <FaStar /> (8)</p>
                        <div className='feedbackPara' >
                            <p><MdVerifiedUser style={{ color: "green" }} /> 14 home services completed</p>
                            <p> <TbTargetArrow style={{ color: "green" }} /> 7 Years In Business</p>
                            <p><FaLocationDot style={{ color: "green" }} /> Serves in Bangalore</p>
                            <p className='custfeedback' >Adhesh says, "The Walker was on time they were very professional and the way they communicated was exceptional and they are sweet with the pets"</p>
                        </div>
                    </div>
                </div>


                <footer className=' p-3' style={{ textAlign: "end", backgroundColor: "#EFF6FF", }}>
                    <button className='feedbackContact' onClick={chechers} >Contact</button>
                </footer>
            </div>

        </div>
    )
}

export default Feedback
