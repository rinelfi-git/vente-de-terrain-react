import { useState } from "react";
import { Modal } from "react-bootstrap";

export default function PerPageModal({ showModal, onHideModal }) {
    const [fieldChange, setFieldChange] =useState(3)

    function handleFieldUpdate(e) {
        setFieldChange(parseInt(e.target.value));
    }

    return (
        <Modal show={showModal} onHide={onHideModal} centered>
            <Modal.Header closeButton>
                <Modal.Title>Nombre d'élément par page</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {[3, 6, 9].map(field => (
                    <div className="form-check" key={field}>
                        <input className="form-check-input" type="radio" name="sort-field" id={`per-page-${field}`} value={field} onChange={handleFieldUpdate} checked={fieldChange === field} />
                        <label className="form-check-label" htmlFor={`per-page-${field}`}>
                            {field} Éléments
                        </label>
                    </div>
                ))}
            </Modal.Body>
        </Modal>
    );
}