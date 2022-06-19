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

    add_new_phone = () => {
        const { form } = this.state;
        const telephones = form['telephones'].slice();
        telephones.push('');
        form['telephones'] = telephones;
        this.setState({ form });
    }

    delete_phone_at = key => {
        const { form } = this.state;
        const telephones = form['telephones'].slice();
        telephones.splice(key, 1);
        form['telephones'] = telephones;
        this.setState({ form });
    }

    update_input = event => {
        const { form } = this.state;
        form[event.target.name] = event.target.value;
        this.setState({ form });
    }

    update_telephones = (key, event) => {
        const { form } = this.state;
        const telephones = form['telephones'].slice();
        telephones[key] = event.target.value;
        form['telephones'] = telephones;
        this.setState({ form });
    }

    handle_submit = async (e) => {
        e.preventDefault();
        const {form} = this.state;
        const client = {terrains: [], adresse: {}};
        ['cin', 'nom', 'prenom', 'telephones'].forEach(clef => client[clef] = form[clef]);
        ['ville', 'code_postal', 'lot'].forEach(clef => client['adresse'][clef] = form[clef]);
        await axios.put('http://localhost:5000/client', client);
        this.props.on_insertion_success();
    }

    render() {
        const { form } = this.state;
        return (
            <Modal show={this.props.modal_shown} onHide={this.props.on_hide_modal} centered scrollable={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Nouveau Client</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.handle_submit}>
                        <input type="submit" hidden={true} />
                        <div className="form-group">
                            <label>cin:<span className="text-danger">*</span></label>
                            <input type="text" placeholder="XXX XXX XXX XXX" name="cin" className="form-control" maxLength="15" value={form.cin} onChange={this.update_input} />
                            <small className="form-text text-danger"></small>
                        </div>
                        <div className="form-group">
                            <label>nom:<span className="text-danger">*</span></label>
                            <input type="text" placeholder="ex: Rakotoarivelo" name="nom" className="form-control" value={form.nom} onChange={this.update_input} />
                            <small className="form-text text-danger"></small>
                        </div>
                        <div className="form-group">
                            <label>prénom:</label>
                            <input type="text" placeholder="ex: Benjamina" className="form-control" name="prenom" value={form.prenom} onChange={this.update_input} />
                            <small className="form-text text-danger"></small>
                        </div>
                        {form.telephones.map((telephone, key) => (
                            <div className="form-group" key={key}>
                                <label>Téléphone N° {key + 1}:<span className="text-danger">*</span></label>
                                <div className="input-group">
                                    <input className="form-control" placeholder="03X XX XXX XX" type="text" maxLength="13" value={telephone} onChange={e => this.update_telephones(key, e)} />
                                    <div className="input-group-append">
                                        <button type="button" className="btn btn-danger" onClick={() => this.delete_phone_at(key)}>
                                            <i className="fa fa-minus"></i>
                                        </button>
                                    </div>
                                </div>
                                <small className="form-text text-danger"></small>
                            </div>
                        ))}
                        <div className="row">
                            <div className="col-12">
                                <button className="btn btn-primary w-100" type="button" onClick={this.add_new_phone}><i className="fa fa-plus"></i></button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>ville:<span className="text-danger">*</span></label>
                                    <input type="text" placeholder="ex: Fianarantsoa" className="form-control" name="ville"  value={form.ville} onChange={this.update_input} />
                                    <small className="form-text text-danger"></small>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>code postal:<span className="text-danger">*</span></label>
                                    <input type="number" placeholder="ex: 301" className="form-control" name="code_postal"  value={form.code_postal} onChange={this.update_input} />
                                    <small className="form-text text-danger"></small>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>lot:</label>
                            <textarea id="lot" rows="3" className="form-control" name="lot"  value={form.lot} onChange={this.update_input} />
                            <small className="form-text text-danger"></small>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handle_submit} variant="primary">
                        Enregistrer
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}