import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
            <img src="/assets/images/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '0.8' }} />
            <span className="brand-text font-weight-light">GreenFIELD</span>
          </Link>

          <button className="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse order-3" id="navbarCollapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/application/client" className="nav-link">Client</Link>
              </li>
              <li className="nav-item">
                <Link to="/application/terrain" className="nav-link"> Terrain</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
