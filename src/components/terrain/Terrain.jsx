import { Component } from "react";
import { Button } from "react-bootstrap";
import Pagination from "../statics/Pagination";
import TerrainCard from "./Card";
import InsertTerrain from "./Insert";
import UpdateTerrain from "./Update";

export default class Terrain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal_shown: {
                insert: false,
                update: false,
            },
            terrains: [
                {
                    _id: "sd32c1qs1dqsd5c1q3r5v1fd123v1df",
                    adresse: 'adresse',
                    proprietaire: {
                        nom: 'Rijaniaina',
                        prenom: 'Elie Fidèle'
                    },
                    apercues: ['[000257].jpg', '[000325].jpg', '[001891].jpg']
                }
            ]
        };
    }

    handle_open_insert_modal = () => {
        const {modal_shown} = this.state;
        modal_shown['insert'] = true;
        this.setState({modal_shown});
    }

    open_update_modal = () => {
        const {modal_shown} = this.state;
        modal_shown['update'] = true;
        this.setState({modal_shown});
    }

    handle_close_modal = scope => {
        const {modal_shown} = this.state;
        modal_shown[scope] = false;
        this.setState({modal_shown});
    }

    render() {
        return (
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark"><b><small>Gestion du terrain</small></b></h1>
                            </div>
                            <div className="col-sm-6">
                                <div className="float-sm-right">
                                    <Button variant="primary" onClick={this.handle_open_insert_modal}>
                                        <span className="material-icons">add</span> Nouveau
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <InsertTerrain modal_shown={this.state.modal_shown['insert']} on_hide_modal={() => this.handle_close_modal('insert')} />
                <UpdateTerrain modal_shown={this.state.modal_shown['update']} on_hide_modal={() => this.handle_close_modal('update')} />

                <div className="content">
                    <div className="container">
                        <div className="row">
                            {this.state.terrains.map((terrain, key) => <TerrainCard key={key} terrain={terrain} on_open_update_modal={this.open_update_modal} />)}
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <ul className="pagination float-right" id="client-pagination">
                                    <Pagination source={`http://localhost:5000/client/pagination`} range={5} on_page_update={this.update_view} />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}