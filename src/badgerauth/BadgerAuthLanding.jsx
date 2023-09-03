import { Col, Container, Row } from "react-bootstrap";
import BadgerAuthHome from "./BadgerAuthHome";
import BadgerAuthManage from "./BadgerAuthManage";
import BadgerAuthConfirmation from "./BadgerAuthConfirmation";
import { useState } from "react";
import { Outlet } from "react-router";

function BadgerAuthLanding(props) {
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