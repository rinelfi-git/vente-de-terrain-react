import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Accueil from './Accueil/Accueil'

export default class UserSpace extends Component {
  render() {
    return (
      <div className="">
        <div className="layout-top-nav">
          <div className="wrapper">
            <BrowserRouter>
              <Route path="/accueil" component={Accueil}/>
            </BrowserRouter>
          </div>
        </div>
      </div>
    )
  }
}
