import { Button, Modal } from "react-bootstrap";

export default function UpdateTerrain ({modal_shown, on_hide_modal}) {
    return (
        <Modal show={modal_shown} onHide={on_hide_modal}>
            <Modal.Header closeButton>
                <Modal.Title>Modifier terrain</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={on_hide_modal}>
                    Close
                </Button>
                <Button variant="primary">
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    ); 
}