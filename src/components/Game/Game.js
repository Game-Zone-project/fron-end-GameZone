import './Game.css';
import ModelGame from '../ModelGame/ModelGame'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';


export default function Game(props) {
  //console.log(props.data)
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div class="div1">
        <Card style={{ width: '22rem' }}>
          <Card.Img variant="top" src={props.data.thumbnail} />
          <Card.Body class="backGrountext">
            <Card.Title class="titleCard">{props.data.title}</Card.Title>
            <Card.Text>
            </Card.Text>
            <div class="homeButton">
              <Button className='showButton' variant="dark" onClick={handleShow}>Show Details</Button>
            </div>
          </Card.Body>
        </Card>
        <ModelGame show={show} handleClose={handleClose} gameData={props.data} />
      </div>
    </>

  )

  ;

}