import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Menu() {
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">PomoDo - Seu assistente da técnica Pomodoro!</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link> <Link to={'/'}>Home</Link> </Nav.Link>
                    <Nav.Link><Link to={'/sobre'}>Descubra</Link></Nav.Link>
                    <Nav.Link href="#pricing"><Link to={'/quemsou'}>Quem sou</Link></Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            <br />

        </>
    );
}

export default Menu;