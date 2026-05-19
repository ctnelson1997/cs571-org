import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import TimerNote from "./TimerNote";

export const TIMER_STORAGE_KEY = "cs571-exam-timer";

const NOTE_DEFAULT_WIDTH = 240;
const NOTE_DEFAULT_HEIGHT = 120;
const NOTE_DEFAULT_FONT = 16;

function makeNote(content, existingCount) {
    const stagger = existingCount * 24;
    return {
        id: new Date().getTime(),
        content,
        x: Math.max(16, Math.min((window.innerWidth || 800) - NOTE_DEFAULT_WIDTH - 16, 16 + stagger)),
        y: Math.max(80, 120 + stagger),
        w: NOTE_DEFAULT_WIDTH,
        h: NOTE_DEFAULT_HEIGHT,
        fontSize: NOTE_DEFAULT_FONT
    };
}

export default function TimerGo(props) {

    const [notes, setNotes] = useState(() => Array.isArray(props.initialNotes) ? props.initialNotes : []);
    const [showNoteModal, setShowNoteModal] = useState(false);
    const [draftNote, setDraftNote] = useState("");
    const noteInputRef = useRef(null);
    const [showCancelModal, setShowCancelModal] = useState(false);
    const [endDt, setEndDt] = useState(props.endDt);
    const [dt, setDt] = useState(new Date());
    const [fontSize, setFontSize] = useState(window.innerWidth / 14);

    const [isPaused, setIsPaused] = useState(!!props.initialIsPaused);
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

    function openAddNote() {
        setDraftNote("");
        setShowNoteModal(true);
    }

    function closeAddNote() {
        setShowNoteModal(false);
    }

    function submitNote(e) {
        e?.preventDefault?.();
        const trimmed = draftNote.trim();
        if (!trimmed) return;
        setNotes(n => [...n, makeNote(trimmed, n.length)]);
        setShowNoteModal(false);
    }

    function openCancel() {
        setShowCancelModal(true);
    }

    function closeCancel() {
        setShowCancelModal(false);
    }

    function confirmCancel() {
        try { localStorage.removeItem(TIMER_STORAGE_KEY); } catch (_) { /* noop */ }
        setShowCancelModal(false);
        props.onCancel?.();
    }

    const updateNote = useCallback((id, patch) => {
        setNotes(ns => ns.map(n => {
            if (n.id !== id) return n;
            let changed = false;
            for (const k in patch) {
                if (n[k] !== patch[k]) { changed = true; break; }
            }
            return changed ? { ...n, ...patch } : n;
        }));
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

        return `${formattedHours}:${formattedMinutes}` + ((props.showSeconds || (hours === 0 && minutes === 0)) ? `:${formattedSeconds}` : '');
    }, [props])

    let rmMs = new Date(endDt.getTime() - dt.getTime() + 1000);
    const isOver = rmMs < 0;

    const handleDeleteNote = (id) => {
        setNotes(ns => ns.filter(n => n.id !== id))
    }

    useEffect(() => {
        if (isOver) {
            try { localStorage.removeItem(TIMER_STORAGE_KEY); } catch (_) { /* noop */ }
            return;
        }
        try {
            localStorage.setItem(TIMER_STORAGE_KEY, JSON.stringify({
                endDt: endDt.toISOString(),
                showSeconds: !!props.showSeconds,
                isPaused,
                notes
            }));
        } catch (_) { /* noop */ }
    }, [endDt, isPaused, notes, props.showSeconds, isOver]);

    return <div>

        <Button variant="outline-primary" style={{ position: "fixed", top: "1rem", left: "1rem" }} onClick={openAddNote}>Add Note</Button>

        <Modal show={showNoteModal} onHide={closeAddNote} onEntered={() => noteInputRef.current?.focus()} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Add a note</Modal.Title>
            </Modal.Header>
            <Form onSubmit={submitNote}>
                <Modal.Body>
                    <Row>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>
                                    <strong>Markdown</strong>
                                </Form.Label>
                                <Form.Control
                                    ref={noteInputRef}
                                    as="textarea"
                                    rows={10}
                                    value={draftNote}
                                    onChange={e => setDraftNote(e.target.value)}
                                    placeholder={"# Heading\n**bold** *italic* ~~strike~~\n- list item\n- [ ] task\n`code` [link](https://...)"}
                                    style={{ fontFamily: "Menlo, Monaco, Consolas, 'Courier New', monospace", fontSize: "0.9rem" }}
                                />
                                <Form.Text muted>
                                    Supports CommonMark + GFM: headings, lists, tables, task lists, code, links, blockquotes, strikethrough.
                                </Form.Text>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Label><strong>Preview</strong></Form.Label>
                            <div
                                className="timer-note-md"
                                style={{
                                    border: "1px solid #dee2e6",
                                    borderRadius: "0.375rem",
                                    padding: "0.5rem 0.75rem",
                                    minHeight: "calc(10 * 1.5em + 0.75rem)",
                                    background: "#fff",
                                    textAlign: "left",
                                    overflow: "auto"
                                }}
                            >
                                {draftNote.trim()
                                    ? <ReactMarkdown remarkPlugins={[remarkGfm]}>{draftNote}</ReactMarkdown>
                                    : <span style={{ color: "#adb5bd" }}>Nothing to preview yet.</span>}
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeAddNote}>Cancel</Button>
                    <Button variant="primary" type="submit" disabled={!draftNote.trim()}>Add Note</Button>
                </Modal.Footer>
            </Form>
        </Modal>

        <div style={{ position: "fixed", top: "1rem", right: "1rem", display: "flex", gap: "0.5rem" }}>
            {
                isOver ? null : (
                    isPaused ?
                        <Button variant="secondary" onClick={unpause}>Unpause</Button> :
                        <Button onClick={pause}>Pause</Button>
                )
            }
            <Button variant="outline-danger" onClick={openCancel}>
                {isOver ? "End" : "Cancel Exam"}
            </Button>
        </div>

        <Modal show={showCancelModal} onHide={closeCancel} centered>
            <Modal.Header closeButton>
                <Modal.Title>{isOver ? "End exam?" : "Cancel the exam?"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {isOver
                    ? "This will close the timer and clear any saved state. Continue?"
                    : "This will stop the exam timer, discard all notes, and clear saved progress. This cannot be undone. Continue?"}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeCancel}>Keep going</Button>
                <Button variant="danger" onClick={confirmCancel}>{isOver ? "End exam" : "Cancel exam"}</Button>
            </Modal.Footer>
        </Modal>

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

        {
            notes.map(n => <TimerNote key={n.id} {...n} onUpdate={updateNote} handleDelete={handleDeleteNote} />)
        }
    </div>
}