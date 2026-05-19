import { useEffect, useRef } from "react"
import { Card } from "react-bootstrap"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

const btnStyle = {
    border: "none",
    background: "transparent",
    fontSize: "0.75rem",
    lineHeight: 1,
    cursor: "pointer",
    color: "#6c757d",
    padding: "0.1rem 0.3rem"
};

export default function TimerNote(props) {

    const { id, content, x, y, w, h, fontSize, onUpdate, handleDelete: onDelete } = props;

    const dragState = useRef(null);
    const cardRef = useRef(null);

    const handleDelete = (e) => {
        e.stopPropagation();
        if (confirm("Are you sure you want to delete this note?")) {
            onDelete(id)
        }
    }

    const bumpFont = (delta) => (e) => {
        e.stopPropagation();
        onUpdate(id, { fontSize: Math.max(8, Math.min(72, fontSize + delta)) });
    };

    const onHeaderPointerDown = (e) => {
        if (e.button !== 0) return;
        dragState.current = {
            startX: e.clientX,
            startY: e.clientY,
            origX: x,
            origY: y
        };
        e.currentTarget.setPointerCapture(e.pointerId);
        e.preventDefault();
    };

    const onHeaderPointerMove = (e) => {
        if (!dragState.current) return;
        const dx = e.clientX - dragState.current.startX;
        const dy = e.clientY - dragState.current.startY;
        const nextX = Math.max(0, Math.min(window.innerWidth - 40, dragState.current.origX + dx));
        const nextY = Math.max(0, Math.min(window.innerHeight - 40, dragState.current.origY + dy));
        onUpdate(id, { x: nextX, y: nextY });
    };

    const onHeaderPointerUp = (e) => {
        dragState.current = null;
        try { e.currentTarget.releasePointerCapture(e.pointerId); } catch (_) { /* noop */ }
    };

    useEffect(() => {
        if (!cardRef.current || typeof ResizeObserver === "undefined") return;
        const el = cardRef.current;
        let lastW = el.offsetWidth;
        let lastH = el.offsetHeight;
        const ro = new ResizeObserver(() => {
            const width = el.offsetWidth;
            const height = el.offsetHeight;
            if (width !== lastW || height !== lastH) {
                lastW = width;
                lastH = height;
                onUpdate(id, { w: width, h: height });
            }
        });
        ro.observe(el);
        return () => ro.disconnect();
    }, [id, onUpdate]);

    return <Card
        ref={cardRef}
        style={{
            textAlign: "left",
            position: "fixed",
            left: x,
            top: y,
            width: w,
            height: h,
            minWidth: 140,
            minHeight: 80,
            resize: "both",
            overflow: "hidden",
            zIndex: 1000,
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
        }}
    >
        <div
            onPointerDown={onHeaderPointerDown}
            onPointerMove={onHeaderPointerMove}
            onPointerUp={onHeaderPointerUp}
            onPointerCancel={onHeaderPointerUp}
            style={{
                cursor: "move",
                padding: "0.15rem 0.4rem",
                background: "#f1f3f5",
                borderBottom: "1px solid #dee2e6",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                userSelect: "none",
                touchAction: "none"
            }}
        >
            <span style={{ fontSize: "0.75rem", color: "#6c757d" }}> </span>
            <div style={{ display: "flex", alignItems: "center", gap: "0.1rem" }}>
                <button
                    type="button"
                    onPointerDown={e => e.stopPropagation()}
                    onClick={bumpFont(-2)}
                    aria-label="Decrease text size"
                    style={btnStyle}
                >
                    A&minus;
                </button>
                <button
                    type="button"
                    onPointerDown={e => e.stopPropagation()}
                    onClick={bumpFont(2)}
                    aria-label="Increase text size"
                    style={btnStyle}
                >
                    A+
                </button>
                <button
                    type="button"
                    onPointerDown={e => e.stopPropagation()}
                    onClick={handleDelete}
                    aria-label="Delete note"
                    style={{ ...btnStyle, fontSize: "1rem" }}
                >
                    &times;
                </button>
            </div>
        </div>
        <Card.Body style={{ padding: "0.5rem", overflow: "auto", height: "calc(100% - 28px)" }}>
            <div className="timer-note-md" style={{ fontSize: `${fontSize}px`, lineHeight: 1.25 }}>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
            </div>
        </Card.Body>
    </Card>
}
