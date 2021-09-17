import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class login extends Component {
  state = {
    form: {
      self: {
        isValid: false
      },
      username: '',
      password: '',
      rememberMe: false
    },
    errorMessages: ''
  }

  handleFormSubmit = event => {
    event.preventDefault()
    
  }

  handleUsernameChange = event => {
    const form = this.state.form
    form.username = event.currentTarget.value
    this.setState({form})
    this.updateFormState()
  }

  handlePasswordChange = event => {
    const form = this.state.form
    form.password = event.currentTarget.value
    this.setState({form})
    this.updateFormState()
  }

  handleRememberMeChange = event => {
    const form = this.state.form
    form.rememberMe = event.currentTarget.checked
    this.setState({form})
  }

  updateFormState = () => {
    const form = this.state.form
    form.self.isValid = form.username.length > 0 && form.password.length > 0
    this.setState({ form })
  }

  render() {
    return (
      <div className="login-page">
        <div className="login-box">
          <div className="login-logo">
            <Link to="/"><b>Green</b>FIELD</Link>
          </div>
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign in to start your session</p>
              <form onSubmit={this.handleFormSubmit} method="post" autoComplete="off">
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Nom d'utilisateur ou email" value={this.state.form.username} onChange={this.handleUsernameChange} />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input type="password" className="form-control" placeholder="Mot de passe" value={this.state.form.password} onChange={this.handlePasswordChange} />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="icheck-primary ml-2 mb-3">
                    <input type="checkbox" id="remember" value={this.state.form.rememberMe} onChange={this.handleRememberMeChange} />
                    <label htmlFor="remember">
                      Se souvenir de moi
                    </label>
                  </div>
                </div>
                {this.state.errorMessages.length > 0 && <p className="text text-center text-danger" >{this.state.errorMessages}</p>}
                <div className="row">
                  <button type="submit" className="btn btn-primary btn-block" disabled={!this.state.form.self.isValid}>Connexion</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

