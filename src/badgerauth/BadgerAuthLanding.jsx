import { Button, Col, Container, Row } from "react-bootstrap";
import { useContext, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import ToastsContext from "../contexts/ToastsContext";

function BadgerAuthLanding(props) {

    const [toasts, addToast] = useContext(ToastsContext);

    const navigate = useNavigate();

    if (localStorage.getItem("cookieWaiver") === "false") {
        return <>
            <p>This page requires the use of cookies, which you have rejected. Please enable cookies to view this resource.</p>
            <Button onClick={() => {
                localStorage.removeItem("cookieWaiver");
                addToast({
                    title: "Cookies Enabled",
                    body: `You have re-enabled cookies for CS571. BadgerAuth is available.`,
                    variant: "success",
                    lifespan: 15
                })
                navigate('/auth')
            }}>Enable Cookies</Button>
            <Button style={{marginLeft: "0.25rem"}} variant="neutral" onClick={() => navigate('/')}>Go Home</Button>
        </>
    }

    return <Container>
        <Row>
            <Col xs={0} md={1} lg={2} xl={3}></Col>
            <Col xs={12} md={10} lg={8} xl={6}>
                <h1>BadgerAuth Center</h1>
                <Outlet></Outlet>
            </Col>
            <Col xs={0} md={1} lg={2} xl={3}></Col>
        </Row>
    </Container>
}

export default BadgerAuthLanding;