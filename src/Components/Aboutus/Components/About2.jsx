import React, { useEffect } from "react";
import "./about2.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LuStamp } from "react-icons/lu";
import { GoDiscussionClosed } from "react-icons/go";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container } from "react-bootstrap";

function About() {
  useEffect(() => {
    AOS.init({ duration: "900" });
  }, [])
  return (
    <div>

      <div className="aboutContent" data-aos='fade-up'>
        <div className="innerDiv1">
          <h3>Who we are</h3>
          <p>
            At <b>TechEon</b>, we are passionate about bringing quality home
            appliances to households, enhancing comfort, convenience, and
            efficiency in everyday living. With years of experience and a
            commitment to excellence, we've established ourselves as a trusted
            name in the industry. At TechEon, we're not just selling appliances;
            we're helping you create a home that you love, where every moment is
            made better by the appliances you choose. Join us on this journey to
            elevate your living space and experience the difference that quality
            appliances can make. Whether you're facing a minor inconvenience or
            a major appliance malfunction, you can count on us to deliver
            prompt, reliable repairs that restore your appliance to its full
            functionality.
            <br />
            Our Vision: Empower millions of professionals worldwide to deliver
            services at home like never experienced before
          </p>
          <br />
          <div className="achivements">
            <div className="d-flex gap-5 ">

              <div className="d-flex flex-column align-items-start ">
                <h2>45,000+</h2>
                <p>Trained Professionals</p>
              </div>
              <div className="d-flex flex-column align-items-center ">
                <h2>60</h2>
                <p>Cities </p>
              </div>

            </div>
            <div className="d-flex gap-5  " >
              <div className="d-flex flex-column align-items-start ">
                <h2>10 Million+</h2>
                <p>Happy Cusomers</p>
              </div>
              <div className="d-flex flex-column align-items-center " id="countries">
                <h2>3</h2>
                <p>Countries</p>
              </div>
            </div>


          </div>
        </div>



        <div className="innerDiv1" data-aos='fade-up'>
          <h3>How we do it</h3>
          <p>
            At <b>TechEon</b>, we start by listening to you. Whether you're in the market for a new appliance or seeking repair services, our first step is to understand your unique needs, preferences, and challenges. We take the time to listen to your concerns, answer your questions, and provide personalized recommendations tailored to your specific requirements.
          </p>
        </div>
        <br />
        <Container>
          <div className="container-fluid about-us-cont " data-aos='fade-up'>
            <div className="row">
              <div className="col-md-6">
                <h2 className="whychooseus">Why Choose TechEon ?</h2>
                <p className="para">With TechEon you will find the best Professionals in the area, whatever your need.</p>
                <div className="bragSection">
                  <div className="left">
                    <span className="stamp mt-1" data-aos='flip-up'><LuStamp className="stampIcon" /></span>
                    <div className="vline">
                    </div>
                  </div>
                  <div className="right mt-1">
                    <h5>Verified & vetted professionals</h5>
                    <p>Get service from trusted and verified partner with professional skills.</p>
                  </div>
                </div>
                <div className="bragSection">
                  <div className="left">
                    <span className="stamp" id="stamp2" data-aos='flip-up'><IoCheckmarkDoneSharp className="stampIcon" /></span>
                    <div className="vline">
                    </div>
                  </div>
                  <div className="right">
                    <h5>Matched to your needs accordingly.</h5>
                    <p className="m-0">Avail tailored, service-specific options according to your precise needs.</p>
                  </div>
                </div>
                <div className="bragSection">
                  <div className="left">
                    <span className="stamp" id="stamp2" data-aos='flip-up'><GoDiscussionClosed className="stampIcon" /></span>
                    <div className="vline" style={{ visibility: 'hidden' }}>
                    </div>
                  </div>
                  <div className="right">
                    <h5>Customer support at every step.</h5>
                    <p>Get service from trusted and verified partner with professional skills.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 ">
                <img src="./Assets/ab.jpg" alt="" srcset="" className="findExpert" />
                <div className="lowerBox" data-aos='flip-up'>
                  <div>
                    <h3 style={{ fontWeight: '700' }}>8M+</h3>
                    <p>Completed Project</p>
                  </div>
                  <div>
                    <h3 style={{ fontWeight: '700' }}>4M+</h3>
                    <p>Happy Customer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        {/* <Counter data-aos='fade-up' /> */}
      </div>

    </div>
  );
}

export default About;
