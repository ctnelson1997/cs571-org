import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

import crest from '../assets/uw-crest.svg'

const HomeNav = (props) => {
    return <div>
        <Navbar bg="dark" variant="dark">
            <Container style={{marginLeft: "0.5rem"}}>
                <Navbar.Brand as={Link} to="/">
                    <img
                        alt="UW Logo"
                        src={crest}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    CS571 @ UW-Madison
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/f23">Home</Nav.Link>
                    <Nav.Link as={Link} to="/auth">BadgerAuth</Nav.Link>
                    <NavDropdown title="Past Semesters" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/s23">Spring 2023</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
        <div style={{margin: "1rem"}}>
            <Outlet/>
        </div>
    </div>
}

export default HomeNav;