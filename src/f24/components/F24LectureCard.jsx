import { Button, Card } from "react-bootstrap";

export default function F24LectureCard(props) {
    return <Card style={{margin: "1rem", flexShrink: 0, maxWidth: "24rem", cursor: props.available ? "pointer" : "", backgroundColor: props.available ? "#ffffff" : "#eeeeee"}} onClick={() => props.showLecture(props)}>
        <Card.Body>
            <h3 style={{marginBottom: "-0.5rem", color: props.lectureType ? (props.lectureType === 'design' ? "slateblue" : "firebrick") : "#000000"}}>{props.title}</h3>
            <sub>{props.dt}</sub>
            <br/>
            <p style={{marginTop: "0.5rem"}}>{props.desc}</p>
            {!props.available && <p><em>Not yet available!</em></p>}
        </Card.Body>
    </Card>
}