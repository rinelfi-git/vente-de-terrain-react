import { Component } from "react"
import { Button } from "react-bootstrap";
import ClientCard from "./Card";
import ConfirmDeleteClient from "./ConfirmDelete";
import InsertClient from "./Insert";
import Pagination from "../statics/Pagination";
import SearchCriteria from "../statics/SearchCriteria";
import UpdateClient from "./Update";
import UpdateProfileImage from "./UpdateProfileImage";
import axios from "axios";

export default class Client extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShown: {
                insert: false,
                update: false,
                delete: false
            },
            clients: [],
            client: { adresse: {}, telephones: [] },
            viewCriteria: {
                elementPerPage: 1,
            }
        };
    }

    componentDidMount() {
        this.updateView();
    }

    handleOpenInsertModal = () => {
        const { modalShown } = this.state;
        modalShown['insert'] = true;
        this.setState({ modalShown });
    }

    handleOpenDeleteModal = client => {
        const { modalShown } = this.state;
        modalShown['delete'] = true;
        this.setState({ modalShown, client });
    }

    handleOpenUpdateModal = client => {
        const { modalShown } = this.state;
        modalShown['update'] = true;
        this.setState({ modalShown, client });
    }

    handleCloseModal = scope => {
        const { modalShown } = this.state;
        modalShown[scope] = false;
        this.setState({ modalShown });
    }

    handleUpdateDone = () => {
        const { modalShown } = this.state;
        modalShown['update'] = false;
        this.setState({ modalShown });
        this.updateView();
    }

    handleInsertDone = () => {
        const { modalShown } = this.state;
        modalShown['insert'] = false;
        this.setState({ modalShown });
        this.updateView();
    }

    handleDeleteDone = () => {
        const { modalShown } = this.state;
        modalShown['delete'] = false;
        this.setState({ modalShown });
        this.updateView();
    }

    updateView = async (perPage, fieldName, orderField, orderDirection, searchInput) => {
        console.log(perPage, fieldName, orderField, orderDirection, searchInput);
        try {
            const { data } = await axios.get('http://localhost:5000/client');
            this.setState({ clients: data });
        } catch (error) {
            alert('erreur');
        }
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
                                    <Button variant="primary" onClick={this.handleOpenInsertModal}>
                                        <span className="material-icons">add</span> Nouveau
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <SearchCriteria onPerformSearch={this.updateView} orderFields={[{key: 'cin', value: 'CIN'}, {key: 'nom', value: 'Nom et prénom'}, {key: 'adresse', value: 'Adresse'}]} />
                <InsertClient modalShown={this.state.modalShown['insert']} onHideModal={() => this.handleCloseModal('insert')} onInsertionSuccess={this.handleInsertDone} />
                <UpdateClient modalShown={this.state.modalShown['update']} onHideModal={() => this.handleCloseModal('update')} client={this.state.client} onUpdateSuccess={this.handleUpdateDone} />
                <ConfirmDeleteClient modalShown={this.state.modalShown['delete']} onHideModal={() => this.handleCloseModal('delete')} client={this.state.client} onDeleteSuccess={this.handleDeleteDone}/>
                <UpdateProfileImage />

                <div className="content">
                    <div className="container">
                        <div className="row">
                            {this.state.clients.map(client => <ClientCard client={client} key={client['_id']} onUpdate={this.handleOpenUpdateModal} onDelete={this.handleOpenDeleteModal} />)}
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <ul className="pagination float-right" id="client-pagination">
                                    <Pagination source={`http://localhost:5000/client/pagination`} range={5} onPageUpdate={this.updateView} />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}