import './Game.css';
import ModelGame from '../ModelGame/ModelGame'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState} from 'react';


  export default function Game(props){
    //console.log(props.data)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>

        </>
    )
}