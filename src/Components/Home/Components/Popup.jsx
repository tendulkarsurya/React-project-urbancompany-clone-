import { useEffect, useState } from "react";

import Modal from "react-bootstrap/Modal";
import { LiaSearchLocationSolid } from "react-icons/lia";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import DataLocation from "./DataLocation.jsx";
import Cityname from "./Cityname.jsx";
import MobilePopUp from "./MobilePopUp.jsx";


function Popup(props) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [cityname, allcityname] = useState([]);
  const [button, changebutton] = useState(false);
  const [popupshow, setpopupshow] = useState(false);
  const [search, changeSearch] = useState("");
  const values = "xl-down";
  let serpop = props.data1
  const handleResize = () => {
    const width = window.innerWidth;
    if (width <= 799) {
      setIsDesktop(false);
      changebutton(true);
    } else {
      changebutton(false);

      setIsDesktop(true);
    }
  };
  console.log(serpop);

  // if (serpop) {
  //   setIsDesktop(false)
  // }else{
  //   setIsDesktop(true)
  // }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    // return () => window.removeEventListener("resize", handleResize);
  }, []);

  function foucsechange(e) {
    let disableview = document.getElementById("view-disable-main");
    let show = document.getElementById("showneed");

    const width = window.innerWidth;
    if (width >= 799) {
      if (disableview.style.display === "none") {
        disableview.style.display = "block";
      } else {
        disableview.style.display = "none";
      }
    }

    if (show.style.display === "block") {
      show.style.display = "none";
    } else {
      show.style.display = "block";
    }
  }

  function textchange(e) {
    changeSearch(e.target.value);

    allcityname(
      Cityname.filter((city) =>
        city.toLowerCase().includes(search.toLowerCase())
      ))

  }

  function foucsechangelol(e) {
    // setTimeout(() => {
    //   e.target.value = "";
    // }, 500);
  }

  function searchpopup(params) {
    if (popupshow === false) {
      setpopupshow(true)
    } else {
      setpopupshow(false)
    }

    console.log(55);
    console.log(popupshow);
    console.log(55);
  }

  return (
    <div className="popup_home_main">
      <div className="text-center fixed-bottom class-button-fixed p-2 bg-white ">
        {button && <button className="btn btn-primary text-center mobile-view-button " onClick={searchpopup}>Select your location</button>}
        {popupshow && <MobilePopUp data={popupshow} />}
      </div>
      <Modal show={isDesktop} fullscreen={values} size="lg">
        <Modal.Header
          closeButton
          onClick={() => {

            setIsDesktop(false);
          }}
        >
          <Modal.Title>
            <img
              src="../Assets/logo.png"
              style={{ height: "50px", borderRadius: "8px" }}
              alt=""
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="header">
            <div class="model_flot_label">Where do you need Service ? </div>
            <div class="model_flot_search">
              <LiaSearchLocationSolid className="icon " />
              <input
                type="text"
                class="search_bar"
                required=""
                style={{ width: "100%" }}
                placeholder="Search for your city"
                onKeyDown={textchange}
                onFocusCapture={foucsechange}
                onBlur={(e) => {
                  foucsechange(e);
                  foucsechangelol(e);
                }}
              />
            </div>
          </div>
          <div id="view-disable-main">
            <div className="body">
              <div className="all_citys ">
                <ol>
                  {DataLocation.map((item) => (
                    <a
                      href="/"
                      className="disable-view"
                      key={item}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <li id="search-city " className="search-city  ">
                        <img
                          className="list_icon "
                          src={item.logo}
                          alt={item.City}
                        />
                        {item.City}
                      </li>
                    </a>
                  ))}
                </ol>
              </div>
            </div>

            <hr className="hr_model " />
            <div className="all_citys_body ">
              <h4 className="all_citys_body_h4">Other Citys</h4>
              <Container className="all_citys_body_container " id="citysall">
                <a href="" className="text-decoration-none text-black ">
                  <Row xs={1} md={4} className="row_res">
                    <Col>Coimbatore</Col>
                    <Col>Gurgaon</Col>
                    <Col>Jaipur</Col>
                    <Col>Kochi</Col>
                  </Row>

                  <Row xs={1} md={4} className="row_res">
                    <Col>Lucknow</Col>
                    <Col>Madurai</Col>
                    <Col>Mysore</Col>
                    <Col>Noida</Col>
                  </Row>
                  <Row xs={1} md={4} className="row_res">
                    <Col>Trivandrum</Col>
                    <Col>Warangal</Col>
                    <Col>Tirupati</Col>
                    <Col>Vijaywada</Col>
                  </Row>
                  <Row xs={1} md={4} className="row_res">
                    <Col>Visakhapatnam</Col>
                    <Col>Bhubaneswar</Col>
                  </Row>
                </a>
              </Container>
            </div>
          </div>
          <div className="text-center" id="showneed">
            <ol className="list-unstyled d-flex flex-column ">
              {cityname.map((items) => (
                <a
                  href="/"
                  key={items.id}
                  className="text-decoration-none text-black "
                  style={{ cursor: "pointer" }}
                >
                  <li className="border p-1 m-2">{items.toUpperCase()} </li>
                </a>
              ))}
            </ol>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Popup;
