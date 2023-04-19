import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModelLibraryCard from '../ModelLibraryCard/ModelLibraryCard';
import { useRef, useState } from 'react';
import './LibraryCard.css';


export default function LibraryCard(props){
  const reviewRef = useRef();
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



    return(
      <>
        <div class="libraryCard">
        <Card  style={{ width: '22rem' }}>
            <Card.Img variant="top" src={props.data.image} />
              <Card.Body class="backGrountext">
                <Card.Title class="titleCard">{props.data.title}</Card.Title>
                <Card.Text>
                </Card.Text>
                <div class="homeButton">
                <Button variant="dark" onClick={handleShow}>Show Details</Button>
                </div>
              </Card.Body>
        </Card>
       
        <ModelLibraryCard show={show} handleClose={handleClose} gameData={props.data} reviewHandler={props.reviewHandler} getlibraryGames={props.getlibraryGames} revHandler={props.reviewHandler}/>
        </div>

        </>
    )
}