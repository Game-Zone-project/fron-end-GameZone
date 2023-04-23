
import { useAuth0 } from "@auth0/auth0-react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
//import { useAuth0 } from "@auth0/auth0-react";
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import { useRef, useState } from 'react';

export default function ModelLibraryCard(props) {
    const { isAuthenticated, logout } = useAuth0();
    const reviewRef = useRef();
    const [review, setreview] = useState("");
    async function deleteHandler(id) {
        //debugger
        let url = `${process.env.REACT_APP_GAMES_URL}/DELETE/${id}`
        console.log("first", url)
        let response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(result => {
                console.log("result is", result)

                alert("successfuly Deleted !!");
                props.getlibraryGames();

            })
            .catch(err => {
                console.log(err)
            })
            window.location.reload(false); //refresh the page 
    }
    async function UpdateHandler(event, id) {
        event.preventDefault();
        console.log(id);
        let url = `${process.env.REACT_APP_GAMES_URL}/updateGames/${id}`;
        let data = {
          review: event.target.review.value,
        };
        console.log(data);
        let response = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        console.log("last");
       // props.getGames();
        setreview(event.target.review.value); // to update the review instance 
        if (response.status === 200) {
          // Update the review text on the user's screen
          const reviewElement = document.getElementById(`review-${id}`);
          if (reviewElement) {
            reviewElement.innerText = event.target.review.value;
          }
        }
      }
    return (
        <>
            {isAuthenticated && (<Modal show={props.show} onHide={props.handleClose} style={{color:"rgb(104, 99, 99)"}}  >
                <Modal.Header style={{ width: "500px", background: "rgb(51, 46, 46)" , color:"rgb(104, 99, 99)" ,border: "rgb(22, 20, 20)"}} closeButton  >
                    <Modal.Title style={{color:"rgb(104, 99, 99)"}}>{props.gameData.title}
                    </Modal.Title>
                </Modal.Header  >
                <Modal.Body className="card mx-auto" style={{ width: "500px", background: "rgb(22, 20, 20)", padding: "0px", border: "rgb(22, 20, 20)" }}  >
                    <img src={`${props.gameData.image}`} alt={props.gameData.title} className="card-img-top" />
                    {/* onSubmit={(event) => UpdateHandler(event, movie.id)}  */}
                    <Form onSubmit={(event) => UpdateHandler(event, props.gameData.id)} style={{

                        background: "rgb(22, 20, 20)",border: "rgb(22, 20, 20)"
                    }}
                    >
                    
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            < Form.Control name="review" as="textarea" class="mb-3"  rows={3} style={{ background: "rgb(52, 20, 20)",border: "rgb(22, 20, 20)",color:"rgb(255, 255, 255)",padding:"2%",margin:"0%"}} placeholder="Update your review:"  />

                        </Form.Group>
                    
                        <Row >
                            <div class="miviCont">
                            <Col>
                                <Button
                                    className="btn btn-dark btn-hover btn-active mx-1 p-2"

                                    type="submit"
                                    style={{padding:"0%",margin:"0%",width:"100%",background:"rgb(51, 46, 46)", border:"rgb(22, 20, 20)"}}
                                    onSubmit={(event) => UpdateHandler(event, props.gameData.id)}>
                                    Update
                                </Button>
                            </Col>
                            <Col>
                                <Button
                                    className="btn btn-dark btn-hover btn-active mx-1 p-2"

                                    style={{padding:"0%",margin:"0%",width:"97%",background:"rgb(51, 46, 46)", border:"rgb(22, 20, 20)"}}




                                    onClick={() => deleteHandler(props.gameData.id)}>
                                    Delete
                                </Button>
                            </Col>
                            </div>
                        </Row>
                    </Form>
                    <div className="modal-description" style={{padding:"0%",margin:"0%"}}>Your Review:</div>
                    {!review && <div className="modal-description" style={{padding:"0%",margin:"1%"}}>{props.gameData.review}</div>}
                    {/* conditions to return the review !! */}
                    {review && <div className="modal-description" style={{padding:"0%",margin:"2%"}}>{review}</div>}
                    <Button style={{background:"rgb(51, 46, 46)", border:"rgb(22, 20, 20)"}} href={props.gameData.game_url} size="lg" onClick={() => window.location.href = props.gameData.game_url}>
                        Download
                    </Button>
                </Modal.Body>
            </Modal>)}
        </>
    )
}