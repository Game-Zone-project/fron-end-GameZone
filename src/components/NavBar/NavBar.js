import './NavBar.css';
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            
            <nav>
            <h1>ProjectName |</h1>
                <Link to="/">Home</Link>
                <Link to="/AddToProfileLibrary">My Library</Link>
                <Link to="/AddToWishList">Wish List</Link>
                <Link to="/AboutUs">About Us</Link>
                <Link to="/AboutUs">Log-in</Link>
            </nav>
            
        </>
    )
}