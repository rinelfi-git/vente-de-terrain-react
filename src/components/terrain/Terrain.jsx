import { Component } from "react";
import { Button } from "react-bootstrap";

export default class Terrain extends Component {
    constructor(props) {
        super(props);
        this.state = {};
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
                                    <Button variant="primary">
                                        <span className="material-icons">add</span> Nouveau
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content">
                    <div className="container">
                        <div className="row">
                            
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <ul className="pagination float-right" id="client-pagination">
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}