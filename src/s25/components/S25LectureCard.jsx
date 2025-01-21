import { Button, Card } from "react-bootstrap";

export default function S25LectureCard(props) {
    return <Card tabIndex={0} style={{margin: "1rem", flexShrink: 0, maxWidth: "24rem", cursor: props.available ? "pointer" : "", backgroundColor: props.available ? "#ffffff" : "#eeeeee"}} onKeyUp={(e) => e.key === "Enter" && props.showLecture(props)} onClick={() => props.showLecture(props)}>
        <Card.Body>
            <h3 style={{marginBottom: "-0.5rem", color: props.lectureType ? (props.lectureType === 'design' ? "slateblue" : "firebrick") : "#000000"}}>{props.title}</h3>
            <sub>{props.dt}</sub>
            <br/>
            <p style={{marginTop: "0.5rem"}}>{props.desc}</p>
            {!props.available && <p><em>Not yet available!</em></p>}
        </Card.Body>
    </Card>
}