import { Dropdown } from "react-bootstrap";

export default function ClientCard({ client, onUpdate, onDelete }) {
    return (
        <div className="w-100 col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
            <div className="card bg-white card-lightblue card-outline w-100">
                <div className="card-body box-profile">
                    <div className="row">
                        <div className="col-8">
                            <h2 className="lead"><b>{client.nom} {client.prenom && client.prenom}</b></h2>
                            <ul className="ml-4 mb-0 fa-ul text-muted">
                                <li className="small"><span className="fa-li"><span className="material-icons">contacts</span></span><b>CIN</b>:<br />{client.cin}</li>
                                {typeof client.adresse !== 'undefined' ? <li className="small"><span className="fa-li"><span className="material-icons">place</span></span><b>Adresse</b>:<br />{client.adresse.lot} - {client.adresse.code_postal} {client.adresse.ville}</li> : ''}
                                {client.telephones.length > 0 ? <li className="small"><span className="fa-li"><span className="material-icons">phone</span></span><b>Téléphone</b>:<br /> {client.telephones.map(telephone => <span key={telephone}> <b>-</b> {telephone}<br /></span>)} </li> : ''}
                            </ul>
                        </div>
                        <div className="col-4 text-center">
                            <img src={`http://localhost:5000/uploads/images/clients/${client.photo}`} alt={client.nom} className="img-circle img-fluid" style={{ background: '#0069d9' }} />
                            <div className="custom-class-image-edit-overlay custom-class-image-edit-overlay-background"></div>
                            <i className="fa fa-camera fa-2x text-white custom-class-icon-edit-overlay"></i>
                            <div className="custom-class-image-edit-overlay custom-class-image-edit-overlay-foreground" data-toggle="modal"></div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="text-left">
                        <Dropdown>
                            <Dropdown.Toggle variant="default" id="dropdown-basic">
                                action
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#!" onClick={() => onUpdate(client)}><span className="material-icons">update</span> modifier</Dropdown.Item>
                                <Dropdown.Item href="#!" onClick={() => onDelete(client)}><span className="material-icons">delete_forever</span> supprimer</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    );
}