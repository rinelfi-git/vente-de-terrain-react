import { Component } from "react"
import { Link } from "react-router-dom"
import Field from "./Field"

export default class Accueil extends Component {
  state = {
    fields: [],
    clients: [],
    fieldCount: 0,
    soldCount: 0,
    clientCount: 0
  }

  render() {
    return (
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark"><b><small>Tableau de bord</small></b></h1>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-4">
                <div className="info-box mb-3">
                  <span className="info-box-icon bg-lightblue elevation-1"><i className="fas fa-thumbs-up"></i></span>
                  <div className="info-box-content">
                    <span className="info-box-text">Terrains</span>
                    <span className="info-box-number">{this.state.fieldCount}</span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <div className="info-box mb-3">
                  <span className="info-box-icon bg-lightblue elevation-1"><i className="fas fa-shopping-cart"></i></span>
                  <div className="info-box-content">
                    <span className="info-box-text">Ventes</span>
                    <span className="info-box-number">{this.state.soldCount}</span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <div className="info-box mb-3">
                  <span className="info-box-icon bg-lightblue elevation-1"><i className="fas fa-users"></i></span>
                  <div className="info-box-content">
                    <span className="info-box-text">Clients</span>
                    <span className="info-box-number">{this.state.clientCount}</span>
                  </div>
                </div>
              </div>
            </div>
            <react-comment>
              <div className="row">
                <div className="col">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Chiffre d'affaires</h3>
                      <div className="card-tools">
                        <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i>
                        </button>
                        <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times"></i></button>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="chart" style={{height: '250px', minWidth: '488px', width: '100%'}}>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </react-comment>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Nouveau terrains ({this.state.fields.length})</h3>
                    <div className="card-tools">
                      <button type="button" className="btn btn-tool" data-card-widget="collapse">
                        <i className="fas fa-minus"></i>
                      </button>
                      <button type="button" className="btn btn-tool" data-card-widget="remove">
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <ul className="products-list product-list-in-card pl-2 pr-2">
                      {this.state.fields.map((field, key) => <Field key={key} name={field.name} surface={field.surface} price={field.price} owner={field.owner} />)}
                    </ul>
                  </div>
                  <div className="card-footer text-center">
                    <Link to="/application/terrain" className="uppercase">Tout voir</Link>
                  </div>

                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Nouveau clients ({this.state.clients.length})</h3>
                    <div className="card-tools">
                      <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i>
                      </button>
                      <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times"></i>
                      </button>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <ul className="users-list clearfix">
                      {
                        //this.state.clients.map((client, key) => <Client key={key} photo={client.photo} firstName={client.firstName} lastName={client.lastName} />)
                      }
                    </ul>
                  </div>
                  <div className="card-footer text-center">
                    <Link to="/application/client" className="uppercase">Tout voir</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
