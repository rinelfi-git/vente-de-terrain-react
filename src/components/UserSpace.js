import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Accueil from './Accueil/Accueil'
import Menu from './statics/Menu'

export default class UserSpace extends Component {
  render() {
    return (
      <div className="layout-top-nav">
        <div className="wrapper">
          <Menu />
          <Route path="/application/accueil" component={Accueil} />
        </div>
      </div>
    )
  }
}
