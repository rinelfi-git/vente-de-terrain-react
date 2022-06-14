import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Accueil from './Accueil/Accueil'
import Client from './client/Client'
import Menu from './statics/Menu'
import Terrain from './terrain/Terrain'

export default class UserSpace extends Component {
  render() {
    return (
      <div className="layout-top-nav">
        <div className="wrapper">
          <Menu />
          <Route path="/application/accueil" component={Accueil} />
          <Route path="/application/client" component={Client} />
          <Route path="/application/terrain" component={Terrain} />
        </div>
      </div>
    )
  }
}
