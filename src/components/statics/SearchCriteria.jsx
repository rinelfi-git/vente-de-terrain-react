import PerPageModal from "./PerPageModal";
import FieldModal from "./FieldModal";
import OrderModal from "./OrderModal";
import { useState } from "react";

export default function SearchCriteria({ searchFields, orderFields, onPerformSearch }) {
    const [perPage, setPerPage] = useState(1);
    const [searchField, setSearchField] = useState('');
    const [input, setInput] = useState('');
    const [orderField, setOrderField] = useState('');
    const [orderDirection, setOrderDirection] = useState(1);
    const [showPerPageModal, setShowPerPageModal] = useState(false);
    const [showFieldModal, setShowFieldModal] = useState(false);
    const [showOrderModal, setShowOrderModal] = useState(false);

    function updateOrderDirection(direction) {
        setOrderDirection(direction);
        onPerformSearch(perPage, searchField, orderField, direction, input);
    }

    function updateOrderField(field) {
        setOrderField(field);
        onPerformSearch(perPage, searchField, field, orderDirection, input);
    }

    function updatePerPage(number) {
        setPerPage(number);
        onPerformSearch(number, searchField, orderField, orderDirection, input);
    }

    function updateSearchCriteria(e) {
        e.preventDefault();
        onPerformSearch(perPage, searchField, orderField, orderDirection, input);
    }

    function updateSearchField(field) {
        setSearchField(field);
        onPerformSearch(perPage, field, orderField, orderDirection, input);
    }

    function updateInput(e) {
        setInput(e.target.value);
    }

    return (
        <>
            <div className="container mb-2">
                <div className="card">
                    <div className="card-body">
                        <form autoComplete="off" onSubmit={updateSearchCriteria}>
                            <div className="input-group input-group-lg">
                                <input className="form-control form-control-navbar" name="keyword" value={input} onChange={updateInput} type="search" placeholder="Recherche" aria-label="Search" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="submit">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="btn-group mt-2">
                                <button type="button" className="btn btn-default mr-2 mb-2" onClick={() => setShowPerPageModal(true)}><span className="material-icons">format_list_numbered</span></button>
                                <button type="button" className="btn btn-default mr-2 mb-2" onClick={() => setShowFieldModal(true)}><span className="material-icons">view_module</span></button>
                                <button type="button" className="btn btn-default mr-2 mb-2" onClick={() => setShowOrderModal(true)}><span className="material-icons">sort</span></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <PerPageModal showModal={showPerPageModal} onHideModal={() => setShowPerPageModal(false)} onUpdate={updatePerPage} />
            <FieldModal showModal={showFieldModal} fields={searchFields} onHideModal={() => setShowFieldModal(false)} onUpdate={updateSearchField} />
            <OrderModal showModal={showOrderModal} fields={orderFields} onHideModal={() => setShowOrderModal(false)} onFieldUpdate={updateOrderField} onOrderUpdate={updateOrderDirection} />
        </>
    );
}