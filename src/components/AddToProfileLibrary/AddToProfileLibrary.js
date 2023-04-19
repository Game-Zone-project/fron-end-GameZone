import React, { useState, useEffect } from 'react';
import './AddToProfileLibrary.css'
import LibraryCard from '../LibraryCard/LibraryCard';
import { useRef } from 'react';

export default function AddToProfileLibrary(){

    const reviewRef = useRef();
    const [libraryGames, setlibraryGames] = useState([])

    async function getlibraryGames() {
        let url = `${process.env.REACT_APP_GAMES_URL}/getAllGame`;
        let response = await fetch(url,{
            method:'Get',
        });
        let recivedData = await response.json();
        setlibraryGames(recivedData);
        console.log("data in library:",recivedData)
    }
      
    function reviewHandler(newReview,id){
        libraryGames.map(game=>{
          if(game.id ===id){
             game.review=newReview.userReview;
             return game;
          }else{
             return game;
          }
        })
     }
    

    useEffect(() => {
        getlibraryGames();
    }, []);

    return(
        <>
        
        <section id="librarySec">
            <div className='divHome'></div>
        <div class="divContLibrary">
        {
            libraryGames.map(data=>{
                return(
                    <LibraryCard  data={data} getlibraryGames={getlibraryGames} reviewHandler={reviewHandler}/>
                )
            
                
            })
        }
         </div>
         <br></br>
        </section>
        </>
    );
}

