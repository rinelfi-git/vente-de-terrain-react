import { Modal } from "react-bootstrap";

export default function FieldModal({fields, showModal, onHideModal}) {
    return (
        <Modal show={showModal} onHide={onHideModal} centered>
            <Modal.Header closeButton>
                <Modal.Title>Champ à rechercher</Modal.Title>
            </Modal.Header>
            <Modal.Body>

            </Modal.Body>
        </Modal>
    );
}