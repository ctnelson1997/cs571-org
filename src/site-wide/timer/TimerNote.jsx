import { useMemo } from "react"
import { Card } from "react-bootstrap"

export default function TimerNote(props) {

    const mdContent = useMemo(() => props.content.split("**").map((p, i) => i % 2 === 1 ? <strong key={i}>{p}</strong> : p), [props.content])

    const handleDelete = () => {
        if(confirm("Are you sure you want to delete this note?")) {
            props.handleDelete(props.id)
        }
    }

    return <Card style={{ textAlign: "left" }} onClick={handleDelete}>
        <Card.Body style={{ padding: "0.25rem" }}>
            <p>{mdContent}</p>
        </Card.Body>
    </Card>
}