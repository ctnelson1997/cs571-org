import { useEffect, useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

function AnnouncementToast({
    title,
    subtext,
    body,
    lifespan,
    variant,
    onClose,
    removeToast,
    iat
}) {
    const DEFAULT_LIFESPAN = -1;

    const [isShowing, setIsShowing] = useState(true);

    const close = () => {
        setIsShowing(false);
        setTimeout(() => removeToast(iat), 1000)
    }

    if (lifespan ?? DEFAULT_LIFESPAN !== -1) {
        setTimeout(close, (lifespan ?? DEFAULT_LIFESPAN) * 1000);
    }

    useEffect(() => {
        if (!isShowing && onClose) {
            onClose()
        }
    }, [isShowing])

    return <Toast bg={variant ?? "light"} animation={true} show={isShowing} onClose={close}>
        <Toast.Header>
            <strong className="me-auto" style={{color: variant === "success" ? "white" : "black"}}>{title}</strong>
            {subtext && <small style={{color: variant === "success" ? "white" : "black"}}>{subtext}</small>}
        </Toast.Header>
        <Toast.Body style={{color: variant === "success" ? "white" : "black"}}>{body}</Toast.Body>
    </Toast>
}

export default AnnouncementToast;