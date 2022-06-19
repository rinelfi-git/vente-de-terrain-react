import { Component } from "react"
import { Button } from "react-bootstrap";
import ClientCard from "./Card";
import ConfirmDeleteClient from "./ConfirmDelete";
import InsertClient from "./Insert";
import Pagination from "../statics/Pagination";
import SearchCriteria from "./SearchCriteria";
import UpdateClient from "./Update";
import UpdateProfileImage from "./UpdateProfileImage";
import axios from "axios";

export default class Client extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal_shown: {
                insert: false,
                update: false,
            },
            clients: [],
            client: {adresse: {}, telephones: []},
            view_criteria: {
                element_per_page: 1,
            }
        };
    }

    componentDidMount() {
        this.update_view();
    }

    handle_open_insert_modal = () => {
        const { modal_shown } = this.state;
        modal_shown['insert'] = true;
        this.setState({ modal_shown });
    }

    open_update_modal = async (id) => {
        const { modal_shown } = this.state;
        const {data} = await axios.get(`http://localhost:5000/client/${id}`);
        this.setState({client: data});
        modal_shown['update'] = true;
        this.setState({ modal_shown });
    }

    handle_close_modal = scope => {
        const { modal_shown } = this.state;
        modal_shown[scope] = false;
        this.setState({ modal_shown });
    }

    update_view = async (page) => {
        const { data } = await axios.get('http://localhost:5000/client');
        this.setState({ clients: data });
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
                                    <Button variant="primary" onClick={this.handle_open_insert_modal}>
                                        <span className="material-icons">add</span> Nouveau
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <SearchCriteria />
                <InsertClient modal_shown={this.state.modal_shown['insert']} on_hide_modal={() => this.handle_close_modal('insert')} on_insertion_success={this.update_view}/>
                <UpdateClient modal_shown={this.state.modal_shown['update']} on_hide_modal={() => this.handle_close_modal('update')} client={this.state.client} on_update_success={this.update_view}/>
                <ConfirmDeleteClient />
                <UpdateProfileImage />

                <div className="content">
                    <div className="container">
                        <div className="row">
                            {this.state.clients.map(client => <ClientCard client={client} key={client['_id']} on_open_update_modal={this.open_update_modal} />)}
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