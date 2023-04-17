
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ModelGame(props){
    async function addToLibraryHandler(e){
        e.preventDefault();
        let url=`${process.env.REACT_APP_GAMES_URL}/addGame`
        //  [title, genre, image, review, rating, release_date, game_URL]
         console.log(url)
        let data={
            title:props.gameData.title, 
            genre:props.gameData.genre, 
            image:props.gameData.thumbnail, 
            // review:props.gameData.review, 
            // rating:props.gameData.rating, 
            release_date:props.gameData.release_date,
            game_URL:props.gameData.game_url
        }
        console.log("Game is",data)
        const response = await fetch(url,{
            method:"POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),

        })
        const recivedData = await response.json();
        console.log(55555,recivedData)
       
    }

    async function addToWishListHandler(e){
        e.preventDefault();
        let url=`${process.env.REACT_APP_GAMES_URL}/addWishList`
        //  [title, genre, image, review, rating, release_date, game_URL]
         console.log(url)
        let data={
            title:props.gameData.title, 
            genre:props.gameData.genre, 
            image:props.gameData.thumbnail, 
            review:props.gameData.review, 
            rating:props.gameData.rating, 
            release_date:props.gameData.release_date,
            game_URL:props.gameData.game_URL
        }
        console.log("data is",data)
        const response = await fetch(url,{
            method:"POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),

        })
        console.log('response is',response)

        const recivedData = await response.json();
        console.log(66666,recivedData)
       

    }
return(
    <>
    
    </>

)

}