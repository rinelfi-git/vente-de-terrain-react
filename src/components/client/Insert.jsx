import axios from "axios";
import { Component } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export default class InsertClient extends Component {

    constructor(props) {
        super(props);
        this.state = {
            form: {
                cin: '',
                nom: '',
                prenom: '',
                telephones: [''],
                ville: '',
                code_postal: '',
                lot: ''
            }
        }
    }

    addNewPhone = () => {
        const { form } = this.state;
        const telephones = form['telephones'].slice();
        telephones.push('');
        form['telephones'] = telephones;
        this.setState({ form });
    }

    deletePhoneAt = key => {
        const { form } = this.state;
        const telephones = form['telephones'].slice();
        telephones.splice(key, 1);
        form['telephones'] = telephones;
        this.setState({ form });
    }

    updateInput = event => {
        const { form } = this.state;
        form[event.target.name] = event.target.value;
        this.setState({ form });
    }

    updateTelephones = (key, event) => {
        const { form } = this.state;
        const telephones = form['telephones'].slice();
        telephones[key] = event.target.value;
        form['telephones'] = telephones;
        this.setState({ form });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const {form} = this.state;
        const client = {terrains: [], adresse: {}};
        ['cin', 'nom', 'prenom', 'telephones'].forEach(clef => client[clef] = form[clef]);
        ['ville', 'code_postal', 'lot'].forEach(clef => client['adresse'][clef] = form[clef]);
        try {
            await axios.put('http://localhost:5000/client', client);
            this.props.onInsertSuccess();
        }catch(error) {
            alert('erreur');
        }
    }

    render() {
        const { form } = this.state;
        return (
            <Modal show={this.props.modalShown} onHide={this.props.onHideModal} centered scrollable={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Nouveau Client</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.handleSubmit}>
                        <input type="submit" hidden={true} />
                        <div className="form-group">
                            <label>cin:<span className="text-danger">*</span></label>
                            <input type="text" placeholder="XXX XXX XXX XXX" name="cin" className="form-control" maxLength="15" value={form.cin} onChange={this.updateInput} />
                            <small className="form-text text-danger"></small>
                        </div>
                        <div className="form-group">
                            <label>nom:<span className="text-danger">*</span></label>
                            <input type="text" placeholder="ex: Rakotoarivelo" name="nom" className="form-control" value={form.nom} onChange={this.updateInput} />
                            <small className="form-text text-danger"></small>
                        </div>
                        <div className="form-group">
                            <label>prénom:</label>
                            <input type="text" placeholder="ex: Benjamina" className="form-control" name="prenom" value={form.prenom} onChange={this.updateInput} />
                            <small className="form-text text-danger"></small>
                        </div>
                        {form.telephones.map((telephone, key) => (
                            <div className="form-group" key={key}>
                                <label>Téléphone N° {key + 1}:<span className="text-danger">*</span></label>
                                <div className="input-group">
                                    <input className="form-control" placeholder="03X XX XXX XX" type="text" maxLength="13" value={telephone} onChange={e => this.updateTelephones(key, e)} />
                                    <div className="input-group-append">
                                        <button type="button" className="btn btn-danger" onClick={() => this.deletePhoneAt(key)}>
                                            <i className="fa fa-minus"></i>
                                        </button>
                                    </div>
                                </div>
                                <small className="form-text text-danger"></small>
                            </div>
                        ))}
                        <div className="row">
                            <div className="col-12">
                                <button className="btn btn-primary w-100" type="button" onClick={this.addNewPhone}><i className="fa fa-plus"></i></button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>ville:<span className="text-danger">*</span></label>
                                    <input type="text" placeholder="ex: Fianarantsoa" className="form-control" name="ville"  value={form.ville} onChange={this.updateInput} />
                                    <small className="form-text text-danger"></small>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>code postal:<span className="text-danger">*</span></label>
                                    <input type="number" placeholder="ex: 301" className="form-control" name="code_postal"  value={form.code_postal} onChange={this.updateInput} />
                                    <small className="form-text text-danger"></small>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>lot:</label>
                            <textarea id="lot" rows="3" className="form-control" name="lot"  value={form.lot} onChange={this.updateInput} />
                            <small className="form-text text-danger"></small>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleSubmit} variant="primary">
                        Enregistrer
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}