import { Button, Toast } from "react-bootstrap";
import BadgerAuthCard from "./components/BadgerAuthCard";
import BadgerAuthCreateModal from "./components/BadgerAuthCreateModal";
import { useContext, useEffect, useState } from "react";
import ToastsContext from "../contexts/ToastsContext";
import { useNavigate } from "react-router";
import BadgerAuthRevokeModal from "./components/BadgerAuthRevokeModal";

function BadgerAuthManage(props) {

    const navigate = useNavigate();

    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showRevokeModal, setShowRevokeModal] = useState(false);

    const [revokeBid, setRevokeBid] = useState("");
    const [ids, setIds] = useState([])

    const reloadBids = async () => {
        const res = await fetch('https://cs571.org/api/auth/get-my-bids', {
            credentials: "include"
        })
        if (res.status === 200) {
            const bids = await res.json();
            setIds(bids
                .sort((a, b) => new Date(b.iat) - new Date(a.iat))
                .map(bid => {
                    return {
                        ...bid,
                        iat: new Date(bid.iat),
                        eat: bid.eat ? new Date(bid.eat) : undefined
                    }
                })
            );
        } else {
            addToast({
                title: "Session Expired",
                body: "Your session has expired, please log back in.",
                variant: "warning",
                lifespan: 5
            })
            navigate('/auth')
        }
    }

    const openCreateModal = () => {
        setShowCreateModal(true);
    }

    const closeCreateModal = () => {
        setShowCreateModal(false);
        reloadBids();
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
        const res = await fetch('https://cs571.org/api/auth/remove-cs571-badgerauth-cookie', {
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

    return <div>
        <p>Manage your Badger IDs below. Typically, students only use one Badger ID throughout the semester. However, in the event that your Badger ID becomes compromised, or you want to issue a temporary ID to a recruiter, you may do so below.</p>
        <p><strong>You are responsible for all traffic from your Badger ID.</strong> Keep this a secret! Only share it with trusted individuals that should have access to the system.</p>
        <p>If your Badger ID is associated with malicious activity, your account will be permanently and irrevocably banned from <a href="https://cs571.org">cs571.org</a>.</p>
        <h2>Your Badger IDs</h2>
        <div>
            <Button variant="success" onClick={openCreateModal}>Create New Badger ID</Button>
            <Button onClick={logout} variant="secondary" style={{marginLeft: "0.5rem"}}>Done Managing Badger IDs</Button>
        </div>
        <br></br>
        {
            ids && ids.length > 0 ?
                ids.map(id => <BadgerAuthCard
                    key={id.bid}
                    {...id}
                    openRevokeModal={openRevokeModal}
                    style={{ marginTop: "1rem" }} />)
                :
                <><br /><p>You currently have no BadgerIDs.</p></>
        }
        <BadgerAuthRevokeModal show={showRevokeModal} close={closeRevokeModal} bid={revokeBid}></BadgerAuthRevokeModal>
        <BadgerAuthCreateModal show={showCreateModal} close={closeCreateModal}></BadgerAuthCreateModal>
    </div>
}

export default BadgerAuthManage;