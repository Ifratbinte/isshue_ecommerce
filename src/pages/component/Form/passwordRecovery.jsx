import React, { Component } from 'react'

class PasswordRecovery extends Component {
  render() {
    return (
      <div className="password-recuvery-page">
          <div className="container">
              <h3 className="register-head">Password Recovery</h3>
              <div className="row">
                  <div id="password-recuvery-forms">
                      <form className="form-recuvery">
                          <div className="recuvery-text">
                              <p>Please enter your email address below. You will receive a link to reset your password.</p>
                          </div>
                          <div className="password-recuvery-field">
                              <label htmlFor="email ">Your Email Address<span>*</span></label>
                              <input type="email" id="inputEmail" className="form-control" placeholder="Email address"/>
                          </div>
                          <div className="recuvery-btn">
                              <a href="/" className="button button-sqr btn-transparent">Submit</a>
                          </div>
                          <div className="backto-login">
                              <a href="login.html"><i className="fa fa-long-arrow-left" aria-hidden="true"></i> Back to Login</a>
                          </div>
                      </form>
                      <br/>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
export default PasswordRecovery;