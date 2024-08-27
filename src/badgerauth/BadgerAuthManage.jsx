import { Button, Form, Toast } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import ToastsContext from "../contexts/ToastsContext";
import { useNavigate } from "react-router";
import BadgerAuthRevokeModal from "./BadgerAuthRevokeModal";
import CS571Configurator from "../config/configurator";

function BadgerAuthManage(props) {

    const navigate = useNavigate();

    const [showRevokeModal, setShowRevokeModal] = useState(false);

    const [revokeBid, setRevokeBid] = useState("");
    const [bid, setBid] = useState(undefined)

    const [isShowingBid, setIsShowingBid] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    const reloadBids = async () => {
        const res = await fetch(CS571Configurator.BADGERAUTH_API + '/auth/get-my-bids', {
            credentials: "include"
        })
        if (res.status === 200) {
            const bids = await res.json();
            setBid(bids?.length > 0 ? bids[0].bid : undefined);
        }
        else {
            addToast({
                title: "Session Expired",
                body: "Your session has expired, please log back in.",
                variant: "warning",
                lifespan: 5
            })
            navigate('/auth')
        }
    }

    const openRevokeModal = (bidToRevoke) => {
        setRevokeBid(bidToRevoke);
    }

    useEffect(() => {
        if (revokeBid) {
            setShowRevokeModal(true)
        }
    }, [revokeBid])

    const closeRevokeModal = (changed) => {
        setShowRevokeModal(false);
        setRevokeBid("");
        if (changed) {
            reloadBids();
        }
    }

    const [toasts, addToast] = useContext(ToastsContext);

    useEffect(() => {
        reloadBids();
    }, [])

    const logout = async () => {
        const res = await fetch(CS571Configurator.BADGERAUTH_API + '/auth/remove-cs571-badgerauth-cookie', {
            method: "DELETE",
            credentials: "include"
        })
        addToast({
            title: "Done Managing Badger IDs",
            body: "Thank you for managing your Badger IDs",
            variant: "success",
            lifespan: 5
        })
        navigate('/')
    }

    const create = async () => {
        const res = await fetch(CS571Configurator.BADGERAUTH_API + "/auth/add-bid-to-email", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nickname: undefined,
                eat: undefined
            })
        })
        if (res.status === 200) {
            addToast({
                title: "Success!",
                body: "Successfully created a new Badger ID! It may take up to 10 minutes for this to be usable.",
                variant: "success",
                lifespan: 10
            })
            reloadBids();
        } else if (res.status === 401) {
            addToast({
                title: "Session Expired",
                body: "Your session has expired, please log back in.",
                variant: "warning",
                lifespan: 5
            })
            navigate('/auth')
        }
    }

    const copy = () => {
        navigator.clipboard.writeText(bid);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000)
    }

    return <div>
        <p><strong>You are responsible for all traffic from your Badger ID.</strong> Keep this a secret! Only share it with trusted individuals that should have access to the system. If your Badger ID is associated with malicious activity, your account will be permanently and irrevocably banned.</p>
        <h2>Your Badger ID</h2>
        {
           bid ? <>
                <Form.Control type="text" disabled={true} value={bid && isShowingBid ? bid : "********************"} aria-label="Badger ID Value"></Form.Control>
                <div style={{marginTop: "0.5rem", display: "inline-flex"}}>
                    <Button variant="secondary" title="Reveal" aria-label="Reveal Badger ID" onClick={() => setIsShowingBid(b => !b)} style={{marginRight: "0.5rem"}}>{isShowingBid ? "Hide" : "Reveal"}</Button>
                    <Button variant="primary" title="Copy" onClick={copy} aria-label="Copy Badger ID Value" style={{marginRight: "0.5rem"}}>{isCopied ? "Copied!" : "Copy"}</Button>
                    <Button variant="danger" title="Revoke" style={{marginRight: "0.5rem"}} onClick={() => openRevokeModal(bid)}>Revoke</Button>
                </div>
                </>
                : <>
                    <p>You do not currently have a Badger ID.</p> :
                    <Button variant="success" onClick={create}>Create a Badger ID</Button>
                </>
        }
        <br/><br/>
        <Button onClick={logout} variant="outline-secondary">Done Managing Badger IDs</Button>
        <BadgerAuthRevokeModal show={showRevokeModal} close={closeRevokeModal} bid={revokeBid}></BadgerAuthRevokeModal>
    </div>
}

export default BadgerAuthManage;