import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './WishListCard.css'
import { useState } from 'react';
import ModelWishList from '../ModelWishList/ModelWishList';

export default function WishListCard(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // async function handleDelete(id){
  //   debugger
  //   let url=`${process.env.REACT_APP_GAMES_URL}/DELETEwishL/${id}`
  //   console.log(11111111,url)
  //   let response=await fetch(url,{
  //       method:"DELETE", 
  //       headers: {
  //           "Content-Type": "application/json",
  //       },

  //     })
  //     .then(result=>{
  //       // console.log("result is",result)
  //       alert ("successfuly Deleted !!");
  //       props.getwishList();
  //       console.log("data after deleting",props.getwishList());
  //     })
  //     .catch(err=>{
  //       console.log(err)
  //     })

  // console.log(22222222,response)





  // if(response.status===204){
  //   alert ("successfuly Deleted !!");
  //   props.getwishList();
  //   console.log("data after deleting",props.getwishList());
  // onClick={()=>handleDelete(props.data.id)}
  // }



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
              <Button variant="dark" onClick={handleShow}>Show Details</Button>
            </div>
          </Card.Body>
        </Card>
        <ModelWishList show={show} handleClose={handleClose} gameData={props.data} />
      </div>

    </>
  )
}