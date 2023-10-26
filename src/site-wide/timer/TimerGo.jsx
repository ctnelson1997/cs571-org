import { useCallback, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function TimerGo(props) {

    const [dt, setDt] = useState(new Date());
    const [fontSize, setFontSize] = useState(window.innerWidth / 14);

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

    // ChatGPT
    const millisecondsToHMS = useCallback((ms) => {
        const seconds = Math.floor(ms / 1000);
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;

        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }, [])

    let rmMs = new Date(props.endDt.getTime() - dt.getTime() + 1000);
    const isOver = rmMs < 0;

    return <div>
        {
            isOver ? <>
                <h1 style={{ fontWeight: 600, marginBottom: "2rem", color: "darkred", fontSize: fontSize / 1.25 }}>The exam has concluded.</h1>
                <Container>
                    <Row>
                        <Col xs={12} sm={6}>
                            <p style={{ fontSize: fontSize / 3 }}>It is currently...</p>
                            <h2 style={{ fontSize: fontSize / 2 }}>{dt.toLocaleTimeString()}</h2>
                        </Col>
                        <Col xs={12} sm={6}>
                            <p style={{ fontSize: fontSize / 3 }}>The exam ended at...</p>
                            <h2 style={{ fontSize: fontSize / 2 }}>{props.endDt.toLocaleTimeString()}</h2>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "3rem" }}>
                        <p style={{ fontSize: fontSize / 3, color: "darkred" }}><strong>Time over...</strong></p>
                        <h2 style={{ fontSize: fontSize, color: "darkred" }}>+{millisecondsToHMS(rmMs * -1)}</h2>
                    </Row>
                </Container>
            </> : <>
                <h1 style={{ fontWeight: 300, marginBottom: "2rem" }}>The exam is in progress.</h1>
                <Container>
                    <Row>
                        <Col xs={12} sm={6}>
                            <p style={{ fontSize: fontSize / 3 }}>It is currently...</p>
                            <h2 style={{ fontSize: fontSize / 2 }}>{dt.toLocaleTimeString()}</h2>
                        </Col>
                        <Col xs={12} sm={6}>
                            <p style={{ fontSize: fontSize / 3 }}>The exam will end at...</p>
                            <h2 style={{ fontSize: fontSize / 2 }}>{props.endDt.toLocaleTimeString()}</h2>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "3rem" }}>
                        <p style={{ fontSize: fontSize / 3 }}>Time remaining...</p>
                        <h2 style={{ fontSize: fontSize }}>{millisecondsToHMS(rmMs)}</h2>
                    </Row>
                </Container>
            </>
        }
    </div>
}