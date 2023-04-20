
import { useAuth0 } from "@auth0/auth0-react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import "./ModelWishList.css"
export default function ModelWishList(props) {

    const { isAuthenticated, logout } = useAuth0();
// console.log("11111111111111111111111111111111",props.show)

    // console.log("11111111111111111111111111111111",props.show)
    const { isAuthenticated, logout } = useAuth0();

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

            props.getwishList();



            // props.getwishList();

        }
        // props.getwishList();
        return (
            <>
                {isAuthenticated && (<Modal show={props.show} onHide={props.handleClose} >
                    <Modal.Header style={{ width: "500px", background: "rgb(51, 46, 46)" , color:"rgb(104, 99, 99)" ,border: "rgb(22, 20, 20)"}} closeButton  >
                        <Modal.Title>{props.gameData.title}

                        </Modal.Title>
                    </Modal.Header  >
                    <img src={`${props.gameData.image}`} alt={props.gameData.title} className="card-img-top" style={{ width:500}}/>
                    <Modal.Body className="card mx-auto"  style={{ width: "500px", background: "rgb(22, 20, 20)", padding: "0px", border: "rgb(22, 20, 20)" }}  >
                        <Form style={{
                        background: "rgb(22, 20, 20)",border: "rgb(22, 20, 20)"

                    }}
                        >
                            <Row >
                                <Col>
                                    <Button style={{background:"rgb(51, 46, 46)", border:"rgb(22, 20, 20)", width:"100%",margin:"0 0 5% 0"}} onClick={()=>handleDelete(props.gameData.id)}>
                                        Remove From Wish List
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                        {/* <div className="x">{props.gameData.genre}</div> */}
                        {/* <div className="modal-description">{props.gameData.description}</div>
                        <div className="y">Release date : {props.gameData.release_date}</div> */}
                        <Button style={{background:"rgb(51, 46, 46)", border:"rgb(22, 20, 20)"}} href={props.gameData.game_url} size="lg" onClick={() => window.location.href = props.gameData.game_url}>
                            Download
                        </Button>
                    </Modal.Body>
                </Modal>)}
            </>
        )
    }

        props.getwishList();
    }
    // props.getwishList();
    return (
        <>
            {isAuthenticated && (<Modal show={props.show} onHide={props.handleClose} >
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
                                <Button className="btn    btn-btn-dark btn-hover btn-active mx-2 p-2" onClick={() => handleDelete(props.gameData.id)}>
                                    Remove From Wish List
                                </Button>
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

            </Modal>)}

        </>


    )
}

