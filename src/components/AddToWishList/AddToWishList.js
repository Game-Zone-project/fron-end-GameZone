import React, { useState, useEffect } from 'react';
import './AddToWishList.css';
import WishListCard from '../wishListCard/WishListCard';

export default function AddToWishList(){
    const [wishList, setwishList] = useState([])

    async function getwishList() {
        let url =`${process.env.REACT_APP_GAMES_URL}/getAllWishList`;
        console.log(11111,url)
        let response = await fetch(url,{
            method:'Get',
        });
        let recivedData = await response.json();
        setwishList(recivedData);
        console.log(11111,wishList)
    }

    useEffect(() => {
        getwishList();
    }, []);

    return(
        <>

        <section id="wishListySec">
        <h1>Wish List</h1>
        <div class="divCont">
        {
             wishList.map(data=>{
                return(
                    <WishListCard  data={data} getwishList={getwishList} />
                )


            })
        }
         </div>
         <br></br>
        </section>
        </>
    );
}