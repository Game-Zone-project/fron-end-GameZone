import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import { useRef } from 'react';


export default function ModelLibraryCard(props) {
    // three functions  /Submit/Delete/Update
    const reviewRef = useRef();

    function submitHandler(e) {
        e.preventDefault();
        let userReview = reviewRef.current.value;
        console.log("user Review is:", userReview);

        let newReview = { ...props.gameData, userReview }
        console.log(newReview);

        props.revHandler(newReview, newReview.id)
    }


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
           
    }
   
    async function UpdateHandler(event, id) {

        event.preventDefault();
        console.log(id)

        let url = `${process.env.REACT_APP_GAMES_URL}/updateGames/${id}`;
        let userReview = reviewRef.current.value;
        // let data = {
        //     review: event.target.review.value
        // }
        // console.log("updated data is",data);
        let response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({review: userReview}),
        })
          console.log("response is",response)
          console.log("user review is",userReview)
        // props.getAllGame()
        if (response.status === 200) {
            props.getlibraryGames()
            alert("Review Updated successfully !!")
        }
    }




    return (

        <>
            <Modal show={props.show} onHide={props.handleClose}  >

                <Modal.Header style={{ width: "500px" }} closeButton  >
                    <Modal.Title>{props.gameData.title}

                    </Modal.Title>

                </Modal.Header  >

                <Modal.Body className="card mx-auto" style={{ width: "500px", background: "linear-gradient(to bottom right, #3A6073, #16222A)", padding: "0px" }}  >

                    <img src={`${props.gameData.image}`} alt={props.gameData.title} className="card-img-top" />
                    {/* onSubmit={(event) => UpdateHandler(event, movie.id)}  */}
                    <Form style={{
                        background: "linear-gradient(to bottom right, #3A6073, #16222A)",
                    }}
                    >
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control name="comment" as="textarea" rows={2} ref={reviewRef} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={(e) => submitHandler(e)}>
                            Submit
                        </Button>
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

                                    style={{}}
                                    onClick={(event)=>UpdateHandler (event, props.gameData.id)}>
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
                    <div className="modal-description">{props.gameData.review}</div>




                    <Button href={props.gameData.game_url} size="lg" onClick={() => window.location.href = props.gameData.game_url}>
                        Download
                    </Button>


                </Modal.Body>

            </Modal>
        </>
    )
}