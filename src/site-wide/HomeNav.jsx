import { Alert, Button, Container, Nav, NavDropdown, Navbar, Toast, ToastContainer } from "react-bootstrap";
import { Link, Outlet, useNavigate, useResolvedPath } from "react-router-dom";

import useSpinner from '../hooks/UseSpinner'

import crest from '../assets/uw-crest.svg'
import { BounceLoader } from "react-spinners";
import { useEffect, useState } from "react";
import SpinnerContext from "../contexts/SpinnerContext";
import AnnouncementToast from "./components/AnnouncementToast";
import ToastsContext from "../contexts/ToastsContext";
import CS571Configurator from "../config/configurator";

const HomeNav = (props) => {
    const currentPath = useResolvedPath().pathname;

    const [toasts, setToasts] = useState([])
    const [cookieWaiver, setCookieWaiver] = useState()
    const [justDismissed, setJustDismissed] = useState(false);

    if (cookieWaiver !== JSON.parse(localStorage.getItem("cookieWaiver"))) {
        setCookieWaiver(JSON.parse(localStorage.getItem("cookieWaiver")))
    }

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

    const dismissCookie = () => {
        if (localStorage.getItem("cookieWaiver") === "false") {
            addToast({
                title: "Cookies Enabled",
                body: `You have re-enabled cookies for CS571. BadgerAuth is available.`,
                variant: "success",
                lifespan: 15
            })
            localStorage.removeItem("cookieWaiver")
            setCookieWaiver(null);
        } else {
            localStorage.setItem("cookieWaiver", "true");
            setCookieWaiver(true);
        }
        
    }

    const banCookie = async () => {
        localStorage.setItem("cookieWaiver", "false");
        setCookieWaiver(false);
        await fetch(CS571Configurator.BADGERAUTH_API + "/auth/remove-cs571-bid-cookie", {
            method: "DELETE",
            credentials: "include"
        })
        await fetch(CS571Configurator.BADGERAUTH_API + '/auth/remove-cs571-badgerauth-cookie', {
            method: "DELETE",
            credentials: "include"
        })
        addToast({
            title: "Cookies Disabled",
            body: `You have disabled cookies for CS571. BadgerAuth is no longer available.`,
            variant: "danger",
            lifespan: 15
        })          
    }
    
    const doJustDismiss = () => {
        setJustDismissed(true);
    }

    return <div>
        {
            currentPath === '/exam-timer' ? <></> :
                <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container style={{ marginLeft: "0.5rem" }}>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Brand as={Link} to={"/"}>
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
                                <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                                {
                                    cookieWaiver === false ?
                                        <></> :
                                        <Nav.Link as={Link} to={"/auth"}>BadgerAuth</Nav.Link>
                                }
                                <NavDropdown title="Past Semesters">
                                    <NavDropdown.Item as={Link} to={"/f24"}>Fall 2024</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={"/s24"}>Spring 2024</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={"/f23"}>Fall 2023</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={"/s23"}>Spring 2023</NavDropdown.Item>
                                    <NavDropdown.Item href="https://cs571.github.io/Spring22/" target="_blank">Spring 2022</NavDropdown.Item>
                                    <NavDropdown.Item href="https://hci-curriculum-uwmadison.github.io/CS571/" target="_blank">Fall 2021</NavDropdown.Item>
                                    <NavDropdown.Item href="https://wisc-hci-curriculum.github.io/cs639-f20/" target="_blank">Fall 2020</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link as={Link} to={"/privacy-policy"}>Privacy Policy</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        }
        {currentPath === '/exam-timer' ? <></> : ( CS571Configurator.IS_ON_PREM ?
            <Alert variant="secondary"><strong>This site is for UW students only.</strong> Not a UW student? Please use <a target="_blank" href="https://cs571.org">cs571.org</a></Alert> :
            <Alert variant="success"><strong>New!</strong> CS571 is open to <em>everybody</em>! When making API requests, simply replace <code>cs571api.cs.wisc.edu</code> with <code>cs571.org</code></Alert>
        )}
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
        {
            !justDismissed && !cookieWaiver && <ToastContainer position="bottom-start" className="p-3" style={{ position: "fixed" }}>
                {
                    (cookieWaiver === undefined || cookieWaiver === null) ?
                        <Toast bg={"light"} animation={true} show={!justDismissed} onClose={doJustDismiss}>
                            <Toast.Header>
                                <strong className="me-auto">Cookie Notice 🍪</strong>
                            </Toast.Header>
                            <Toast.Body>CS571 uses cookies to store your Badger ID and perform other essential operations. By continuing to use the website, you consent to this notice.</Toast.Body>
                            <div style={{ margin: "0.5rem" }}>
                                <Button onClick={dismissCookie}>Don't Show Me Again</Button>
                                <Button onClick={banCookie} style={{ marginLeft: "0.25rem" }} variant="neutral">Disallow</Button>
                            </div>
                        </Toast>
                        :
                        <Toast bg={"light"} animation={true} show={!justDismissed} onClose={doJustDismiss}>
                            <Toast.Header>
                                <strong className="me-auto">Disabled Cookie Notice ❗🍪</strong>
                            </Toast.Header>
                            <Toast.Body>Cookies have been disabled. You no longer have access to BadgerAuth.</Toast.Body>
                            <div style={{ margin: "0.5rem" }}>
                                <Button onClick={dismissCookie} style={{ marginLeft: "0.25rem" }}>Enable Cookies</Button>
                            </div>
                        </Toast>
                }
            </ToastContainer>
        }

    </div>
}

export default HomeNav;