import './NavBar.css';
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            
            <nav>
                <img src="https://media.discordapp.net/attachments/1095798553210794024/1097962639595929642/Screenshot_2023-04-18_042716.png"/>
            {/* <h1>ProjectName |</h1> */}
                <Link to="/">Home</Link>
                <Link to="/AddToProfileLibrary">My Library</Link>
                <Link to="/AddToWishList">Wish List</Link>
                <Link to="/AboutUs">About Us</Link>
                <Link to="/AboutUs">Log-in</Link>
            </nav>
            
        </>
    )
}