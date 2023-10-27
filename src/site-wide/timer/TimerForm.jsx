import { useCallback, useEffect, useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function TimerForm(props) {

    const [dt, setDt] = useState(new Date());
    const [inpTime, setInpTime] = useState("");
    const [doRound, setDoRound] = useState(false);
    const [showSeconds, setShowSeconds] = useState(true);
    const [timeDenom, setTimeDenom] = useState("minutes");
    const [fontSize, setFontSize] = useState(window.innerWidth / 16);


    useEffect(() => {
        setInterval(() => {
            setDt(new Date());
        }, 100)
    }, [])

    useEffect(() => {
        const handleResize = () => {
            // Define your font size calculations here based on screen size
            const newFontSize = window.innerWidth / 16;
            setFontSize(newFontSize);
        };

        // Attach the event listener
        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const begin = (tm, rnd, tmDn, ss) => {
        tm = tm ? tm : 0;
        const currDate = new Date();
        currDate.setMilliseconds(0);
        const mins = tmDn === 'minutes' ? tm : tm * 60;
        if (!rnd) {
            props.goOn(currDate, new Date(currDate.getTime() + mins * 60 * 1000), ss);
        } else {
            let newDate;
            if (currDate.getSeconds() === 0) {
                newDate = new Date(currDate.getTime() + mins * 60 * 1000);
            } else {
                newDate = new Date(currDate.getTime() + (mins + 1) * 60 * 1000);
                newDate.setSeconds(0);
            }
            newDate.setMilliseconds(0);
            props.goOn(currDate, newDate, ss);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        begin(inpTime, doRound, timeDenom, showSeconds)
    }

    return <div>
        <Container fluid={true}>
            <Row>
                <Col xs={12} lg={6}>
                    <div style={{ width: "100%" }}>
                        <h1>Exam Timer</h1>
                        <p>Please complete the information below and press "Start Exam".</p>
                        <Form onSubmit={handleSubmit}>
                            <div style={{ textAlign: "left" }}>
                                <Form.Label htmlFor='timeAllowed'><strong>Time Allowed</strong></Form.Label>
                            </div>
                            <div style={{ display: "inline-flex", float: "left" }}>
                                <Form.Control id='timeAllowed' placeholder="0" type="number" value={inpTime} onChange={(e) => setInpTime(e.target.value === "" ? "" : (parseInt(e.target.value) < 0 ? 0 : parseInt(e.target.value)))}></Form.Control>
                                <Form.Select style={{ width: "12rem", marginLeft: "0.5rem" }} value={timeDenom} onChange={(e) => setTimeDenom(e.target.value)}>
                                    <option value="minutes">Minutes</option>
                                    <option value="hours">Hours</option>
                                </Form.Select>
                            </div>
                            <br />
                            <br />
                            <div style={{ display: "inline-block", float: "left" }}>
                                <div style={{ display: "inline-flex", marginTop: "0.25rem", float: "left" }}>
                                    <Form.Check id="roundUp" checked={showSeconds} onChange={(e) => setShowSeconds(r => !r)}></Form.Check>
                                    <Form.Label id="roundUp" style={{ marginLeft: "0.5rem" }} onClick={(e) => setShowSeconds(r => !r)}>Display seconds?</Form.Label>
                                    <Form.Check id="roundUp" style={{ marginLeft: "0.5rem" }} checked={doRound} onChange={(e) => setDoRound(r => !r)}></Form.Check>
                                    <Form.Label id="roundUp" style={{ marginLeft: "0.5rem" }} onClick={(e) => setDoRound(r => !r)}>Round up to nearest minute?</Form.Label>

                                </div>
                            </div>
                            <br />
                            <Button style={{ width: "100%" }} type="submit" onClick={handleSubmit}>Start Exam</Button>
                        </Form>
                    </div>

                </Col>
                <Col xs={12} lg={6}>
                    <div style={{ textAlign: "right" }}>
                        <p>The current time is...</p>
                        <h1 style={{ fontSize: fontSize / 1. }}>{dt.toLocaleTimeString()}</h1>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
}