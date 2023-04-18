import { useAuth0 } from "@auth0/auth0-react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

    return (
        <Navbar bg="light" expand="md">
            <Navbar.Brand>ProjectName |</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/AddToProfileLibrary">
                        My Library
                    </Nav.Link>
                    <Nav.Link as={Link} to="/AddToWishList">
                        Wish List
                    </Nav.Link>
                    <Nav.Link as={Link} to="/AboutUs">
                        About Us
                    </Nav.Link>
                </Nav>
                <div className="navbar-user-info">
                    {isAuthenticated ? (
                        <>
                            <span className="navbar-user-name">{user.name}</span>
                            <Button
                                variant="primary"
                                onClick={logout}
                                className="navbar-logout-btn"
                            >
                                Log out
                            </Button>
                        </>
                    ) : (
                        <Button variant="primary" onClick={loginWithRedirect}>
                            Log in
                        </Button>
                    )}
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
}
