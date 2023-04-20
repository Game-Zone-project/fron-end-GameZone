import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useAuth0 } from "@auth0/auth0-react";
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
                //alert("successfuly Deleted !!");

                //console.log("data after deleting", props.getwishList());
            })
            .catch(err => {
                console.log(err)
            })
        window.location.reload(false); //refresh the page 
    }

    // async function UpdateHandler(event,id){
    //    //debugger
    //     event.preventDefault();
    //     console.log(id)
    //     let url = `${process.env.REACT_APP_GAMES_URL}/updateGames/${id}`;
    //     let data = {
    //         review: event.target.review.value
    //     }
    //     console.log(data);
    //     let response = await fetch(url, {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(data),
    //     })
    //     console.log("last")
    //     props.getGames();
    //     setreview(event.target.review.value)
    //     if (response.status === 200) {
    //         //props.getAllGame()
    //         //alert("Comment Updated successfully !!")

    //         //   sweetAlert({title:"successfuly Deleted !!",
    //         //   text: "Here's a custom image.",
    //         //     imageUrl: "images/thumbs-up.jpg"
    //         // });
    //     }
    // }
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
            {isAuthenticated && (<Modal show={props.show} onHide={props.handleClose}  >

                <Modal.Header style={{ width: "500px" }} closeButton  >
                    <Modal.Title>{props.gameData.title}

                    </Modal.Title>

                </Modal.Header  >

                <Modal.Body className="card mx-auto" style={{ width: "500px", background: "linear-gradient(to bottom right, #3A6073, #16222A)", padding: "0px" }}  >

                    <img src={`${props.gameData.image}`} alt={props.gameData.title} className="card-img-top" />
                    {/* onSubmit={(event) => UpdateHandler(event, movie.id)}  */}
                    <Form onSubmit={(event) => UpdateHandler(event, props.gameData.id)} style={{
                        background: "linear-gradient(to bottom right, #3A6073, #16222A)",
                    }}
                    >
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            < Form.Control name="review" as="textarea" rows={2} />
                        </Form.Group>
                        <Row >
                            <Col>
                                {/* <Button className="btn    btn-btn-dark btn-hover btn-active mx-1 p-2"
                                    type="submit"
                                    //  style={{ : "" }} 
                                    // onClick={(event) => submitHandler(event)}
                                >
                                    submit
                                </Button> */}
                            </Col>
                            <Col>
                                <Button
                                    className="btn btn-dark btn-hover btn-active mx-1 p-2"
                                    type="submit"
                                    style={{}}
                                >
                                    Update
                                </Button>
                            </Col>
                            <Col>
                                <Button
                                    className="btn btn-dark btn-hover btn-active mx-1 p-2"

                                    style={{}}
                                    onClick={() => deleteHandler(props.gameData.id)}>
                                    Delete
                                </Button>
                            </Col>
                        </Row>
                    </Form>



                    <div className="modal-description">{props.gameData.overview}</div>
                    {!review && <div className="modal-description">{props.gameData.review}</div>}
                    {/* conditions to return the review !! */}

                    {review && <div className="modal-description">{review}</div>}

                    <Button href={props.gameData.game_url} size="lg" onClick={() => window.location.href = props.gameData.game_url}>
                        Download
                    </Button>


                </Modal.Body>

            </Modal>)}
        </>
    )
}