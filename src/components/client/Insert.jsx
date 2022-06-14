import { Button, Modal } from "react-bootstrap";

export default function InsertClient ({modal_shown, on_toggle_modal}) {
    return (
        <Modal show={modal_shown} onHide={on_toggle_modal}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={on_toggle_modal}>
                    Close
                </Button>
                <Button variant="primary">
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    ); 
}