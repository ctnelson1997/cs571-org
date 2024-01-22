import { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

function BadgerAuthCard(props) {

    const [isShowingBid, setIsShowingBid] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    const isExpired = () => {
        return props.eat && props.eat.getTime() < new Date().getTime()
    }

    const copy = () => {
        navigator.clipboard.writeText(props.bid);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000)
    }

    return <Card style={{...props.style, padding: props.padding ?? '0.5rem', backgroundColor: (isExpired() ? 'antiquewhite' : 'white')}}>
        <h3>{props.nickname ? props.nickname : "Badger ID"}</h3>
        {
            props.eat ?
                isExpired() ?
                <p>Issued at {props.iat.toLocaleDateString()} {props.iat.toLocaleTimeString()} | <strong style={{color: 'maroon'}}>Expired on {props.eat.toLocaleDateString()} {props.eat.toLocaleTimeString()}</strong></p> :
                <p>Issued at {props.iat.toLocaleDateString()} {props.iat.toLocaleTimeString()} | Expires on {props.eat.toLocaleDateString()} {props.eat.toLocaleTimeString()}</p>
            : <p>Issued at {props.iat.toLocaleDateString()} {props.iat.toLocaleTimeString()} | Never Expires</p>
        }
        {
            isShowingBid ?
            <Form.Control type="text" disabled={true} value={props.bid} aria-label="Badger ID Value"></Form.Control> : 
            <Form.Control type="text" disabled={true} value="*****************" aria-label="Badger ID Value"></Form.Control>
        }
        <div style={{marginTop: "0.5rem", display: "inline-flex"}}>
            <Button variant="secondary" title="Reveal" aria-label="Reveal Badger ID" onClick={() => setIsShowingBid(b => !b)} style={{marginRight: "0.5rem"}}>👁</Button>
            <Button variant="primary" title="Copy" onClick={copy} aria-label="Copy Badger ID Value" style={{marginRight: "0.5rem"}}>{isCopied ? "🗐  Copied!" : "🗐"}</Button>
            <Button variant="danger" title="Revoke" onClick={() => props.openRevokeModal(props.bid)}>Revoke Badger ID</Button>
        </div>
    </Card>
}

export default BadgerAuthCard;