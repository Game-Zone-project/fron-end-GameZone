
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';

export default function ModelWishList(props) {
// console.log("11111111111111111111111111111111",props.show)

    async function handleDelete(id) {
        // debugger
        let url = `${process.env.REACT_APP_GAMES_URL}/DELETEwishL/${id}`
        console.log(11111111, url)
        let response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },

        })
            .then(result => {
                // console.log("result is",result)
                alert("successfuly Deleted !!");
                props.getwishList()
                console.log("data after deleting");
                // props.getwishList()
            })
            .catch(err => {
                console.log(err)
            })

            // props.getwishList();
        }
        // props.getwishList();
        return (
            <>
                <Modal show={props.show} onHide={props.handleClose} >
                    <Modal.Header style={{ width: "500px" }} closeButton  >
                        <Modal.Title>{props.gameData.title}

                        </Modal.Title>

                    </Modal.Header  >
                    <img src={`${props.gameData.image}`} alt={props.gameData.title} className="card-img-top" />
                    <Modal.Body className="card mx-auto" style={{ width: "500px", background: "linear-gradient(to bottom right, #3A6073, #16222A)", padding: "0px" }}  >

                       
                        <Form style={{
                            background: "linear-gradient(to bottom right, #3A6073, #16222A)",
                        }}
                        >
                            <Row >
                                <Col>
                                <a href="#">
          <span className="glyphicon glyphicon-star"></span>
        </a>
                                    {/* <Button className="btn    btn-btn-dark btn-hover btn-active mx-2 p-2" onClick={()=>handleDelete(props.gameData.id)}> */}
                                    {/* <i style={"font-size:24px"} className='fas'>&#xf005;</i> */}
                                    {/* </Button> */}
                                </Col>
                            </Row>
                        </Form>

                        <div className="x">{props.gameData.genre}</div>

                        <div className="modal-description">{props.gameData.description}</div>

                        <div className="y">Release date : {props.gameData.release_date}</div>


                        <Button href={props.gameData.game_url} size="lg" onClick={() => window.location.href = props.gameData.game_url}>
                            Download
                        </Button>


                    </Modal.Body>

                </Modal>

            </>


        )
    }
