import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useMatch } from 'react-router-dom';
import Carrosel from './carousel';
import './index.css';

function Menu() {
    const location = useMatch("/");
    return(
        <>
            <Navbar bg="dark" collapseOnSelect expand="sm" variant="dark" className='menu'>
                <Navbar.Toggle aria-controls='navbarScroll' data-bs-target="#navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Navbar.Brand><Link to={'/'}> PomoDo - Seu assistente da técnica Pomodoro!</Link></Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link> <Link to={'/'}>Home</Link> </Nav.Link>
                            <Nav.Link><Link to={'/sobre'}>Descubra</Link></Nav.Link>
                            <Nav.Link><Link to={'/quemsou'}>Quem sou</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <button type="button" className="btn btn-primary btn-md me-2">
                        <Nav.Link className='login'><Link to={'/login'}>Login</Link></Nav.Link>
                    </button>
            </Navbar>
            {location ? (
                <div className='carrossel'>
                    <Carrosel />
            </div>
            ) : ""}
            <br />

        </>
    );
}

export default Menu;