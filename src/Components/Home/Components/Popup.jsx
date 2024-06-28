import { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { LiaSearchLocationSolid } from "react-icons/lia";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Data from "./PopupData";

function Popup() {
  const [isDesktop, setIsDesktop] = useState(true);



  const handleResize = () => {
    const width = window.innerWidth;
    if (width <= 799) {
      console.log('hai');
      setIsDesktop(false)
    } else {
      console.log('lol');
      setIsDesktop(true)

    }
  }


  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const values = "xl-down";
  const [show, setShow] = useState(isDesktop);


  let [search, changeSearch] = useState('')


  const filteredData = Data.filter((item) =>
    item.City.toLowerCase().includes(search.toLowerCase())
  );

  function textchange(e) {

    changeSearch(e.target.value)

  }

  return (
    <div className="popup_home_main">
      <Modal show={show} fullscreen={values} size="lg">
        <Modal.Header
          closeButton
          onClick={() => {
            setShow(false);
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
            <div class="model_flot_label">Where do you need ? </div>
            <div class="model_flot_search">
              <LiaSearchLocationSolid className="icon " />
              <input
                type="text"
                class="search_bar"
                required=""
                style={{ width: "100%" }}
                placeholder="Search for your city"
                onChange={textchange}
              />
            </div>
          </div>
          <div className="body">
            <div className="all_citys">
              <ol>
                {/* <li>
                  <img
                    className="list_icon"
                    src="../Assets/bangalore.png"
                    alt=""
                  />
                  Bangalore
                </li>
                <li>
                  <img
                    className="list_icon"
                    src="../Assets/chennai.avif"
                    alt=""
                  />
                  Chennai
                </li>
                <li>
                  <img
                    className="list_icon"
                    src="../Assets/hyderabad.png"
                    alt=""
                  />
                  Hyderabad
                </li>
                <li>
                  <img
                    className="list_icon"
                    src="../Assets/mumbai.avif"
                    alt=""
                  />
                  Mumbai
                </li>
                <li>
                  <img className="list_icon" src="../Assets/pune.png" alt="" />
                  Pune
                </li>
                <li>
                  <img
                    className="list_icon"
                    src="../Assets/delhi.avif"
                    alt=""
                  />
                  Delhi
                </li>
                <li>
                  <img
                    className="list_icon"
                    src="../Assets/ahmedabad.avif"
                    alt=""
                  />
                  Ahmedabad
                </li>
                <li>
                  <img
                    className="list_icon"
                    src="../Assets/kolkata.avif"
                    alt=""
                  />
                  Kolkata
                </li> */}
                {filteredData.map(item => (
                 <a href="" key={item} style={{textDecoration:"none",color:"black"}}>
                   <li >
                    <img src={item.logo} alt={item.City} />
                    {item.City}
                  </li>
                 </a>
                ))}
              </ol>

            </div>
            <div>

            </div>
          </div>
          <hr className="hr_model" />
          <div className="all_citys_body" >
            <h4 className="all_citys_body_h4">Other Citys</h4>
            <Container className="all_citys_body_container">
              <Row xs={1} md={4} className="row_res">
                <Col>Coimbatore</Col>
                <Col >Gurgaon</Col>
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
            </Container>

          </div>

        </Modal.Body>
      </Modal>
    </div >
  );
}

export default Popup;
