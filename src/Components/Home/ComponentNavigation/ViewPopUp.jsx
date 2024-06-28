import { useState } from "react";
import { MdStars } from "react-icons/md";
import Modal from "react-bootstrap/Modal";
import { AiFillStar } from "react-icons/ai";
import "./ViewPopUp.css"

function ViewPopUp() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <p onClick={handleShow} style={{
                cursor: 'pointer', fontWeight: 600, fontSize:"16px",color: "blueviolet"
            }} >   View Details </p>



            < Modal show={show} onHide={handleClose} size="md" scrollable='true' >
                <Modal.Header closeButton>
                    <Modal.Title>View More </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div>
                            <h5>Our Products </h5>
                            <p  > <MdStars style={{ fill: "green" }} /> <b>4.8</b> (12K reviews)</p>
                        </div>
                        <hr />
                        <div className="container-box-products-main ">
                            <div className=" container-box-products ">
                                <div className="inside_box">
                                    <p className="h6">  Product 1 </p>
                                    <p  > <AiFillStar style={{ fill: "orange" }} /> <b>4.8</b> (12K reviews)</p>
                                    <p> ₹ <b><s>1599</s> {' '}799</b> Only</p>
                                    <div className="text-center">
                                        <button className="inside_box_but" >Add</button>
                                    </div>
                                </div>
                                <div className="inside_box">
                                    <p className="h6"> Product 2 </p>
                                    <p  > <AiFillStar style={{ fill: "orange" }} /> <b>4.8</b> (12K reviews)</p>
                                    <p> ₹ <b><s>2500</s> {' '}1499</b> Only</p>
                                    <div className="text-center">
                                        <button className="inside_box_but">Add</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <hr />

                        <div className="img_view_pop" >

                            <img className="img_view_pop_pic" src="/Assets/viewpop1.webp" alt="" />
                            <img className="img_view_pop_pic" src="/Assets/viewpop2.webp" alt="" />
                            <img className="img_view_pop_pic" src="/Assets/viewpop3.webp" alt="" />
                            <img className="img_view_pop_pic" src="/Assets/viewpop4.webp" alt="" />
                            <img className="img_view_pop_pic" src="/Assets/viewpop5.webp" alt="" />
                            <img className="img_view_pop_pic" src="/Assets/viewpop6.webp" alt="" />


                        </div>
                    </div>

                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Add to Cart
                    </Button>
                 </Modal.Footer> */}
            </Modal >
        </>
    );
}

export default ViewPopUp;
