import React, { Component } from 'react'

class PasswordRecovery extends Component {
  render() {
    return (
        <div className="password-recuvery-page top-res-gap py-5">
            <div className="container">
                <div className="card my-4">
                    <div className="card-body recovery-information">
                        <form>
                            <div className="recuvery-text mb-3">
                                <h5>Please enter your email address below. You will receive a link to reset your password.</h5>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Your Email Address</label>
                                <input type="email" id="inputEmail" className="form-control" placeholder="Email address"/>
                            </div>
                            <button className="button-primary mr-3">Submit</button>
                            <a className="rec-link" href="/login">Back to login</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
export default PasswordRecovery;