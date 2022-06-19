import axios from "axios";
import { Button, Modal } from "react-bootstrap";

export default function ConfirmDeleteClient({ client, modalShown, onDeleteSuccess, onHideModal }) {
    async function handleSubmit() {
        try{
            await axios.delete(`http://localhost:5000/client/${client['_id']}`);
            onDeleteSuccess();
        }catch(error) {
            alert('erreur');
        }
    }

    return (
        <Modal show={modalShown} onHide={onHideModal} centered scrollable={true}>
            <Modal.Header closeButton>
                <Modal.Title>Supprimer le Client</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Vous êtes sur le point de supprimer un client portant le CIN <span style={{fontWeight: 'bold'}}>"{client['cin']}"</span>. Veuillez confirmer la suppression de ceci tout en prenant en compte que si vous supprimez ce client:<br />
                <ol>
                    <li>Ce client ne sera plus disponnible dans la liste du clientel.</li>
                    <li>Tous les terrains en possession de ce client seront aussi supprimés.</li>
                    <li>Tous les historiques de ventes concertant ce client seront supprimés.</li>
                </ol>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleSubmit} variant="primary">
                    Supprimer
                </Button>
            </Modal.Footer>
        </Modal>
    );
}