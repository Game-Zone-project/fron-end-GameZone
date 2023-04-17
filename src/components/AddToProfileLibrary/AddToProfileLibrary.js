import React, { useState, useEffect } from 'react';
import './AddToProfileLibrary.css'
import LibraryCard from '../LibraryCard/LibraryCard';
export default function AddToProfileLibrary(){
    const [libraryGames, setlibraryGames] = useState([])

    async function getlibraryGames() {
        let url = `${process.env.REACT_APP_GAMES_URL}/getAllGame`;
        let response = await fetch(url,{
            method:'Get',
        });
        let recivedData = await response.json();
        setlibraryGames(recivedData);
    }

    useEffect(() => {
        getlibraryGames();
    }, []);

    return(
        <>
        
        <section id="librarySec">
        <h1>My Library</h1>
        <div class="divContLibrary">
        {
            libraryGames && libraryGames.map(data=>{
                return(
                    <LibraryCard  data={data} />
                )
            
                
            })
        }
         </div>
         <br></br>
        </section>
        </>
    );
}

