import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Cookies from "js-cookie";

// The retired site and the new one share an origin; the new version lives at /v2/.
const NEW_VERSION_URL = window.location.origin + "/v2/";

// Cookie set when a visitor asks not to be reminded; expires after 24 hours.
const REMINDER_DISMISSED_COOKIE = "cs571-legacy-reminder-dismissed";

const LegacyVersionModal = () => {
    // Show the reminder unless the visitor recently asked us to hold off.
    const [show, setShow] = useState(() => Cookies.get(REMINDER_DISMISSED_COOKIE) !== "true");

    const goToNewVersion = () => {
        window.location.href = NEW_VERSION_URL;
    };

    const remindMeLater = () => {
        Cookies.set(REMINDER_DISMISSED_COOKIE, "true", { expires: 1 }); // 1 day = 24 hours
        setShow(false);
    };

    return <Modal show={show} backdrop="static" keyboard={false} centered>
        <Modal.Header>
            <Modal.Title>A newer CS571 is ready for you ✨</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>You&apos;re viewing a legacy version of CS571 that is being retired. Everything you rely on now lives on a newer, better version of the site.</p>
            <p className="mb-0">We&apos;d love for you to make the switch — it only takes a moment.</p>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="outline-secondary" onClick={remindMeLater}>
                Not now — remind me tomorrow
            </Button>
            <Button variant="primary" onClick={goToNewVersion}>
                Take me to the new CS571
            </Button>
        </Modal.Footer>
    </Modal>
}

export default LegacyVersionModal;
