import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

import crest from '../assets/uw-crest.svg'

const HomeNav = (props) => {
    return <div>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container style={{marginLeft: "0.5rem"}}>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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
                <Navbar.Collapse id="responsive-navbar-nav" className="me-auto">
                    <Nav>
                        <Nav.Link as={Link} to="/f23">Home</Nav.Link>
                        <Nav.Link as={Link} to="/auth">BadgerAuth</Nav.Link>
                        <NavDropdown title="Past Semesters" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/s23">Spring 2023</NavDropdown.Item>
                            <NavDropdown.Item href="https://cs571.github.io/Spring22/" target="_blank">Spring 2022</NavDropdown.Item>
                            <NavDropdown.Item href="https://hci-curriculum-uwmadison.github.io/CS571/" target="_blank">Fall 2021</NavDropdown.Item>
                            <NavDropdown.Item href="https://wisc-hci-curriculum.github.io/cs639-f20/" target="_blank">Fall 2020</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <div style={{margin: "1rem"}}>
            <Outlet/>
        </div>
    </div>
}

export default HomeNav;