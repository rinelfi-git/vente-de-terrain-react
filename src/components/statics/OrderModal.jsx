import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

export default function OrderModal({ fields, showModal, onHideModal, onFieldUpdate, onOrderUpdate }) {
    const [fieldChange, setFieldChange] = useState('');
    const [orderChange, setOrderChange] = useState(1);

    function handleFieldUpdate(e) {
        const { value } = e.target;
        setFieldChange(value);
        onFieldUpdate(value);
    }
    function handleOrderUpdate(e) {
        const { value } = e.target;
        setOrderChange(value);
        onOrderUpdate(parseInt(value));
    }

    useEffect(() => {
        if (fields.length > 0 && fieldChange === '') setFieldChange(fields[0]['key']);
    }, [fields, fieldChange]);

    return (
        <Modal show={showModal} onHide={onHideModal} centered>
            <Modal.Header closeButton>
                <Modal.Title>Trier par</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {fields.map((field, key) => (
                    <div className="form-check" key={key}>
                        <input className="form-check-input" type="radio" name="sort-field" id={`order-${field['key']}`} value={field['key']} onChange={handleFieldUpdate} checked={fieldChange === field['key']} />
                        <label className="form-check-label" htmlFor={`order-${field['key']}`}>
                            {field['value']}
                        </label>
                    </div>
                ))}
                <legend>ordre</legend>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="sort-order" id="sort-order-az" value="1" onChange={handleOrderUpdate} checked={parseInt(orderChange) === 1} />
                    <label className="form-check-label" htmlFor="sort-order-az">
                        Croissant
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="sort-order" id="sort-order-za" value="0" onChange={handleOrderUpdate} checked={parseInt(orderChange) === 0} />
                    <label className="form-check-label" htmlFor="sort-order-za">
                        Decroissant
                    </label>
                </div>
            </Modal.Body>
        </Modal>
    );
}