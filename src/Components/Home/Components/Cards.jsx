import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AOS from "aos";
import "aos/dist/aos.css";
import PopUPModel from "./PopUPModel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Cards = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className="cards pt-5" data-aos="fade-up">
      <h2>Our Services</h2>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlaySpeed={2000}
        autoPlay={true}
        keyBoardControl={true}
        customTransition=" all 1s linear "
        transitionDuration={1000}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div>
          <Card className="cardsl" >
            <Card.Img variant="top" src="../Assets/ac.webp" />
            <Card.Body className="cardBody">
              <Card.Title>AC Repair & Services</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
                culpa aperiam nam, maxime impedit nulla
              </Card.Text>
              <Button variant="primary"><PopUPModel/> </Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="cardsl" >
            <Card.Img variant="top" src="../Assets/pest.webp" />
            <Card.Body className="cardBody">
              <Card.Title>Pest Control Services</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
                culpa aperiam nam, maxime impedit nulla
              </Card.Text>
              <Button variant="primary"><PopUPModel/></Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="cardsl" >
            <Card.Img variant="top" src="../Assets/clean1.webp" />
            <Card.Body className="cardBody">
              <Card.Title>House Cleaning</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
                culpa aperiam nam, maxime impedit nulla
              </Card.Text>
              <Button variant="primary"><PopUPModel/></Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="cardsl" >
            <Card.Img variant="top" src="../Assets/paint.webp" />
            <Card.Body className="cardBody">
              <Card.Title>House Painting</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
                culpa aperiam nam, maxime impedit nulla
              </Card.Text>
              <Button variant="primary"><PopUPModel/></Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="cardsl" >
            <Card.Img variant="top" src="../Assets/homeint.jpg" />
            <Card.Body className="cardBody">
              <Card.Title>House Interior</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
                culpa aperiam nam, maxime impedit nulla
              </Card.Text>
              <Button variant="primary"><PopUPModel/></Button>
            </Card.Body>
          </Card>
        </div>
      </Carousel>
    </div>
  );
};

export default Cards;
