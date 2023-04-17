
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import './ModelGame.css'

export default function ModelGame(props) {

    async function addToLibraryHandler(e) {
        e.preventDefault(); 
        
        let url = `${process.env.REACT_APP_GAMES_URL}/addGame`;
        //  [title, genre, image, review, rating, release_date, game_URL]
        console.log(url)
        let data = {
            title: props.gameData.title,
            genre: props.gameData.genre,
            image: props.gameData.thumbnail,
            //review: props.gameData.review,
            //rating: props.gameData.rating,
            release_date: props.gameData.release_date,
            game_URL: props.gameData.game_url,
        }
       console.log(data)
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
                                <Button className="btn    btn-btn-dark btn-hover btn-active mx-2 p-2" type="submit" onClick={(e) => addToLibraryHandler(e)}>
                                    Add to my library
                                </Button>
                            </Col>
                            <Col>
                                <Button
                                    className="btn btn-dark btn-hover btn-active mx-2 p-2"
                                    type="submit"
                                    style={{ float: "right" }} onClick={(e) => addToWishListHandler(e)}
                                >
                                    Add to my Wishlist
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer >
                </Modal.Footer>
            </Modal>
        </>
    );
}