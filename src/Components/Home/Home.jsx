import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
    return(
        <>
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>Marvel API</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">
                    Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/characters">
                    Personajes
                    </Nav.Link>
                    <Nav.Link as={Link} to="/favorites">
                    Favoritos
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            <h1>Home</h1>
            <Outlet></Outlet>
        </>
    )
}

export default Home;