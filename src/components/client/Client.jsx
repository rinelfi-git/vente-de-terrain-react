import { Component } from "react"
import { Button } from "react-bootstrap";
import ClientCard from "./Card";
import ConfirmDeleteClient from "./ConfirmDelete";
import InsertClient from "./Insert";
import Pagination from "./Pagination";
import SearchCriteria from "./SearchCriteria";
import UpdateClient from "./Update";
import UpdateProfileImage from "./UpdateProfileImage";

export default class Client extends Component {
    constructor(props) {
        super(props);
        this.state = {
            insert_modal_shown: false,
            clients: [
                {
                    "adresse": {
                        "code_postal": 301,
                        "ville": "Fianarantsoa"
                    },
                    "telephones": [],
                    "_id": "62a73cc3644188ca269afebf",
                    "cin": "201051014168",
                    "nom": "Rijaniaina",
                    "photo": "default.png",
                    "terrains": [],
                    "prenom": "Elie Fidèle"
                }
            ],
            view_criteria: {
                element_per_page: 1,
            }
        };
    }

    handle_show_client = () => {
        this.setState(state => ({insert_modal_shown: !state.insert_modal_shown}));
    }

    update_view = page => {
        
    }

    render() {
        return (
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark"><b><small>Gestion du client</small></b></h1>
                            </div>
                            <div className="col-sm-6">
                                <div className="float-sm-right">
                                    <Button variant="primary" onClick={this.handle_show_client}>
                                        <span className="material-icons">add</span> Nouveau
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <SearchCriteria />
                <InsertClient modal_shown={this.state.insert_modal_shown} on_toggle_modal={this.handle_show_client} />
                <UpdateClient />
                <ConfirmDeleteClient />
                <UpdateProfileImage />

                <div className="content">
                    <div className="container">
                        <div className="row">
                            {this.state.clients.map((client, index) => <ClientCard client={client} key={index} />)}
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