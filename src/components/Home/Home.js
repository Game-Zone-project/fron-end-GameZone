import React, { useState, useEffect } from 'react';
import GameList from '../GameList/GameList';

export default function Home(){
    const [games, setGames] = useState([]);




    async function getGames() {
        const url = process.env.REACT_APP_GAMES_URL
        //  console.log(1111, url);
        const response = await fetch(`${url}`);
        // console.log(2222, response);
        const jsonData = await response.json();
        // console.log(3333, jsonData);
        setGames(jsonData);
        // console.log(4444, games);
    }

    function reviewHandler(newData,title){
        games.map(games=>{
            if(games.title ===title){
                console.log("test",newData,title)
                 games.review = newData.userReview;
                return games
            }else{  
            }return games;

            
        })
    }

    useEffect(() => {
        getGames()
    }, []);

    return(
        <>
        {/* <h1>hello</h1> */}
        <GameList data={games}  reviewHandler={reviewHandler}/>
        </>

    );
}