import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';


export default function ModelLibraryCard(props){
 // three functions  /Submit/Delete/Update



 async function deleteHandler(id){
    //debugger
    let url=`${process.env.REACT_APP_GAMES_URL}/DELETE/${id}`
    console.log("first",url)
    let response  = await fetch(url,{
        method:"DELETE", 
        headers: {
            "Content-Type": "application/json",
        },
      })
     
      .then(result=>{
        console.log("result is",result)
        alert ("successfuly Deleted !!");
        props.getwishList();
        console.log("data after deleting",props.getwishList());
      })
      .catch(err=>{
        console.log(err)
      })
    }


    return(
       
        <>
       <Modal show={props.show} onHide={props.handleClose}  >
        
                <Modal.Header style={{ width: "500px" }} closeButton  >
                    <Modal.Title>{props.gameData.title}

                    </Modal.Title>

                </Modal.Header  >

                <Modal.Body className="card mx-auto" style={{ width: "500px", background: "linear-gradient(to bottom right, #3A6073, #16222A)", padding: "0px" }}  >

                    <img src={`${props.gameData.image}`} alt={props.gameData.title} className="card-img-top" />
                    <Form style={{
                        background: "linear-gradient(to bottom right, #3A6073, #16222A)",
                    }}
                    >
                         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Control name="comment" as="textarea" rows={2} />
                                    </Form.Group>
                        <Row >
                            <Col>
                                <Button className="btn    btn-btn-dark btn-hover btn-active mx-1 p-2"
                                 type="submit"
                                //  style={{ : "" }} 
                                 >
                                    submit
                                </Button>
                            </Col>
                            <Col>
                                <Button
                                    className="btn btn-dark btn-hover btn-active mx-1 p-2"
                                    type="submit"
                                    style={{  }} 
                                >
                                  Update
                                </Button>
                            </Col>
                            <Col>
                                <Button
                                    className="btn btn-dark btn-hover btn-active mx-1 p-2"
                                    type="submit"
                                    style={{  }} 
                                    onClick={() => deleteHandler(props.gameData.id)}
                                >
                                   Delete
                                </Button>
                            </Col>
                        </Row>
                    </Form>

                    

                    <div className="modal-description">{props.gameData.description}</div>

                   


                    <Button href={props.gameData.game_url} size="lg" onClick={() => window.location.href = props.gameData.game_url}>
                        Download
                    </Button>


                </Modal.Body>

            </Modal>
        </>
    )
}