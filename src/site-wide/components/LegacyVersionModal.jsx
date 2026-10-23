import { Modal } from "react-bootstrap";

// Always shown and cannot be dismissed: no close button, a static backdrop, and Escape disabled.
const LegacyVersionModal = () => {
    return <Modal show backdrop="static" keyboard={false} centered>
        <Modal.Header>
            <Modal.Title>cs571.org is taking a break 👋</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p className="mb-0">cs571.org is coming back in January 2027 with a brand new website and content. See you then!</p>
        </Modal.Body>
    </Modal>
}

export default LegacyVersionModal;
