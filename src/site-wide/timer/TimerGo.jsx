import { useCallback, useEffect, useMemo, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import TimerNote from "./TimerNote";

export default function TimerGo(props) {

    const [notes, setNotes] = useState([]);
    const [endDt, setEndDt] = useState(props.endDt);
    const [dt, setDt] = useState(new Date());
    const [fontSize, setFontSize] = useState(window.innerWidth / 14);

    const [isPaused, setIsPaused] = useState(false);
    const pauseListener = useMemo(() => [isPaused], []);
    useEffect(() => {
        pauseListener[0] = isPaused
    }, [isPaused]);

    useEffect(() => {
        setInterval(() => {
            setDt(old => {
                const currDt = new Date();
                if (pauseListener[0]) {
                    setEndDt(oldEnd => new Date(oldEnd.getTime() + (currDt.getTime() - old.getTime())))
                }
                return currDt;
            });
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

    function pause() {
        setIsPaused(true)
    }

    function unpause() {
        setIsPaused(false)
    }

    function addNote() {
        const p = prompt("Please type out your note for the class...");
        setNotes(n => [...n, {
            id: new Date().getTime(),
            content: p
        }])
    }

    // ChatGPT
    const millisecondsToHMS = useCallback((ms) => {
        const seconds = Math.floor(ms / 1000);
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;

        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');

        return `${formattedHours}:${formattedMinutes}` + ((props.showSeconds || (hours === 0 && minutes === 0)) ? `:${formattedSeconds}` : '');
    }, [props])

    let rmMs = new Date(endDt.getTime() - dt.getTime() + 1000);
    const isOver = rmMs < 0;

    const handleDeleteNote = (id) => {
        setNotes(ns => ns.filter(n => n.id !== id))
    }

    return <div>

        <Button variant="outline-primary" style={{ position: "fixed", top: "1rem", left: "1rem" }} onClick={addNote}>Add Note</Button>

        {
            isOver ? <></> : (
                isPaused ?
                    <Button style={{ position: "fixed", top: "1rem", right: "1rem" }} variant="secondary" onClick={unpause}>Unpause</Button> :
                    <Button style={{ position: "fixed", top: "1rem", right: "1rem" }} onClick={pause}>Pause</Button>
            )
        }

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
                            <h2 style={{ fontSize: fontSize / 2 }}>{endDt.toLocaleTimeString()}</h2>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "3rem" }}>
                        <p style={{ fontSize: fontSize / 3, color: "darkred" }}><strong>Time over...</strong></p>
                        <h2 style={{ fontSize: fontSize, color: "darkred" }}>+{millisecondsToHMS(rmMs * -1)}</h2>
                    </Row>
                </Container>
            </> : <>
                <h1 style={{ fontWeight: 300, marginBottom: "2rem" }}>{isPaused ? <strong>The exam has been paused.</strong> : "The exam is in progress."}</h1>
                <Container>
                    <Row>
                        <Col xs={12} sm={6}>
                            <p style={{ fontSize: fontSize / 3 }}>It is currently...</p>
                            <h2 style={{ fontSize: fontSize / 2 }}>{dt.toLocaleTimeString()}</h2>
                        </Col>
                        <Col xs={12} sm={6}>
                            <p style={{ fontSize: fontSize / 3 }}>The exam will end at...</p>
                            <h2 style={{ fontSize: fontSize / 2 }}>{endDt.toLocaleTimeString()}</h2>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "3rem" }}>
                        <p style={{ fontSize: fontSize / 3 }}>Time remaining...</p>
                        <h2 style={{ fontSize: fontSize }}>{millisecondsToHMS(rmMs)}</h2>
                    </Row>
                </Container>
            </>
        }

        <Container fluid>
            <Row>
                {
                    notes.map(n => <Col key={n.id} xs={6} lg={4} xxl={3}>
                        <TimerNote {...n} handleDelete={handleDeleteNote}/>
                    </Col>)
                }
            </Row>
        </Container>
    </div>
}