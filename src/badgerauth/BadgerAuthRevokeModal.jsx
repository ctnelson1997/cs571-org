import { useContext } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router";
import ToastsContext from "../contexts/ToastsContext";
import { useForm } from "react-hook-form";
import CS571Configurator from "../config/configurator";

function BadgerAuthRevokeModal({
    show,
    close,
    bid
}) {

    const {
        register,
        handleSubmit,
        setError,
        watch,
        trigger,
        clearErrors,
        resetField,
        setValue,
        formState: { errors, isDirty, isValid },
    } = useForm({
        mode: 'onChange'
    });

    const navigate = useNavigate();

    const [toasts, addToast] = useContext(ToastsContext);

    const create = async (d, e) => {
        e.preventDefault();
        const res = await fetch(CS571Configurator.BADGERAUTH_API + "/auth/revoke-bid-from-email", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                bid: bid
            })
        })
        if (res.status === 200) {
            addToast({
                title: "Badger ID Revoked",
                body: "Successfully revoked a Badger ID",
                variant: "success",
                lifespan: 5
            })
            close(true);
        } else if (res.status === 401) {
            close(true)
            addToast({
                title: "Session Expired",
                body: "Your session has expired, please log back in.",
                variant: "warning",
                lifespan: 5
            })
            navigate('/auth')
        }
    }

    return <Modal show={show}>
        <div style={{ padding: "1rem" }}>
            <Modal.Header>
                <h2>Revoke Badger ID</h2>
            </Modal.Header>
            <Form onSubmit={handleSubmit(create)}>
                <p style={{marginTop: "0.5rem"}}>You are about to revoke the Badger ID starting with <strong>{bid.substring(4, 11)}</strong>...</p>
                <p style={{color: "maroon"}}><strong>This action is irreversible!</strong></p>
                <p>Please note that it may take up to 1 minute for a Badger ID to be invalidated.</p>
                <Modal.Footer style={{ marginTop: "0.5rem" }}>
                    <Button variant="danger" type="submit">Confirm</Button>
                    <Button variant="secondary" onClick={() => close(false)} style={{ marginLeft: "0.5rem" }}>Cancel</Button>
                </Modal.Footer>
            </Form>
        </div>
    </Modal>
}

export default BadgerAuthRevokeModal;