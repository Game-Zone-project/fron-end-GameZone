
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import './ModelGame.css'

export default function ModelGame(props) {

     async function addToLibraryHandler(e){
        e.preventDefault();
        let url = `${process.env.REACT_APP_GAMES_URL}/addGame`
        //  [title, genre, image, review, rating, release_date, game_URL]
         console.log(url)
        let data={
            title:props.gameData.title, 
            genre:props.gameData.genre, 
            image:props.gameData.thumbnail, 
            release_date:props.gameData.release_date,
            game_URL:props.gameData.game_url
        }
        console.log("Game is", data)
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        console.log("after")
        if (response.status === 201) {
            alert("sucessfully added to database !")
        }
        // const recivedData = await response.json();
        // console.log(55555,recivedData)
       
    }

    async function addToWishListHandler(e) {
        e.preventDefault();
        let url = `${process.env.REACT_APP_GAMES_URL}/addWishList`
        //  [title, genre, image, review, rating, release_date, game_URL]
        console.log(url)
        let data = {
            title: props.gameData.title,
            genre: props.gameData.genre,
            image: props.gameData.thumbnail,
            review: props.gameData.review,
            rating: props.gameData.rating,
            release_date: props.gameData.release_date,
            game_URL: props.gameData.game_url
        }
        console.log("data is", data)
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),

        })
        console.log('response is', response)

        const recivedData = await response.json();
        console.log(66666, recivedData)


    }
    console.log(props.gameData.overview)


    return (
        <>
            <Modal show={props.show} onHide={props.handleClose} style={{color:"rgb(104, 99, 99)"}} >
                <Modal.Header style={{ width: "500px", background: "rgb(51, 46, 46)" , color:"rgb(104, 99, 99)" ,border: "rgb(22, 20, 20)"}} closeButton  >
                    <Modal.Title style={{color:"rgb(104, 99, 99)"}}>{props.gameData.title}

                    </Modal.Title>

                </Modal.Header  >

                <Modal.Body className="card mx-auto" style={{ width: "500px", background: "rgb(22, 20, 20)", padding: "0px", border: "rgb(22, 20, 20)" }}  >

                    <img class="card-img-top" src={`${props.gameData.thumbnail}`} alt={props.gameData.title}  />
                    <Form style={{
                        background: "rgb(22, 20, 20)",border: "rgb(22, 20, 20)"
                    }}
                    >
                        <Row >
                            <Col>
                                <Button style={{background:"rgb(51, 46, 46)", border:"rgb(22, 20, 20)"}} className="btn    btn-btn-dark btn-hover btn-active mx-2 p-2" type="submit" onClick={(e)=>addToLibraryHandler(e)}>
                                    Add to my library
                                </Button>
                            </Col>
                            <Col>
                                <Button
                                    className="btn btn-dark btn-hover btn-active mx-2 p-2"
                                    type="submit"
                                    style={{ float: "right",background:"rgb(51, 46, 46)", border:"rgb(22, 20, 20)" }} onClick={(e)=>addToWishListHandler(e)}
                                >
                                    Add to my Wishlist
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                    <div class="contaner">
                    {/* <div className="x">{props.gameData.genre}</div> */}

                    <div className="modal-description">{props.gameData.description}</div>

                    <div className="y">Release date : {props.gameData.release_date}</div>
                    </div>

                    <Button className="btn" style={{background:"rgb(51, 46, 46)", border:"rgb(22, 20, 20)"}}  href={props.gameData.game_url} size="lg" onClick={() => window.location.href = props.gameData.game_url}>
  Download
</Button>


                </Modal.Body>
              
            </Modal>
        </>
    );
}