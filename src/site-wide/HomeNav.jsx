import { Alert, Container, Nav, NavDropdown, Navbar, Toast, ToastContainer } from "react-bootstrap";
import { Link, Outlet, useResolvedPath } from "react-router-dom";

import useSpinner from '../hooks/UseSpinner'

import crest from '../assets/uw-crest.svg'
import { BounceLoader } from "react-spinners";
import { useEffect, useState } from "react";
import SpinnerContext from "../contexts/SpinnerContext";
import AnnouncementToast from "./components/AnnouncementToast";
import ToastsContext from "../contexts/ToastsContext";

const HomeNav = (props) => {

    const currentPath = useResolvedPath().pathname;

    const [toasts, setToasts] = useState([])

    const removeToast = (delToastIAT) => {
        setToasts(oldToasts => oldToasts.filter(iToast => iToast.iat !== delToastIAT))
    }

    const addToast = (toast) => {
        setToasts(oldToasts => [...oldToasts, { ...toast, iat: new Date().getTime() }])
    }

    const spinner = useSpinner({
        component: <Outlet />,
        initialState: false
    });

    return <div>
        {
            currentPath === '/exam-timer' ? <></> :
                <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container style={{ marginLeft: "0.5rem" }}>
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
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <NavDropdown title="BadgerAuth">
                                    <NavDropdown.Item as={Link} to="/auth/login">Use BadgerID</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/auth">Manage BadgerIDs</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Past Semesters">
                                    <NavDropdown.Item as={Link} to="/f23">Fall 2023</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/s23">Spring 2023</NavDropdown.Item>
                                    <NavDropdown.Item href="https://cs571.github.io/Spring22/" target="_blank">Spring 2022</NavDropdown.Item>
                                    <NavDropdown.Item href="https://hci-curriculum-uwmadison.github.io/CS571/" target="_blank">Fall 2021</NavDropdown.Item>
                                    <NavDropdown.Item href="https://wisc-hci-curriculum.github.io/cs639-f20/" target="_blank">Fall 2020</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        }
        <Alert variant="success"><strong>New!</strong> Not a UW Student? You can still get access! <a target="_blank" href="https://cs571.org/auth">Get your Badger ID here.</a></Alert>
        <div style={{ margin: "1rem" }}>
            <ToastsContext.Provider value={[toasts, addToast]}>
                <SpinnerContext.Provider value={spinner}>
                    {spinner.display()}
                </SpinnerContext.Provider>
            </ToastsContext.Provider>
        </div>
        <ToastContainer position="bottom-end" className="p-3" style={{ position: "fixed" }}>
            {
                toasts.map((toast, i) => <AnnouncementToast key={toast.iat} {...toast} removeToast={removeToast} />)
            }
        </ToastContainer>
    </div>
}

export default HomeNav;