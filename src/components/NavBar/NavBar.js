import { useAuth0 } from "@auth0/auth0-react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

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

//         <Navbar bg="light" expand="md">
//             <Navbar.Brand>ProjectName |</Navbar.Brand>
//             <Navbar.Toggle aria-controls="navbar-nav" />
//             <Navbar.Collapse id="navbar-nav">
//                 <Nav className="mr-auto">
//                     <Nav.Link as={Link} to="/">
//                         Home
//                     </Nav.Link>
//                     <Nav.Link as={Link} to="/AddToProfileLibrary">
//                         My Library
//                     </Nav.Link>
//                     <Nav.Link as={Link} to="/AddToWishList">
//                         Wish List
//                     </Nav.Link>
//                     <Nav.Link as={Link} to="/AboutUs">
//                         About Us
//                     </Nav.Link>
//                 </Nav>
//                 <div className="navbar-user-info">
//                     {isAuthenticated ? (
//                         <>
//                             <span className="navbar-user-name">{user.name}</span>
//                             <Button
//                                 variant="primary"
//                                 onClick={logout}
//                                 className="navbar-logout-btn"
//                             >
//                                 Log out
//                             </Button>
//                         </>
//                     ) : (
//                         <Button variant="primary" onClick={loginWithRedirect}>
//                             Log in
//                         </Button>
//                     )}
//                 </div>
//             </Navbar.Collapse>
//         </Navbar>
//     );
// }

