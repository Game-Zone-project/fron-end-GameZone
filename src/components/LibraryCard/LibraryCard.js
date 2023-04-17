import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './AddToProfileLibrary.css'

export default function LibraryCard(props){
    return(
        <div class="libraryCard">
        <Card  style={{ width: '22rem' }}>
            <Card.Img variant="top" src={props.data.image} />
              <Card.Body class="backGrountext">
                <Card.Title class="titleCard">{props.data.title}</Card.Title>
                <Card.Text>
                </Card.Text>
                <div class="homeButton">
                {/* <Button variant="dark" onClick={handleShow}>Any thing</Button> */}
                </div>
              </Card.Body>
        </Card>
        </div>
    )
}