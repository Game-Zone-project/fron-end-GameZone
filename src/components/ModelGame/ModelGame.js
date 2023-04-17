
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import './ModelGame.css'

export default function ModelGame(props) {

    return (
        <>
            <Modal show={props.show} onHide={props.handleClose} >
                <Modal.Header style={{ width: "500px" }} closeButton  >
                    <Modal.Title>{props.gameData.title}</Modal.Title>
                </Modal.Header  >
                <Modal.Body className="card mx-auto" style={{ width: "500px", background: "linear-gradient(to bottom right, #3A6073, #16222A)", padding: "0px" }}  >

                    <img src={`${props.gameData.thumbnail}`} alt={props.gameData.title} className="card-img-top" />
                    <Form style={{
                        background: "linear-gradient(to bottom right, #3A6073, #16222A)",
                    }}
                    >
                        <Row >
                            <Col>
                                <Button className="btn    btn-btn-dark btn-hover btn-active mx-2 p-2" type="submit">
                                    Add to my library
                                </Button>
                            </Col>
                            <Col>
                                <Button
                                    className="btn btn-dark btn-hover btn-active mx-2 p-2"
                                    type="submit"
                                    style={{ float: "right" }}
                                >
                                    Add to my Wishlist
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer >
                    <Button onClick={props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

