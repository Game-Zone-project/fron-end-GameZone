import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './WishListCard.css'

export default function WishListCard(props){
    return(
        <div class="wishListCard">
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