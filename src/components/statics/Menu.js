import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BACK_CLIENT_IMAGE_URL } from '../../utils'

export default class Menu extends Component {
  state = {
    connectedUser: null
  }

  handleDisconnection = event => {
    alert('You are about to end up this session')
  }

  render() {
    return (
      <nav className="main-header navbar navbar-expand-md navbar-light navbar-white">
        <div className="container">
          <Link to="/application/accueil" className="navbar-brand">
            <img src="assets/images/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '0.8'}} />
            <span className="brand-text font-weight-light">GreenFIELD</span>
          </Link>

          <button className="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse order-3" id="navbarCollapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/application/accueil" className="nav-link">Accueil</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/application/client" className="nav-link">Client</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/application/terrain" className="nav-link"> Terrain</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="application/vente" className="nav-link"> Vente</NavLink>
              </li>
            </ul>


            <ul className="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
              <li className="nav-item dropdown user-menu">
                <a href="!#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                  <img src={`${BACK_CLIENT_IMAGE_URL}/${this.state.connectedUser && this.state.connectedUser.photo}`} className="user-image img-circle elevation-2" alt="Connected  user image" />
                  <span className="d-none d-md-inline">{this.state.connectedUser && this.state.connectedUser.username}</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                  <li className="user-header bg-lightblue">
                    <img src={`${BACK_CLIENT_IMAGE_URL}/${this.state.connectedUser && this.state.connectedUser.photo}`} className="img-circle elevation-2" alt="Utilisateur Image" />
                    <p>
                      {`${this.state.connectedUser && this.state.connectedUser.username} - ${this.state.connectedUser && this.state.connectedUser.mailAddress}`}
                    </p>
                  </li>
                  <li className="user-footer">
                    <button type="button" className="btn btn-default btn-flat float-right" onClick={this.handleDisconnection}>Déconnexion</button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
