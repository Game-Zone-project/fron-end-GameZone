import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { useEffect, useState } from "react";
// import { useRef } from 'react';



export default function AddToWishList(){

    // const commentRef=useRef();


   const [wishGame,setWishGame]=useState([])



    async function getWishList(){
        


        let url=`${process.env.REACT_APP_GAMES_URL}/getAllWishList`
        let response= await fetch(url,{
            method:'GET',
        })
        let recivedData = await response.json();
        setWishGame(recivedData)
           
        
    }

    async function handleDelete(id){
        let url=`${process.env.REACT_APP_GAMES_URL}/DELETE/${id}`
        let response=await fetch(url,{
            method:"DELETE", 
            headers: {
                "Content-Type": "application/json",
            },
        })
    
      
      if(response.status===204){
        alert ("successfuly Deleted !!");
        getWishList();
       
      }
    }


    useEffect(()=>{
        getWishList();
        // console.log(77,favoriteMovie);
    },[])
    
    return(
        <>
        <h1>Wish List</h1>
        {
            wishGame && wishGame.map(game=>{
                return(
                    <Card style={{width:"20rem"}}>
                    <Card.Img varient='top' src={game.image} alt={game.title}/>
                    <Card.Body>
                       <Card.Title>{game.title}</Card.Title>
                       <Card.Text>{game.description}</Card.Text>
                       
                       <Button variant="danger" onClick={()=>handleDelete(game.id)} >Delete</Button><br /><br />
                       {/* <Button variant="warning" onClick={()=>handleUpdate(movie.id)} >Update comment</Button> */}
    
                    </Card.Body>
              </Card>
                )
            })
        }
        </>
    );
}